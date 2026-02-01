"use client";
import { useRef } from "react";
import html2canvas from "html2canvas";
import { Download, Briefcase, FileText } from "lucide-react";

export default function Stage5Ticket() {
    const ticketRef = useRef<HTMLDivElement>(null);

    const downloadTicket = async () => {
        if (ticketRef.current) {
            const canvas = await html2canvas(ticketRef.current, {
                backgroundColor: "#ffffff",
                scale: 3, // High resolution for crisp text
                useCORS: true,
                logging: false,
                // These settings ensure we capture the whole invoice even if scrolled
                windowWidth: ticketRef.current.scrollWidth,
                windowHeight: ticketRef.current.scrollHeight
            });
            const link = document.createElement("a");
            link.download = "Valentine_Event_Order_2026.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full p-4 bg-gray-50/50">

            <div className="text-center mb-6 md:mb-8">
                <h2 className="text-gray-800 text-2xl md:text-3xl font-bold mb-2">
                    Mission Confirmed 🫡
                </h2>
                <p className="text-gray-500 text-xs md:text-sm">Review your operational orders below.</p>
            </div>

            {/* DOCUMENT CONTAINER 
                - On mobile: Auto height, smaller padding
                - On desktop: Fixed max-width, larger padding, A4-ish ratio
            */}
            <div
                ref={ticketRef}
                className="w-full max-w-[650px] bg-white shadow-2xl p-6 md:p-14 relative text-gray-900 font-serif border border-gray-200 mx-auto"
            >
                {/* --- HEADER --- */}
                <div className="border-b-4 border-gray-900 pb-4 mb-6 md:mb-8 flex flex-col md:flex-row justify-between md:items-end gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="bg-gray-900 text-white p-2 rounded">
                                <Briefcase className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div className="leading-none">
                                <h1 className="text-xl md:text-2xl font-bold uppercase tracking-wider">Official Event</h1>
                                <h1 className="text-xl md:text-2xl font-bold uppercase tracking-wider">Order</h1>
                            </div>
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-2">Department of Romantic Logistics</p>
                    </div>

                    <div className="text-left md:text-right">
                        <div className="border border-gray-900 px-2 py-1 inline-block mb-1">
                            <p className="font-bold text-[10px] md:text-xs uppercase">Class: PRIORITY A1</p>
                        </div>
                        <p className="text-xs text-gray-600 font-sans"><strong>Date:</strong> Feb 14, 2026</p>
                        <p className="text-xs text-gray-600 font-sans"><strong>Case ID:</strong> LOVE-26-FINAL</p>
                    </div>
                </div>

                {/* --- EXECUTION DETAILS (Responsive Grid) --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-10 text-sm font-sans">
                    <div>
                        <p className="font-bold text-gray-400 uppercase text-[10px] mb-1">Issued By (Operator):</p>
                        <p className="font-bold text-lg text-gray-900">Your Name</p>
                        <p className="text-gray-600 text-xs md:text-sm">Head of Operations</p>
                    </div>
                    <div>
                        <p className="font-bold text-gray-400 uppercase text-[10px] mb-1">Recipient (VIP):</p>
                        <p className="font-bold text-lg text-gray-900">My Valentine</p>
                        <p className="text-gray-600 text-xs md:text-sm">Subject of Affection</p>
                    </div>
                </div>

                {/* --- THE SCHEDULE --- */}
                <div className="mb-8">
                    <h3 className="text-xs font-bold uppercase border-b border-gray-400 mb-2 pb-1">Operational Schedule</h3>

                    {/* Overflow wrapper ensures table doesn't break layout on tiny screens */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm font-sans border-collapse min-w-[300px]">
                            <thead>
                                <tr className="bg-gray-100 text-gray-600 text-[10px] uppercase">
                                    <th className="py-2 px-2 font-bold whitespace-nowrap">Time (EAT)</th>
                                    <th className="py-2 px-2 font-bold">Activity / Module</th>
                                    <th className="py-2 px-2 font-bold text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {/* Bowling */}
                                <tr>
                                    <td className="py-3 px-2 align-top font-mono text-gray-500 text-xs whitespace-nowrap">11:00 HRS</td>
                                    <td className="py-3 px-2">
                                        <p className="font-bold text-gray-900 text-sm">Bowling Championship</p>
                                        <p className="text-gray-500 text-[10px] md:text-xs mt-0.5">Competitive module. Winner takes all.</p>
                                    </td>
                                    <td className="py-3 px-2 text-right align-top">
                                        <span className="bg-blue-100 text-blue-800 text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Booked</span>
                                    </td>
                                </tr>
                                {/* Shaki */}
                                <tr>
                                    <td className="py-3 px-2 align-top font-mono text-gray-500 text-xs whitespace-nowrap">13:00 HRS</td>
                                    <td className="py-3 px-2">
                                        <p className="font-bold text-gray-900 text-sm">Lunch at Shaki</p>
                                        <p className="text-gray-500 text-[10px] md:text-xs mt-0.5">Refueling protocol. Cuisine exploration.</p>
                                    </td>
                                    <td className="py-3 px-2 text-right align-top">
                                        <span className="bg-green-100 text-green-800 text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Confirmed</span>
                                    </td>
                                </tr>
                                {/* Movies */}
                                <tr>
                                    <td className="py-3 px-2 align-top font-mono text-gray-500 text-xs whitespace-nowrap">15:00 HRS</td>
                                    <td className="py-3 px-2">
                                        <p className="font-bold text-gray-900 text-sm">Movies & Drinks</p>
                                        <p className="text-gray-500 text-[10px] md:text-xs mt-0.5">Relaxation phase. Popcorn allocation mandatory.</p>
                                    </td>
                                    <td className="py-3 px-2 text-right align-top">
                                        <span className="bg-purple-100 text-purple-800 text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Scheduled</span>
                                    </td>
                                </tr>
                                {/* Future */}
                                <tr>
                                    <td className="py-3 px-2 align-top font-mono text-gray-500 text-xs whitespace-nowrap">18:00 HRS</td>
                                    <td className="py-3 px-2">
                                        <p className="font-bold text-gray-900 text-sm">Future Planning</p>
                                        <p className="text-gray-500 text-[10px] md:text-xs mt-0.5">Discussion of long-term roadmap.</p>
                                    </td>
                                    <td className="py-3 px-2 text-right align-top">
                                        <span className="bg-yellow-100 text-yellow-800 text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Required</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* --- TERMS & CONDITIONS --- */}
                <div className="bg-gray-50 p-3 md:p-4 rounded border border-gray-100 mb-8">
                    <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Terms of Engagement</p>
                    <p className="text-[10px] text-gray-500 leading-relaxed text-justify">
                        By accepting this document (via the "YES" protocol), the Recipient agrees to be present for all scheduled modules.
                        Use of mobile devices is restricted during "Quality Time" phases.
                        Excessive smiling and laughter are mandatory.
                        This contract is binding in perpetuity.
                    </p>
                </div>

                {/* --- FOOTER / SIGNATURE (Responsive Stack) --- */}
                <div className="mt-auto pt-4 grid grid-cols-1 sm:grid-cols-2 gap-8 relative">

                    {/* STAMP EFFECT - Centered absolutely on Desktop, Relative/Adjusted on Mobile */}
                    <div className="hidden sm:block absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] border-[6px] border-red-600/20 text-red-600/20 font-black text-6xl px-6 py-2 uppercase rounded-lg pointer-events-none select-none z-0">
                        AUTHORIZED
                    </div>
                    {/* Mobile Only Stamp (Smaller, positioned normally) */}
                    <div className="sm:hidden text-center mb-4">
                        <span className="inline-block rotate-[-6deg] border-[4px] border-red-600/20 text-red-600/20 font-black text-3xl px-4 py-1 uppercase rounded">
                            AUTHORIZED
                        </span>
                    </div>

                    <div className="z-10 relative text-center sm:text-left">
                        <p className="text-[10px] font-bold uppercase text-gray-400 mb-4 sm:mb-6">Approved By (Sign Below)</p>
                        <div className="font-script text-3xl md:text-4xl text-blue-900 -rotate-2 font-bold mb-2">
                            Mr. Developer
                        </div>
                        <div className="h-px w-full bg-gray-300"></div>
                    </div>

                    <div className="z-10 relative text-center sm:text-right">
                        <p className="text-[10px] font-bold uppercase text-gray-400 mb-4 sm:mb-6">Date of Approval</p>
                        <p className="font-mono text-lg md:text-xl text-gray-700 mb-2">02 / 02 / 2026</p>
                        <div className="h-px w-full bg-gray-300"></div>
                    </div>
                </div>

                {/* Watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
                    <FileText className="w-64 h-64 md:w-96 md:h-96 text-black" />
                </div>
            </div>

            {/* DOWNLOAD BUTTON */}
            <button
                onClick={downloadTicket}
                className="mt-8 md:mt-10 flex items-center gap-2 bg-gray-900 text-white font-bold py-3 px-6 md:px-8 rounded-full shadow-xl hover:bg-gray-800 transition-all transform hover:scale-105 text-sm md:text-base"
            >
                <Download className="w-4 h-4 md:w-5 md:h-5" />
                Download Official Order
            </button>
        </div>
    );
}