export const stats = {
  students: 1248,
  teachers: 86,
  classes: 42,
  revenueMonth: 184_500_000,
  attendanceRate: 94.6,
  pendingApplicants: 137,
  outstandingInvoices: 23_450_000,
  dormResidents: 412,
};

export const enrollmentTrend = [
  { month: "Jul", students: 1180, applicants: 80 },
  { month: "Aug", students: 1200, applicants: 95 },
  { month: "Sep", students: 1212, applicants: 110 },
  { month: "Oct", students: 1225, applicants: 118 },
  { month: "Nov", students: 1238, applicants: 124 },
  { month: "Dec", students: 1248, applicants: 137 },
];

export const attendanceTrend = [
  { day: "Mon", present: 1180, absent: 68 },
  { day: "Tue", present: 1192, absent: 56 },
  { day: "Wed", present: 1170, absent: 78 },
  { day: "Thu", present: 1205, absent: 43 },
  { day: "Fri", present: 1188, absent: 60 },
  { day: "Sat", present: 1150, absent: 98 },
];

export const financeTrend = [
  { month: "Jul", revenue: 162, expense: 121 },
  { month: "Aug", revenue: 171, expense: 128 },
  { month: "Sep", revenue: 168, expense: 124 },
  { month: "Oct", revenue: 175, expense: 132 },
  { month: "Nov", revenue: 180, expense: 130 },
  { month: "Dec", revenue: 184, expense: 134 },
];

export const gradeDistribution = [
  { grade: "A", value: 312 },
  { grade: "B", value: 528 },
  { grade: "C", value: 286 },
  { grade: "D", value: 92 },
  { grade: "E", value: 30 },
];

export const students = [
  { id: "S-2401", name: "Ahmad Fauzi", class: "X-IPA-1", gender: "M", parent: "Hadi Susanto", status: "Active", attendance: 96 },
  { id: "S-2402", name: "Siti Aminah", class: "X-IPA-1", gender: "F", parent: "Bambang R.", status: "Active", attendance: 98 },
  { id: "S-2403", name: "Rizky Pratama", class: "X-IPS-2", gender: "M", parent: "Dewi K.", status: "Active", attendance: 89 },
  { id: "S-2404", name: "Nadia Putri", class: "XI-IPA-1", gender: "F", parent: "Anwar S.", status: "Active", attendance: 94 },
  { id: "S-2405", name: "Muhammad Iqbal", class: "XI-IPA-2", gender: "M", parent: "Rahmat H.", status: "Active", attendance: 91 },
  { id: "S-2406", name: "Aisha Zahra", class: "XII-IPA-1", gender: "F", parent: "Iskandar M.", status: "Active", attendance: 99 },
  { id: "S-2407", name: "Budi Santoso", class: "XII-IPS-1", gender: "M", parent: "Siska W.", status: "Leave", attendance: 72 },
  { id: "S-2408", name: "Fatimah Az-Zahra", class: "X-IPA-2", gender: "F", parent: "Yusuf A.", status: "Active", attendance: 97 },
];

export const classesData = [
  { id: "X-IPA-1", grade: "X", homeroom: "Bu Siti", students: 32, room: "A-101" },
  { id: "X-IPA-2", grade: "X", homeroom: "Pak Rahman", students: 30, room: "A-102" },
  { id: "X-IPS-1", grade: "X", homeroom: "Bu Lina", students: 28, room: "A-201" },
  { id: "XI-IPA-1", grade: "XI", homeroom: "Pak Joko", students: 31, room: "B-101" },
  { id: "XI-IPA-2", grade: "XI", homeroom: "Bu Maya", students: 29, room: "B-102" },
  { id: "XII-IPA-1", grade: "XII", homeroom: "Pak Bambang", students: 30, room: "C-101" },
];

export const schedule = [
  { day: "Mon", time: "07:00–08:30", subject: "Mathematics", teacher: "Pak Rahman", room: "A-101" },
  { day: "Mon", time: "08:30–10:00", subject: "Physics", teacher: "Bu Siti", room: "Lab-1" },
  { day: "Mon", time: "10:30–12:00", subject: "English", teacher: "Bu Lina", room: "A-101" },
  { day: "Tue", time: "07:00–08:30", subject: "Quran & Hadith", teacher: "Ust. Fauzan", room: "A-101" },
  { day: "Tue", time: "08:30–10:00", subject: "Chemistry", teacher: "Pak Joko", room: "Lab-2" },
  { day: "Wed", time: "07:00–08:30", subject: "Biology", teacher: "Bu Maya", room: "Lab-3" },
];

export const invoices = [
  { id: "INV-24001", student: "Ahmad Fauzi", amount: 2_500_000, due: "2026-05-20", status: "Paid" },
  { id: "INV-24002", student: "Siti Aminah", amount: 2_500_000, due: "2026-05-20", status: "Paid" },
  { id: "INV-24003", student: "Rizky Pratama", amount: 2_500_000, due: "2026-05-20", status: "Pending" },
  { id: "INV-24004", student: "Nadia Putri", amount: 2_750_000, due: "2026-05-25", status: "Overdue" },
  { id: "INV-24005", student: "M. Iqbal", amount: 2_500_000, due: "2026-05-25", status: "Pending" },
  { id: "INV-24006", student: "Aisha Zahra", amount: 2_750_000, due: "2026-05-30", status: "Paid" },
];

export const applicants = [
  { id: "PPDB-1001", name: "Hasan Basri", from: "SMP 5 Jakarta", target: "X-IPA", testScore: 87, status: "Accepted" },
  { id: "PPDB-1002", name: "Khadijah N.", from: "SMP Al-Falah", target: "X-IPA", testScore: 92, status: "Accepted" },
  { id: "PPDB-1003", name: "Ali Akbar", from: "SMP 12 Bogor", target: "X-IPS", testScore: 74, status: "Waitlist" },
  { id: "PPDB-1004", name: "Zainab S.", from: "SMP Al-Hikmah", target: "X-IPA", testScore: 81, status: "Test Scheduled" },
  { id: "PPDB-1005", name: "Umar Hakim", from: "SMP 3 Depok", target: "X-IPS", testScore: 68, status: "Test Scheduled" },
];

export const employees = [
  { id: "EMP-001", name: "Dr. Yusuf Ibrahim", role: "Principal", dept: "Leadership", salary: 18_000_000, status: "Active" },
  { id: "EMP-014", name: "Bu Siti Nurhaliza", role: "Physics Teacher", dept: "Science", salary: 9_500_000, status: "Active" },
  { id: "EMP-022", name: "Pak Rahman", role: "Math Teacher", dept: "Science", salary: 9_200_000, status: "Active" },
  { id: "EMP-033", name: "Bu Maryam", role: "Finance Lead", dept: "Finance", salary: 11_000_000, status: "Active" },
  { id: "EMP-041", name: "Ust. Fauzan", role: "Dorm Supervisor", dept: "Dormitory", salary: 8_800_000, status: "On Leave" },
];

export const dormRooms = [
  { id: "DRM-A101", building: "Al-Farabi", capacity: 4, occupants: 4, supervisor: "Ust. Fauzan" },
  { id: "DRM-A102", building: "Al-Farabi", capacity: 4, occupants: 3, supervisor: "Ust. Fauzan" },
  { id: "DRM-B201", building: "Ar-Razi", capacity: 6, occupants: 6, supervisor: "Ust. Hamzah" },
  { id: "DRM-B202", building: "Ar-Razi", capacity: 6, occupants: 5, supervisor: "Ust. Hamzah" },
];

export const clinicVisits = [
  { id: "UKS-501", date: "2026-05-12", student: "Rizky Pratama", complaint: "Fever", treatment: "Paracetamol, rest", nurse: "Suster Nadia" },
  { id: "UKS-502", date: "2026-05-12", student: "Nadia Putri", complaint: "Headache", treatment: "Pain reliever", nurse: "Suster Nadia" },
  { id: "UKS-503", date: "2026-05-13", student: "Budi Santoso", complaint: "Sprained ankle", treatment: "Cold pack, bandage", nurse: "Suster Nadia" },
];

export const notifications = [
  { id: 1, title: "New PPDB applicant", body: "Hasan Basri submitted registration", time: "5m ago", unread: true },
  { id: 2, title: "Invoice overdue", body: "INV-24004 (Nadia Putri) is past due", time: "1h ago", unread: true },
  { id: 3, title: "Attendance dropped", body: "Class XII-IPS-1 attendance below 80%", time: "3h ago", unread: true },
  { id: 4, title: "Payroll processed", body: "May payroll completed for 86 employees", time: "Yesterday", unread: false },
  { id: 5, title: "Exam scheduled", body: "Math midterm scheduled for May 22", time: "2d ago", unread: false },
];

export const activityLog = [
  { id: 1, actor: "Bu Maryam", action: "Marked invoice INV-24001 as paid", time: "10 min ago" },
  { id: 2, actor: "Pak Rahman", action: "Posted Math grades for X-IPA-1", time: "1 h ago" },
  { id: 3, actor: "Aisha Rahman", action: "Created class XI-IPA-3", time: "2 h ago" },
  { id: 4, actor: "Ust. Fauzan", action: "Recorded tahfidz progress (Juz 5)", time: "Yesterday" },
];

export const fmtIDR = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
