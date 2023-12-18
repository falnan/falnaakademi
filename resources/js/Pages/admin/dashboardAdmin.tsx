import LayoutDashboard from "@/components/layoutDashboard";
import { Cell, Pie, PieChart } from "recharts";

const data = [
    {
        name: "Group A",
        value: 2400,
    },
    {
        name: "Group B",
        value: 4567,
    },
    {
        name: "Group C",
        value: 1398,
    },
    {
        name: "Group D",
        value: 5300,
    },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
export default function DashboardAdmin() {
    return (
        <>
            <LayoutDashboard setActiveLink="Dashboard">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className=" w-[80%] h-60">
                        <PieChart width={730} height={250}>
                            <Pie
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                fill="#8884d8"
                                // labelLine="random"
                                outerRadius={80}
                            >
                                {data.map((i: any, index) => (
                                    <Cell key={index} fill={COLORS[index]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </div>
                    <div className="bg-red-500 w-[80%] h-60"></div>
                    <div className="bg-red-500 w-[80%] h-60"></div>
                    <div className="bg-red-500 w-[80%] h-60"></div>
                </div>
            </LayoutDashboard>
        </>
    );
}
