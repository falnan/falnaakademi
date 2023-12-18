import ButtonSubmit from "@/components/button";
import Form from "@/components/form";
import { InputSelect, InputText } from "@/components/input";
import LayoutDashboard from "@/components/layoutDashboard";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";

const grade = [
    {
        grade: "TK",
        value: 0,
    },
    {
        grade: "1 SD",
        value: 1,
    },
    {
        grade: "2 SD",
        value: 2,
    },
    {
        grade: "3 SD",
        value: 3,
    },
    {
        grade: "4 SD",
        value: 4,
    },
    {
        grade: "5 SD",
        value: 5,
    },
    {
        grade: "6 SD",
        value: 6,
    },
    {
        grade: "1 SMP",
        value: 7,
    },
    {
        grade: "2 SMP",
        value: 8,
    },
    {
        grade: "3 SMP",
        value: 9,
    },
    {
        grade: "1 SMA",
        value: 10,
    },
    {
        grade: "2 SMA",
        value: 11,
    },
    {
        grade: "1 SMA",
        value: 12,
    },
    {
        grade: "Umum",
        value: 13,
    },
];

export default function EditRoom({ room }: any) {
    const [values, setValues] = useState({
        id: room.id,
        teacher_id: room.teacher_id,
        subject_id: room.subject_id,
        grade: room.grade,
        program: room.program,
        day: room.day,
        time: room.time,
        idRoom: room.idRoom,
        passwordRoom: room.passwordRoom,
        linkRoom: room.linkRoom,
    });

    const [error, setError]: any = useState([]);
    function handleSubmit(e: any) {
        e.preventDefault();
        router.put("/room/" + room.id, values);
    }
    function handleChange(e: any) {
        setValues((val: any) => ({ ...val, [e.target.id]: e.target.value }));
    }
    router.on("error", (errors: any) => {
        setError(errors.detail.errors);
    });
    return (
        <>
            <LayoutDashboard setActiveLink="Room">
                <div className="flex gap-2">
                    <Link href="/room">
                        <div className="flex items-center gap-1 ">
                            <svg
                                className="fill-gray-500"
                                height="16"
                                width="14"
                                viewBox="0 0 448 512"
                            >
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                            </svg>
                            <p className="text-gray-700">Back</p>
                        </div>
                    </Link>
                </div>
                {/* form */}
                <Form title="Input Room" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-5 gap-2">
                        <div className="col-span-2">
                            <InputText
                                label="Guru"
                                id="teacher_id"
                                onChange={handleChange}
                                value={values.teacher_id}
                                error={error.teacher_id}
                            />
                        </div>
                        <div className="col-span-3">
                            <InputText
                                label="Pelajaran"
                                id="subject_id"
                                onChange={handleChange}
                                value={values.subject_id}
                                error={error.subject_id}
                            />
                        </div>
                    </div>
                    <InputSelect
                        label="Kelas"
                        id="grade"
                        onChange={handleChange}
                        defaultValue={values.grade}
                        error={error.grade}
                    >
                        <option value="">--Pilih--</option>
                        {grade.map((i: any) => (
                            <option key={i.value} value={i.value}>
                                {i.grade}
                            </option>
                        ))}
                    </InputSelect>

                    <InputSelect
                        label="Program"
                        id="program"
                        onChange={handleChange}
                        defaultValue={values.program}
                        error={error.program}
                    >
                        <option value="">--Pilih--</option>
                        <option value="Grup"> Online Grup</option>
                        <option value="Private"> Online Privat</option>
                    </InputSelect>

                    <InputText
                        label="Hari"
                        id="day"
                        onChange={handleChange}
                        value={values.day}
                        error={error.day}
                    />
                    <InputText
                        label="Pukul"
                        id="time"
                        onChange={handleChange}
                        value={values.time}
                        error={error.time}
                    />
                    <InputText
                        label="ID Room"
                        id="idRoom"
                        onChange={handleChange}
                        value={values.idRoom}
                        error={error.idRoom}
                    />
                    <InputText
                        label="Password Room"
                        id="passwordRoom"
                        onChange={handleChange}
                        value={values.passwordRoom}
                        error={error.passwordRoom}
                    />
                    <InputText
                        label="Link Room"
                        id="linkRoom"
                        onChange={handleChange}
                        value={values.linkRoom}
                        error={error.linkRoom}
                    />
                    <div className="flex gap-2 mt-5">
                        <ButtonSubmit
                            bgcolor="bg-green-500"
                            hover="hover:bg-green-600"
                        >
                            Submit
                        </ButtonSubmit>
                    </div>
                </Form>
            </LayoutDashboard>
        </>
    );
}
