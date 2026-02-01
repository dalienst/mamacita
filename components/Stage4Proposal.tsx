"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function Stage4Proposal({ onYes }: { onYes: () => void }) {
    const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });

    const moveNoButton = () => {
        const x = Math.random() * 200 - 100; // Random x between -100 and 100
        const y = Math.random() * 200 - 100; // Random y between -100 and 100
        setNoBtnPosition({ x, y });
    };

    const handleYes = () => {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ec4899', '#8b5cf6'] // Pink and Purple confetti
        });
        onYes();
    };

    return (
        <div className="bg-white/90 p-10 rounded-3xl shadow-2xl text-center">
            <div className="mb-6">
                <img
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnJqY2dtcnB4aGdhb2E4aG9uY3B4c295bWR6ZWFoemQyM3BieG13eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
                    alt="Cute Bear"
                    className="w-48 mx-auto rounded-lg"
                />
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-8">
                Will you be my Valentine? 🌹
            </h1>

            <div className="flex justify-center gap-4 relative h-16">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleYes}
                    className="bg-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-pink-600 transition-colors z-10"
                >
                    YES!
                </motion.button>

                <motion.button
                    animate={noBtnPosition}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    onHoverStart={moveNoButton}
                    className="bg-gray-300 text-gray-600 font-bold py-3 px-8 rounded-full shadow-lg absolute"
                    style={{ left: "60%" }} // Start slightly to the right
                >
                    No
                </motion.button>
            </div>
        </div>
    );
}