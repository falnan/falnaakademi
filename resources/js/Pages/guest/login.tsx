import ButtonSubmit from "@/components/button";
import Form from "@/components/form";
import { InputText } from "@/components/input";
import Navbar from "@/components/navbar";
import { TLogin } from "@/types/mine";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function Login() {
    const [values, setValues] = useState<TLogin>({
        username: "",
        name: "",
        password: "",
    });
    const [errors, setErrors]: any = useState("");
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
        router.post("/login", values);
    }
    router.on("error", (error: any) => {
        setErrors(error.detail.errors);
    });
    return (
        <main>
            <Navbar bgcolor="bg-cyan-500" />
            {errors.message == "try again" && (
                <div className="bg-red-500 text-white text-center">
                    Data Salah
                </div>
            )}
            <Form onSubmit={handleSubmit} title="Login">
                <InputText
                    label="Username"
                    id="username"
                    onChange={handleChange}
                    value={values.username}
                    error={errors.username}
                />
                <InputText
                    label="Nama Lengkap"
                    id="name"
                    onChange={handleChange}
                    value={values.name}
                    error={errors.name}
                />
                <div>
                    <label
                        htmlFor="password"
                        className="text-gray-500 text-base capitalize"
                    >
                        Kata Sandi
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        value={values.password}
                        className={
                            errors.password
                                ? "border-none text-gray-900 text-sm rounded-md outline-none ring-opacity-50 ring-1 ring-red-500 focus:border-red-500 w-full p-2"
                                : "border-none text-gray-900 text-sm rounded-md outline-none ring-opacity-50 ring-1 ring-blue-500 focus:border-blue-500 w-full p-2"
                        }
                    />
                    {errors.password && (
                        <div className="-mb-4 text-red-500 text-xs">
                            *{errors.password}
                        </div>
                    )}
                </div>
                <div className="mt-2">
                    <ButtonSubmit
                        bgcolor="bg-green-500"
                        hover="hover:bg-green-600"
                    >
                        Login
                    </ButtonSubmit>
                </div>
                <p className="text-sm">
                    Belum mempunyai akun? Daftar{" "}
                    <span>
                        <Link
                            as="button"
                            className="text-blue-500"
                            href="/daftar"
                        >
                            di sini
                        </Link>
                    </span>
                </p>
            </Form>
        </main>
    );
}
