"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
            className="bg-white/90 p-8 rounded-3xl shadow-xl text-center max-w-sm w-full mx-auto"
        >
            <h2 className="text-3xl font-bold text-pink-600 mb-4">Just one more thing...</h2>
            <p className="text-gray-600 text-lg mb-6">
                You make every day brighter. I wanted to ask you something special.
            </p>

            {/* FIX APPLIED:
               1. relative: allows the inner Image 'fill' to work relative to this div.
               2. w-full h-64: Fixed height but responsive width.
               3. overflow-hidden: Ensures the image doesn't bleed outside the rounded corners.
            */}
            <div className="relative w-full h-64 bg-purple-100 rounded-xl overflow-hidden mb-6 shadow-inner">
                <Image
                    src="/mamacita.jpg"
                    alt="Mamacita"
                    fill // Fills the parent container
                    className="object-cover" // Ensures image covers space without distortion
                    priority // Loads image immediately
                />
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