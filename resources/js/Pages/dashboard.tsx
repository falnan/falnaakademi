import { usePage } from "@inertiajs/react";
import DashboardAdmin from "./admin/dashboardAdmin";
import DashboardStudent from "./student/dashboardStudent";
import DashboardTeacher from "./teacher/dashboardTeacher";

export default function Dashboard({ studentRoom, teacherRoom }: any) {
    const { auth }: any = usePage().props;
    if (auth.user.role == "admin") {
        return <DashboardAdmin />;
    } else if (auth.user.role == "student") {
        return <DashboardStudent studentRoom={studentRoom} />;
    } else if (auth.user.role == "teacher") {
        return <DashboardTeacher teacherRoom={teacherRoom} />;
    }
}
