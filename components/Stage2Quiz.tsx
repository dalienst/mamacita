"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const questions = [
    {
        id: 1,
        text: "Where was our first date?",
        options: ["Floating Restaurant", "Chicken Inn", "Milano", "The Park"],
        correct: 0
    },
    {
        id: 2,
        text: "What is my favorite meal?",
        options: ["Loaded Fries", "Chicken", "Biriyani", "Your Butt"],
        correct: 3
    },
    {
        id: 3,
        text: "Who loves the other person more?",
        options: ["You do", "I do", "It's a tie", "Me"],
        correct: 3
    },
    {
        id: 4,
        text: "What is the most recent nickname I gave you?",
        options: ["Mamacita", "Miss White Butt", "Wife", "My Love"],
        correct: 1
    }
];

export default function Stage2Quiz({ onComplete }: { onComplete: () => void }) {
    const [currentQ, setCurrentQ] = useState(0);
    const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" });


    const handleAnswer = (index: number) => {
        if (index === questions[currentQ].correct) {
            if (currentQ < questions.length - 1) {
                setCurrentQ(currentQ + 1);
            } else {
                onComplete();
            }
        } else {
            setToast({ show: true, message: "Try again! 😘" });
            setTimeout(() => setToast({ show: false, message: "" }), 2000);
        }
    };

    return (
        <>
            <motion.div
                key={currentQ}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="bg-white/90 p-8 rounded-3xl shadow-xl text-center"
            >
                <div className="mb-4 text-pink-500 font-bold tracking-wider">
                    QUESTION {currentQ + 1}/{questions.length}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-8">{questions[currentQ].text}</h2>

                <div className="grid gap-3">
                    {questions[currentQ].options.map((option, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleAnswer(idx)}
                            className="w-full py-3 px-6 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-xl font-medium transition-colors text-left"
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </motion.div>
            <AnimatePresence>
                {toast.show && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.3 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                        className="fixed bottom-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg font-medium z-50 flex items-center gap-2"
                    >
                        <span>❌</span>
                        {toast.message}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}