import ButtonSubmit from "@/components/button";
import Form from "@/components/form";
import { InputSelect, InputText } from "@/components/input";
import LayoutDashboard from "@/components/layoutDashboard";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";

const data = [
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

export default function AddStudent() {
    const [values, setValues] = useState({
        role: "student",
        coin: 30,
        username: "",
        name: "",
        school: "",
        grade: "",
        ttl: "",
        adress: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError]: any = useState([]);
    function handleSubmit(e: any) {
        e.preventDefault();
        router.post("/student", values);
    }
    function handleChange(e: any) {
        setValues((val: any) => ({ ...val, [e.target.id]: e.target.value }));
    }
    router.on("error", (errors: any) => {
        setError(errors.detail.errors);
    });
    return (
        <>
            <LayoutDashboard setActiveLink="Student">
                <div className="flex gap-2">
                    <Link href="/student">
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
                <Form title="Input Student" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-5 gap-2">
                        <div className="col-span-2">
                            <InputText
                                label="Username"
                                id="username"
                                onChange={handleChange}
                                value={values.username}
                                error={error.username}
                            />
                        </div>
                        <div className="col-span-3">
                            <InputText
                                label="Nama Lengkap"
                                id="name"
                                onChange={handleChange}
                                value={values.name}
                                error={error.name}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="col-span-2">
                            <InputText
                                label="Nama Sekolah"
                                id="school"
                                onChange={handleChange}
                                value={values.school}
                                error={error.school}
                            />
                        </div>
                        <InputSelect
                            label="Pendidikan"
                            id="grade"
                            onChange={handleChange}
                            defaultValue={values.grade}
                            error={error.grade}
                        >
                            <option value="">--Pilih--</option>
                            {data.map((i: any) => (
                                <option key={i.value} value={i.value}>
                                    {i.grade}
                                </option>
                            ))}
                        </InputSelect>
                    </div>
                    <InputText
                        label="T-T-L"
                        id="ttl"
                        onChange={handleChange}
                        value={values.ttl}
                        error={error.ttl}
                    />
                    <InputText
                        label="Alamat"
                        id="adress"
                        onChange={handleChange}
                        value={values.adress}
                        error={error.adress}
                    />
                    <InputText
                        label="Whatsapp"
                        id="phone"
                        onChange={handleChange}
                        value={values.phone}
                        error={error.phone}
                    />
                    <InputText
                        label="Kata Sandi"
                        id="password"
                        onChange={handleChange}
                        value={values.password}
                        error={error.password}
                    />
                    <InputText
                        label="Konfirmasi Kata Sandi"
                        id="confirmPassword"
                        onChange={handleChange}
                        value={values.confirmPassword}
                        error={error.confirmPassword}
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
