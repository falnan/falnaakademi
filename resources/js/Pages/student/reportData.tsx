import Navbar from "@/components/navbar";
import { usePage } from "@inertiajs/react";

export default function ReportData({ report, subject }: any) {
    const { studentAuth }: any = usePage().props;
    return (
        <>
            <Navbar bgcolor="bg-cyan-500" />
            <div className="sm:w-[80%] sm:mx-auto m-5">
                <table className="capitalize text-gray-800 text-sm leading-5">
                    <tbody>
                        <tr>
                            <td>Nama</td>
                            <td>: &nbsp;</td>
                            <td>{studentAuth.name}</td>
                        </tr>
                        <tr>
                            <td>Pelajaran</td>
                            <td>:&nbsp;</td>
                            <td>{subject.subject}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="relative overflow-x-auto shadow-md rounded-lg">
                    <table className="table-auto w-full text-sm text-gray-500">
                        <thead className="text-xs bg-blue-400 text-white uppercase">
                            <tr className="text-center">
                                <th className="px-6 py-3 w-40">Tanggal</th>
                                <th scope="col" className="px-6 py-3">
                                    Evaluasi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {report.map((i: any, index: any) => (
                                <tr
                                    key={index}
                                    className={
                                        index % 2 === 0
                                            ? "text-center bg-white"
                                            : "text-center bg-blue-100"
                                    }
                                >
                                    <td className="px-6 py-3">
                                        tanggal
                                        {/* {dataDays.filter(
                                            (a: any) =>
                                                a.date ===
                                                new Date(i.created_at).getDay()
                                        )[0].day +
                                            ", " +
                                            new Date(i.created_at).getDate() +
                                            "/" +
                                            new Date(
                                                i.created_at
                                            ).toLocaleString("default", {
                                                month: "numeric",
                                                year: "numeric",
                                            })} */}
                                    </td>
                                    <td className="px-6 py-3 text-left">
                                        {i.evaluation}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
