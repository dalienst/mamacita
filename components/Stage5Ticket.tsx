"use client";
import { useRef, useState } from "react";
import { domToPng } from "modern-screenshot";
import jsPDF from "jspdf";
import { Download, Briefcase, FileText, Loader2 } from "lucide-react";

export default function Stage5Ticket() {
    const ticketRef = useRef<HTMLDivElement>(null);
    const [isDownloading, setIsDownloading] = useState(false);

    const downloadTicket = async () => {
        if (!ticketRef.current) return;

        try {
            setIsDownloading(true);

            // 0. Wait for fonts to be ready
            await document.fonts.ready;

            // 0.5. Small delay for any paint operations
            await new Promise((resolve) => setTimeout(resolve, 100));

            // Get exact dimensions of the element to ensure full capture
            const { offsetWidth, offsetHeight } = ticketRef.current;

            // 1. Capture using modern-screenshot
            // It often handles modern CSS and foreign objects better than html-to-image
            const imgData = await domToPng(ticketRef.current, {
                scale: 2, // High resolution
                backgroundColor: "#ffffff",
                width: offsetWidth,
                height: offsetHeight,
                style: {
                    backgroundColor: "#ffffff", // Force white background
                }
            });

            // 2. Initialize PDF
            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "px",
                format: "a4"
            });

            // 3. Calculate scaling to fit PDF width
            const pdfWidth = pdf.internal.pageSize.getWidth();

            // Scale image to fit the PDF width, maintaining aspect ratio
            const ratio = pdfWidth / offsetWidth;
            const imgHeightInPdf = offsetHeight * ratio;

            // 4. Add image to PDF
            pdf.addImage(imgData, "PNG", 0, 20, pdfWidth, imgHeightInPdf);
            pdf.save("Valentine_Event_Order_2026.pdf");

        } catch (err) {
            console.error("Failed to generate PDF", err);
            alert("Ticket generation failed. Check console for details, or try a different browser.");
        } finally {
            setIsDownloading(false);
        }
    };

    // Helper for current date
    const today = new Date().toLocaleDateString("en-GB", { // en-GB for DD/MM/YYYY
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });

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
                - Forced colors to avoid 'lab' parsing issues with Tailwind 4 defaults
            */}
            <div
                ref={ticketRef}
                className="w-full max-w-[650px] bg-white shadow-2xl p-6 md:p-14 relative text-gray-900 font-serif border border-gray-200 mx-auto"
                style={{ backgroundColor: '#ffffff', color: '#111827' }}
            >
                {/* --- HEADER --- */}
                <div className="border-b-4 border-gray-900 pb-4 mb-6 md:mb-8 flex flex-col md:flex-row justify-between md:items-end gap-4" style={{ borderColor: '#111827' }}>
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="bg-gray-900 text-white p-2 rounded" style={{ backgroundColor: '#111827', color: '#ffffff' }}>
                                <Briefcase className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div className="leading-none">
                                <h1 className="text-xl md:text-2xl font-bold uppercase tracking-wider">Official Event</h1>
                                <h1 className="text-xl md:text-2xl font-bold uppercase tracking-wider">Order</h1>
                            </div>
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-2" style={{ color: '#6b7280' }}>Department of Romantic Logistics</p>
                    </div>

                    <div className="text-left md:text-right">
                        <div className="border border-gray-900 px-2 py-1 inline-block mb-1" style={{ borderColor: '#111827' }}>
                            <p className="font-bold text-[10px] md:text-xs uppercase">Class: PRIORITY A1</p>
                        </div>
                        <p className="text-xs text-gray-600 font-sans" style={{ color: '#4b5563' }}><strong>Date:</strong> Feb 14, 2026</p>
                        <p className="text-xs text-gray-600 font-sans" style={{ color: '#4b5563' }}><strong>Case ID:</strong> LOVE-26-FINAL</p>
                    </div>
                </div>

                {/* --- EXECUTION DETAILS (Responsive Grid) --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-10 text-sm font-sans">
                    <div>
                        <p className="font-bold text-gray-400 uppercase text-[10px] mb-1" style={{ color: '#9ca3af' }}>Issued By (Operator):</p>
                        <p className="font-bold text-lg text-gray-900" style={{ color: '#111827' }}>Dalienst Owino Oduor</p>
                        <p className="text-gray-600 text-xs md:text-sm" style={{ color: '#4b5563' }}>Head of Operations</p>
                    </div>
                    <div>
                        <p className="font-bold text-gray-400 uppercase text-[10px] mb-1" style={{ color: '#9ca3af' }}>Recipient (VIP):</p>
                        <p className="font-bold text-lg text-gray-900" style={{ color: '#111827' }}>My Valentine</p>
                        <p className="text-gray-600 text-xs md:text-sm" style={{ color: '#4b5563' }}>Subject of Affection</p>
                    </div>
                </div>

                {/* --- THE SCHEDULE --- */}
                <div className="mb-8">
                    <h3 className="text-xs font-bold uppercase border-b border-gray-400 mb-2 pb-1" style={{ borderColor: '#9ca3af' }}>Operational Schedule</h3>

                    {/* Overflow wrapper ensures table doesn't break layout on tiny screens */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm font-sans border-collapse min-w-[300px]">
                            <thead>
                                <tr className="bg-gray-100 text-gray-600 text-[10px] uppercase" style={{ backgroundColor: '#f3f4f6', color: '#4b5563' }}>
                                    <th className="py-2 px-2 font-bold whitespace-nowrap">Time (EAT)</th>
                                    <th className="py-2 px-2 font-bold">Activity / Module</th>
                                    <th className="py-2 px-2 font-bold text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200" style={{ borderColor: '#e5e7eb' }}>
                                {/* Bowling */}
                                <tr>
                                    <td className="py-3 px-2 align-top font-mono text-gray-500 text-xs whitespace-nowrap" style={{ color: '#6b7280' }}>11:00 HRS</td>
                                    <td className="py-3 px-2">
                                        <p className="font-bold text-gray-900 text-sm" style={{ color: '#111827' }}>Bowling Championship</p>
                                        <p className="text-gray-500 text-[10px] md:text-xs mt-0.5" style={{ color: '#6b7280' }}>Competitive module. Winner takes all.</p>
                                    </td>
                                    <td className="py-3 px-2 text-right align-top">
                                        <span className="bg-blue-100 text-blue-800 text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full uppercase" style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}>Booked</span>
                                    </td>
                                </tr>
                                {/* Shaki */}
                                <tr>
                                    <td className="py-3 px-2 align-top font-mono text-gray-500 text-xs whitespace-nowrap" style={{ color: '#6b7280' }}>13:00 HRS</td>
                                    <td className="py-3 px-2">
                                        <p className="font-bold text-gray-900 text-sm" style={{ color: '#111827' }}>Lunch at Shaki</p>
                                        <p className="text-gray-500 text-[10px] md:text-xs mt-0.5" style={{ color: '#6b7280' }}>Refueling protocol. Cuisine exploration.</p>
                                    </td>
                                    <td className="py-3 px-2 text-right align-top">
                                        <span className="bg-green-100 text-green-800 text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full uppercase" style={{ backgroundColor: '#dcfce7', color: '#166534' }}>Confirmed</span>
                                    </td>
                                </tr>
                                {/* Movies */}
                                <tr>
                                    <td className="py-3 px-2 align-top font-mono text-gray-500 text-xs whitespace-nowrap" style={{ color: '#6b7280' }}>15:00 HRS</td>
                                    <td className="py-3 px-2">
                                        <p className="font-bold text-gray-900 text-sm" style={{ color: '#111827' }}>Movies & Drinks</p>
                                        <p className="text-gray-500 text-[10px] md:text-xs mt-0.5" style={{ color: '#6b7280' }}>Relaxation phase. Popcorn allocation mandatory.</p>
                                    </td>
                                    <td className="py-3 px-2 text-right align-top">
                                        <span className="bg-purple-100 text-purple-800 text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full uppercase" style={{ backgroundColor: '#f3e8ff', color: '#6b21a8' }}>Scheduled</span>
                                    </td>
                                </tr>
                                {/* Future */}
                                <tr>
                                    <td className="py-3 px-2 align-top font-mono text-gray-500 text-xs whitespace-nowrap" style={{ color: '#6b7280' }}>18:00 HRS</td>
                                    <td className="py-3 px-2">
                                        <p className="font-bold text-gray-900 text-sm" style={{ color: '#111827' }}>Future Planning</p>
                                        <p className="text-gray-500 text-[10px] md:text-xs mt-0.5" style={{ color: '#6b7280' }}>Discussion of long-term roadmap.</p>
                                    </td>
                                    <td className="py-3 px-2 text-right align-top">
                                        <span className="bg-yellow-100 text-yellow-800 text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full uppercase" style={{ backgroundColor: '#fef9c3', color: '#854d0e' }}>Required</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* --- TERMS & CONDITIONS --- */}
                <div className="bg-gray-50 p-3 md:p-4 rounded border border-gray-100 mb-8" style={{ backgroundColor: '#f9fafb', borderColor: '#f3f4f6' }}>
                    <p className="text-[10px] uppercase font-bold text-gray-400 mb-1" style={{ color: '#9ca3af' }}>Terms of Engagement</p>
                    <p className="text-[10px] text-gray-500 leading-relaxed text-justify" style={{ color: '#6b7280' }}>
                        By accepting this document (via the "YES" protocol), the Recipient agrees to be present for all scheduled modules.
                        Use of mobile devices is restricted during "Quality Time" phases.
                        Excessive smiling and laughter are mandatory.
                        Pictures will be taken in plenty.
                        This contract is binding in perpetuity.
                    </p>
                </div>

                {/* --- FOOTER / SIGNATURE (Responsive Stack) --- */}
                <div className="mt-auto pt-4 grid grid-cols-1 sm:grid-cols-2 gap-8 relative">

                    {/* STAMP EFFECT - Centered absolutely on Desktop, Relative/Adjusted on Mobile */}
                    <div className="hidden sm:block absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] border-[6px] border-red-600/20 text-red-600/20 font-black text-6xl px-6 py-2 uppercase rounded-lg pointer-events-none select-none z-0" style={{ borderColor: 'rgba(220, 38, 38, 0.2)', color: 'rgba(220, 38, 38, 0.2)' }}>
                        AUTHORIZED
                    </div>
                    {/* Mobile Only Stamp (Smaller, positioned normally) */}
                    <div className="sm:hidden text-center mb-4">
                        <span className="inline-block rotate-[-6deg] border-[4px] border-red-600/20 text-red-600/20 font-black text-3xl px-4 py-1 uppercase rounded" style={{ borderColor: 'rgba(220, 38, 38, 0.2)', color: 'rgba(220, 38, 38, 0.2)' }}>
                            AUTHORIZED
                        </span>
                    </div>

                    <div className="z-10 relative text-center sm:text-left">
                        <p className="text-[10px] font-bold uppercase text-gray-400 mb-4 sm:mb-6" style={{ color: '#9ca3af' }}>Approved By (Sign Below)</p>
                        <div className="font-script text-3xl md:text-4xl text-blue-900 -rotate-2 font-bold mb-2" style={{ color: '#1e3a8a' }}>
                            Baba
                        </div>
                        <div className="h-px w-full bg-gray-300" style={{ backgroundColor: '#d1d5db' }}></div>
                    </div>

                    <div className="z-10 relative text-center sm:text-right">
                        <p className="text-[10px] font-bold uppercase text-gray-400 mb-4 sm:mb-6" style={{ color: '#9ca3af' }}>Date of Approval</p>
                        <p className="font-mono text-lg md:text-xl text-gray-700 mb-2" style={{ color: '#374151' }}>{today}</p>
                        <div className="h-px w-full bg-gray-300" style={{ backgroundColor: '#d1d5db' }}></div>
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
                disabled={isDownloading}
                className="mt-8 md:mt-10 flex items-center gap-2 bg-gray-900 text-white font-bold py-3 px-6 md:px-8 rounded-full shadow-xl hover:bg-gray-800 transition-all transform hover:scale-105 text-sm md:text-base relative w-full sm:w-auto justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isDownloading ? (
                    <>
                        <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                        <span>Generating Ticket...</span>
                    </>
                ) : (
                    <>
                        <Download className="w-4 h-4 md:w-5 md:h-5" />
                        <span>Download Official Order (PDF)</span>
                    </>
                )}
            </button>
        </div>
    );
}