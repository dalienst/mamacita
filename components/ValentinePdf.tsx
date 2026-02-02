"use client";

import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "#ffffff",
        padding: 40,
        fontFamily: "Helvetica",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        borderBottomWidth: 4,
        borderBottomColor: "#111827",
        paddingBottom: 16,
        marginBottom: 24,
    },
    headerLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    briefcaseBox: {
        backgroundColor: "#111827",
        padding: 8,
        borderRadius: 4,
        marginRight: 12,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#111827",
        textTransform: "uppercase",
        letterSpacing: 2,
    },
    subtitle: {
        fontSize: 10,
        color: "#6b7280",
        textTransform: "uppercase",
        letterSpacing: 1.5,
        marginTop: 4,
    },
    headerRight: {
        alignItems: "flex-end",
    },
    priorityBox: {
        borderWidth: 1,
        borderColor: "#111827",
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginBottom: 4,
    },
    priorityText: {
        fontSize: 10,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    issuedBySection: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 32,
    },
    column: {
        width: "48%",
    },
    label: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#9ca3af",
        textTransform: "uppercase",
        marginBottom: 4,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#111827",
    },
    role: {
        fontSize: 12,
        color: "#4b5563",
    },
    scheduleTitle: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#111827",
        textTransform: "uppercase",
        borderBottomWidth: 1,
        borderBottomColor: "#9ca3af",
        paddingBottom: 4,
        marginBottom: 8,
    },
    table: {
        width: "100%",
    },
    tableHeader: {
        flexDirection: "row",
        backgroundColor: "#f3f4f6",
        paddingVertical: 6,
        paddingHorizontal: 8,
    },
    tableHeaderCell: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#4b5563",
        textTransform: "uppercase",
    },
    tableHeaderTime: {
        width: "20%",
    },
    tableHeaderActivity: {
        width: "60%",
    },
    tableHeaderStatus: {
        width: "20%",
        textAlign: "right",
    },
    tableRow: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#e5e7eb",
        paddingVertical: 10,
        paddingHorizontal: 8,
        alignItems: "flex-start",
    },
    timeCell: {
        width: "20%",
        fontSize: 10,
        color: "#6b7280",
    },
    activityCell: {
        width: "60%",
    },
    activityTitle: {
        fontWeight: "bold",
        fontSize: 12,
        color: "#111827",
    },
    activityDesc: {
        fontSize: 10,
        color: "#6b7280",
        marginTop: 2,
    },
    statusCell: {
        width: "20%",
        alignItems: "flex-end",
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 999,
        fontSize: 9,
        fontWeight: "bold",
        textAlign: "center",
    },
    termsBox: {
        backgroundColor: "#f9fafb",
        borderWidth: 1,
        borderColor: "#f3f4f6",
        padding: 12,
        marginVertical: 24,
    },
    termsTitle: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#9ca3af",
        textTransform: "uppercase",
        marginBottom: 4,
    },
    termsText: {
        fontSize: 10,
        color: "#6b7280",
        lineHeight: 1.4,
        textAlign: "justify",
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "auto",
        paddingTop: 16,
    },
    signatureColumn: {
        width: "48%",
        alignItems: "center",
    },
    signatureName: {
        fontSize: 36,
        color: "#1e3a8a",
        marginVertical: 8,
    },
    line: {
        height: 1,
        backgroundColor: "#d1d5db",
        width: "100%",
        marginTop: 4,
    },
    dateText: {
        fontSize: 16,
        color: "#374151",
    },
    stamp: {
        position: "absolute",
        top: 180,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "rgba(220, 38, 38, 0.2)",
        fontSize: 60,
        fontWeight: "bold",
        textTransform: "uppercase",
        transform: "rotate(-12deg)",
        borderWidth: 6,
        borderColor: "rgba(220, 38, 38, 0.2)",
        borderStyle: "solid",
        paddingHorizontal: 40,
        paddingVertical: 16,
        alignSelf: "center",
    },
});

interface TicketProps {
    today: string;
}

const ValentineTicketPDF = ({ today }: TicketProps) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <View style={styles.briefcaseBox}>
                        <Text style={{ color: "#ffffff", fontSize: 20 }}>💼</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>Official Event</Text>
                        <Text style={styles.title}>Order</Text>
                        <Text style={styles.subtitle}>Department of Romantic Logistics</Text>
                    </View>
                </View>

                <View style={styles.headerRight}>
                    <View style={styles.priorityBox}>
                        <Text style={styles.priorityText}>Class: PRIORITY A1</Text>
                    </View>
                    <Text style={{ fontSize: 11, color: "#4b5563" }}>
                        <Text style={{ fontWeight: "bold" }}>Date:</Text> Feb 14, 2026
                    </Text>
                    <Text style={{ fontSize: 11, color: "#4b5563" }}>
                        <Text style={{ fontWeight: "bold" }}>Case ID:</Text> LOVE-26-FINAL
                    </Text>
                </View>
            </View>

            {/* Issued By / Recipient */}
            <View style={styles.issuedBySection}>
                <View style={styles.column}>
                    <Text style={styles.label}>Issued By (Operator):</Text>
                    <Text style={styles.name}>Dalienst Owino Oduor</Text>
                    <Text style={styles.role}>Head of Operations</Text>
                </View>

                <View style={styles.column}>
                    <Text style={styles.label}>Recipient (VIP):</Text>
                    <Text style={styles.name}>My Valentine</Text>
                    <Text style={styles.role}>Subject of Affection</Text>
                </View>
            </View>

            {/* Operational Schedule */}
            <Text style={styles.scheduleTitle}>Operational Schedule</Text>

            <View style={styles.table}>
                {/* Table Header */}
                <View style={styles.tableHeader}>
                    <Text style={[styles.tableHeaderCell, styles.tableHeaderTime]}>Time (EAT)</Text>
                    <Text style={[styles.tableHeaderCell, styles.tableHeaderActivity]}>Activity / Module</Text>
                    <Text style={[styles.tableHeaderCell, styles.tableHeaderStatus]}>Status</Text>
                </View>

                {/* Row 1 - Bowling */}
                <View style={styles.tableRow}>
                    <Text style={styles.timeCell}>11:00 HRS</Text>
                    <View style={styles.activityCell}>
                        <Text style={styles.activityTitle}>Bowling Championship</Text>
                        <Text style={styles.activityDesc}>Competitive module. Winner takes all.</Text>
                    </View>
                    <View style={styles.statusCell}>
                        <View style={[styles.statusBadge, { backgroundColor: "#dbeafe" }]}>
                            <Text style={{ color: "#1e40af" }}>Booked</Text>
                        </View>
                    </View>
                </View>

                {/* Row 2 - Lunch */}
                <View style={styles.tableRow}>
                    <Text style={styles.timeCell}>13:00 HRS</Text>
                    <View style={styles.activityCell}>
                        <Text style={styles.activityTitle}>Lunch at Shaki</Text>
                        <Text style={styles.activityDesc}>Refueling protocol. Cuisine exploration.</Text>
                    </View>
                    <View style={styles.statusCell}>
                        <View style={[styles.statusBadge, { backgroundColor: "#dcfce7" }]}>
                            <Text style={{ color: "#166534" }}>Confirmed</Text>
                        </View>
                    </View>
                </View>

                {/* Row 3 - Drinks */}
                <View style={styles.tableRow}>
                    <Text style={styles.timeCell}>15:00 HRS</Text>
                    <View style={styles.activityCell}>
                        <Text style={styles.activityTitle}>Drinks</Text>
                        <Text style={styles.activityDesc}>Relaxation phase. Popcorn allocation optional.</Text>
                    </View>
                    <View style={styles.statusCell}>
                        <View style={[styles.statusBadge, { backgroundColor: "#f3e8ff" }]}>
                            <Text style={{ color: "#6b21a8" }}>Scheduled</Text>
                        </View>
                    </View>
                </View>

                {/* Row 4 - Future Planning */}
                <View style={styles.tableRow}>
                    <Text style={styles.timeCell}>18:00 HRS</Text>
                    <View style={styles.activityCell}>
                        <Text style={styles.activityTitle}>Future Planning</Text>
                        <Text style={styles.activityDesc}>Discussion of long-term roadmap.</Text>
                    </View>
                    <View style={styles.statusCell}>
                        <View style={[styles.statusBadge, { backgroundColor: "#fef9c3" }]}>
                            <Text style={{ color: "#854d0e" }}>Required</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Terms */}
            <View style={styles.termsBox}>
                <Text style={styles.termsTitle}>Terms of Engagement</Text>
                <Text style={styles.termsText}>
                    By accepting this document (via the "YES" protocol), the Recipient agrees to be present for all scheduled modules. Use of mobile devices is restricted during "Quality Time" phases. Excessive smiling and laughter are mandatory. Pictures will be taken in plenty. This contract is binding in perpetuity.
                </Text>
            </View>

            {/* Footer with simple stamp overlay */}
            <View style={{ position: "relative" }}>
                <Text style={styles.stamp}>AUTHORIZED</Text>

                <View style={styles.footer}>
                    <View style={styles.signatureColumn}>
                        <Text style={styles.label}>Approved By (Sign Below)</Text>
                        <Text style={[styles.signatureName, { transform: "rotate(-2deg)" }]}>Baba</Text>
                        <View style={styles.line} />
                    </View>

                    <View style={styles.signatureColumn}>
                        <Text style={styles.label}>Date of Approval</Text>
                        <Text style={styles.dateText}>{today}</Text>
                        <View style={styles.line} />
                    </View>
                </View>
            </View>
        </Page>
    </Document>
);

export default ValentineTicketPDF;