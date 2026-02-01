"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Eye, EyeOff } from "lucide-react";

export default function Stage1LockScreen({ onUnlock }: { onUnlock: () => void }) {
    const [passcode, setPasscode] = useState("");
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // HARDCODED PASSWORD HERE
    const CORRECT_CODE = "1012";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (passcode === CORRECT_CODE) {
            onUnlock();
        } else {
            setError(true);
            setTimeout(() => setError(false), 500);
            setPasscode("");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl text-center"
        >
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="text-purple-600 w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Restricted Access</h1>
            <p className="text-gray-500 mb-6">Enter the secret passcode to view this file. (Hint: It's when you said yes)</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        value={passcode}
                        onChange={(e) => setPasscode(e.target.value)}
                        placeholder="Enter Passcode"
                        className="w-full px-4 py-3 rounded-xl border-2 border-purple-100 focus:border-purple-500 focus:outline-none text-center text-xl tracking-widest text-gray-900 pr-12"
                        autoFocus
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-600 transition-colors"
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold shadow-lg"
                >
                    Unlock
                </motion.button>
            </form>
        </motion.div>
    );
}