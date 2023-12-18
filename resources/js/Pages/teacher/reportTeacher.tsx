import ButtonSubmit, { ButtonLink } from "@/components/button";
import Form from "@/components/form";
import { InputArea } from "@/components/input";
import Navbar from "@/components/navbar";
import { router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function ReportTeacher({ report, subject }: any) {
    const { auth }: any = usePage().props;
    const [checked, setChecked] = useState(report.students[0].username);
    const [values, setValues] = useState({
        subject_id: subject,
        teacher_id: auth.id,
        student_id: report.students[0].username,
        evaluation: "",
    });
    const [errors, setErrors] = useState({ evaluation: "" });
    const reportFilter = report.students.filter(
        (i: any) => i.username == values.student_id
    );
    function handleChange(e: any) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values: any) => ({
            ...values,
            [key]: value,
        }));
    }
    function handleSubmit(e: any) {
        e.preventDefault();
        router.post("/rapor", values);
    }
    router.on("error", (errors: any) => {
        setErrors(errors.detail.errors);
    });
    return (
        <>
            <Navbar bgcolor="bg-cyan-500" />

            <Form title="Input Rapor" onSubmit={handleSubmit}>
                <p className="text-gray-500 text-base capitalize">
                    Nama Murid: {values.student_id}
                </p>
                <InputArea
                    label="Evaluasi"
                    id="evaluation"
                    onChange={handleChange}
                    value={values.evaluation}
                    error={errors.evaluation}
                />
                <div className="flex gap-2 mt-5">
                    <ButtonSubmit
                        bgcolor="bg-green-500"
                        hover="hover:bg-green-600"
                    >
                        Submit
                    </ButtonSubmit>
                    <ButtonLink
                        hover="hover:bg-orange-500"
                        bgcolor="bg-orange-400"
                        link="/dashboard"
                    >
                        Dashboard
                    </ButtonLink>
                </div>
            </Form>
            <div className="grid grid-flow-col mt-5">
                {report.students.map((i: any) => (
                    <div
                        key={i.username}
                        className={
                            checked === i.username
                                ? "bg-cyan-500 rounded-t-xl text-center p-2 capitalize text-sm"
                                : "bg-white text-center p-2 capitalize text-sm"
                        }
                        onClick={(e: any) => {
                            setChecked(i.username);
                            setValues((v: any) => ({
                                ...v,
                                student_id: i.username,
                            }));
                        }}
                    >
                        {i.username}
                    </div>
                ))}
            </div>

            <div className="bg-cyan-500 py-4">
                <div className="sm:w-[80%] sm:mx-auto overflow-x-auto shadow-md sm:rounded-lg m-5">
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
                            <tr className="text-center">
                                <th className="px-6 py-3 w-40">Tanggal</th>
                                <th scope="col" className="px-6 py-3">
                                    Evaluasi
                                </th>
                            </tr>
                        </thead>

                        {reportFilter[0].reports.map((i: any, index: any) => (
                            <tbody key={index}>
                                <tr
                                    className={
                                        index % 2 === 0
                                            ? "bg-white"
                                            : "bg-gray-100"
                                    }
                                >
                                    <td className="text-center">
                                        {new Date(i.created_at).getDate() +
                                            "-" +
                                            new Date(
                                                i.created_at
                                            ).toLocaleString([], {
                                                month: "short",
                                            }) +
                                            "-" +
                                            new Date(
                                                i.created_at
                                            ).getFullYear()}
                                    </td>
                                    <td>{i.evaluation}</td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
        </>
    );
}
