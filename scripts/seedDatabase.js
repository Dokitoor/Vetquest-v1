// scripts/seedDatabase.js
import admin from "firebase-admin";
import serviceAccount from "../firebase-admin-sdk.json" assert { type: 'json' };
import dotenv from "dotenv";

dotenv.config();

// Initialize Firebase Admin (bypasses security rules)
const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${serviceAccount.project_id}-default-rtdb.firebaseio.com`,
});

const database = admin.database(app);

// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split("T")[0];

// Seed sample quiz questions
const sampleQuestions = [
    {
        id: 1,
        question: "What is the normal heart rate range for an adult dog?",
        options: ["30-60 bpm", "60-140 bpm", "120-160 bpm", "140-180 bpm"],
        correctAnswer: 1, // Index of correct option
    },
    {
        id: 2,
        question:
            "Which of the following is NOT typically a sign of heart failure in cats?",
        options: ["Dyspnea", "Increased appetite", "Lethargy", "Coughing"],
        correctAnswer: 1,
    },
    // Add more questions...
];

// Seed sample case study
const sampleCase = {
    title: "Canine Chronic Kidney Disease Management",
    patientInfo: {
        species: "Canine",
        breed: "Labrador Retriever",
        age: "11 years",
        sex: "Female spayed",
        weight: "28 kg",
    },
    history:
        "Progressive lethargy, polyuria, polydipsia for 3 weeks. Recent weight loss. Previously diagnosed with hypothyroidism, currently on levothyroxine.",
    clinicalFindings:
        "Mild dehydration, pale mucous membranes, slight oral ulceration, moderate dental disease. BP: 165/95 mmHg.",
    diagnostics: {
        bloodwork:
            "Elevated BUN (48 mg/dL) and creatinine (2.7 mg/dL), hyperphosphatemia (6.4 mg/dL), mild anemia (HCT 30%), normal electrolytes.",
        urinalysis:
            "USG 1.018, 1+ protein, no glucose, no ketones, no sediment abnormalities.",
        imaging:
            "Abdominal ultrasound revealed bilateral small, irregular kidneys with reduced corticomedullary distinction.",
    },
    diagnosis:
        "Stage 3 chronic kidney disease with secondary renal hypertension",
    treatmentPlan:
        "1. Renal diet, 2. Phosphate binder, 3. Blood pressure management with amlodipine, 4. Fluid therapy protocol, 5. Regular monitoring of renal values, electrolytes, and blood pressure",
    learningPoints: [
        "IRIS staging for chronic kidney disease",
        "Importance of blood pressure management in CKD",
        "Dietary management strategies for renal patients",
        "Monitoring parameters for CKD progression",
    ],
};

async function seedDatabase() {
    try {
        // Reference to database locations
        const quizRef = database.ref(`dailyQuizzes/${today}/questions`);
        const caseRef = database.ref(`caseStudies/${today}`);

        // Seed daily quiz questions
        await quizRef.set(sampleQuestions);
        console.log("Sample quiz questions seeded successfully");

        // Seed daily case study
        await caseRef.set(sampleCase);
        console.log("Sample case study seeded successfully");

        console.log("Database seeding completed!");
        process.exit(0);
    } catch (error) {
        console.error("Error seeding database:", error);
        process.exit(1);
    }
}

seedDatabase();
