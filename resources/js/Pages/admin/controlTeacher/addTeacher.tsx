import ButtonSubmit from "@/components/button";
import Form from "@/components/form";
import { InputSelect, InputText } from "@/components/input";
import LayoutDashboard from "@/components/layoutDashboard";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function AddTeacher({ subject }: any) {
    const [values, setValues] = useState({
        role: "teacher",
        username: "",
        name: "",
        subject_id: "",
        ttl: "",
        adress: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError]: any = useState([]);
    function handleSubmit(e: any) {
        e.preventDefault();
        router.post("/teacher", values);
    }
    function handleChange(e: any) {
        setValues((val: any) => ({ ...val, [e.target.id]: e.target.value }));
    }
    router.on("error", (errors: any) => {
        setError(errors.detail.errors);
    });
    return (
        <>
            <LayoutDashboard setActiveLink="Teacher">
                <div className="flex gap-2">
                    <Link href="/teacher">
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
                <Form title="Input Guru" onSubmit={handleSubmit}>
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
                    <InputSelect
                        label="Mata Pelajaran"
                        id="subject_id"
                        onChange={handleChange}
                        defaultValue={values.subject_id}
                        error={error.grade}
                    >
                        <option value="">--Pilih--</option>
                        {subject.map((i: any) => (
                            <option key={i.id} value={i.id}>
                                {i.subject}
                            </option>
                        ))}
                    </InputSelect>

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
