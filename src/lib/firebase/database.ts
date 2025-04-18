import { database } from "./config";
import { ref, set, get } from "firebase/database";
import { User } from "firebase/auth";

// User profile functions
export const createUserProfile = async (user: User) => {
    try {
        const userRef = ref(database, `users/${user.uid}/profile`);
        await set(userRef, {
            displayName: user.displayName || "Anonymous User",
            email: user.email,
            photoURL: user.photoURL || null,
            createdAt: new Date().toISOString(),
        });
        return true;
    } catch (error) {
        console.error("Error creating user profile:", error);
        throw new Error("Failed to create user profile");
    }
};

// Quiz functions
export const saveQuizScore = async (userId: string, score: number) => {
    try {
        const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format
        const scoreRef = ref(database, `users/${userId}/quizScores/${today}`);
        await set(scoreRef, {
            score,
            completedAt: new Date().toISOString(),
        });

        // Update leaderboard
        const userSnapshot = await get(ref(database, `users/${userId}/profile`));
        if (!userSnapshot.exists()) {
            throw new Error("User profile not found");
        }
        
        const userData = userSnapshot.val();

        const leaderboardRef = ref(
            database,
            `dailyQuizzes/${today}/leaderboard/${userId}`
        );
        await set(leaderboardRef, {
            score,
            displayName: userData.displayName,
            photoURL: userData.photoURL || null,
        });
        
        return true;
    } catch (error) {
        console.error("Error saving quiz score:", error);
        throw new Error("Failed to save quiz score");
    }
};

export const getDailyQuizQuestions = async () => {
    try {
        const today = new Date().toISOString().split("T")[0];
        const questionsRef = ref(database, `dailyQuizzes/${today}/questions`);
        const snapshot = await get(questionsRef);

        if (!snapshot.exists()) {
            // If questions don't exist for today
            return null;
        }

        return snapshot.val();
    } catch (error) {
        console.error("Error getting daily quiz questions:", error);
        throw new Error("Failed to retrieve quiz questions");
    }
};

export const getDailyLeaderboard = async () => {
    try {
        const today = new Date().toISOString().split("T")[0];
        const leaderboardRef = ref(database, `dailyQuizzes/${today}/leaderboard`);
        const snapshot = await get(leaderboardRef);

        if (!snapshot.exists()) {
            return [];
        }

        // Convert to array and sort by score (highest first)
        const leaderboardData = snapshot.val();
        return Object.entries(leaderboardData)
            .map(([uid, data]) => ({
                uid,
                ...(data as any),
            }))
            .sort((a, b) => b.score - a.score);
    } catch (error) {
        console.error("Error getting daily leaderboard:", error);
        throw new Error("Failed to retrieve leaderboard data");
    }
};

// Case study functions
export const getDailyCase = async () => {
    try {
        const today = new Date().toISOString().split("T")[0];
        const caseRef = ref(database, `caseStudies/${today}`);
        const snapshot = await get(caseRef);

        if (!snapshot.exists()) {
            // If case doesn't exist for today
            return null;
        }

        return snapshot.val();
    } catch (error) {
        console.error("Error getting daily case:", error);
        throw new Error("Failed to retrieve daily case study");
    }
};

// Multiplayer functions
export const createMultiplayerRoom = async (
    userId: string,
    roomName: string
) => {
    try {
        // Generate a random room code
        const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();

        const roomRef = ref(database, `multiplayerRooms/${roomCode}`);
        await set(roomRef, {
            name: roomName,
            createdBy: userId,
            createdAt: new Date().toISOString(),
            status: "waiting", // waiting, active, completed
            participants: {
                [userId]: {
                    isHost: true,
                    joinedAt: new Date().toISOString(),
                    score: 0,
                },
            },
        });

        return roomCode;
    } catch (error) {
        console.error("Error creating multiplayer room:", error);
        throw new Error("Failed to create multiplayer room");
    }
};

export const joinMultiplayerRoom = async (userId: string, roomCode: string) => {
    try {
        const roomRef = ref(database, `multiplayerRooms/${roomCode}`);
        const snapshot = await get(roomRef);

        if (!snapshot.exists()) {
            throw new Error("Room not found");
        }
        
        if (snapshot.val().status !== "waiting") {
            throw new Error("Room is no longer accepting participants");
        }

        // Add user to participants
        await set(
            ref(database, `multiplayerRooms/${roomCode}/participants/${userId}`),
            {
                isHost: false,
                joinedAt: new Date().toISOString(),
                score: 0,
            }
        );

        return snapshot.val();
    } catch (error) {
        console.error("Error joining multiplayer room:", error);
        throw error; // Pass specific error messages for room not found cases
    }
};