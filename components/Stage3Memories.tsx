"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Stage3Memories({ onComplete }: { onComplete: () => void }) {

    // Auto-advance after 5 seconds to the proposal
    useEffect(() => {
        const timer = setTimeout(onComplete, 5000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white/90 p-8 rounded-3xl shadow-xl text-center max-w-sm"
        >
            <h2 className="text-3xl font-bold text-pink-600 mb-4">Just one more thing...</h2>
            <p className="text-gray-600 text-lg mb-6">
                You make every day brighter. I wanted to ask you something special.
            </p>

            {/* You can add an actual image here if you want */}
            <div className="w-full h-48 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-4xl">❤️</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                    className="bg-pink-500 h-2 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5 }}
                />
            </div>
            <p className="text-sm text-gray-400 mt-2">Loading important question...</p>
        </motion.div>
    );
}