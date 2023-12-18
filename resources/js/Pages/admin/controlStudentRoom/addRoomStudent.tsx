import ButtonSubmit from "@/components/button";
import Form from "@/components/form";
import LayoutDashboard from "@/components/layoutDashboard";
import { Link, router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function AddStudentRoom({ roomStudent, room_id }: any) {
    const { flash }: any = usePage().props;

    const [values, setValues] = useState({
        student_id: "",
        room_id: room_id,
    });

    const [error, setError]: any = useState("");
    function handleSubmit(e: any) {
        e.preventDefault();
        router.post("/studentRoom", values);
    }
    router.on("error", (errors: any) => {
        setError(errors.detail.errors);
        setTimeout(() => {
            setError("");
        }, 2000);
    });
    return (
        <>
            <LayoutDashboard setActiveLink="Room">
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
                {/* form */}
                <Form title="Input Kelas Murid" onSubmit={handleSubmit}>
                    <div></div>
                    {roomStudent &&
                        roomStudent.map((i: any, index: any) => (
                            <div key={index} className="grid grid-cols-3 gap-2">
                                <input
                                    type="text"
                                    className="col-span-2 rounded-md border-none shadow ring-1 ring-blue-300"
                                    disabled
                                    value={i.student_id}
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        router.delete(
                                            "/studentRoom/" +
                                                i.student_id +
                                                "/" +
                                                room_id
                                        )
                                    }
                                    className="bg-red-500 px-2 rounded-md text-white"
                                >
                                    Hapus
                                </button>
                            </div>
                        ))}
                    <div className="grid grid-cols-3 gap-2">
                        <input
                            type="text"
                            onChange={(e: any) =>
                                setValues((val: any) => ({
                                    ...val,
                                    student_id: e.target.value,
                                }))
                            }
                            className="col-span-2 rounded-md border-none shadow ring-1 ring-blue-300 w-full"
                            value={values.student_id}
                        />
                        <ButtonSubmit
                            bgcolor="bg-green-500"
                            hover="hover:bg-green-500"
                        >
                            Tambah
                        </ButtonSubmit>
                    </div>
                    {error.student_id && (
                        <div className=" text-red-500 text-xs">
                            *{error.student_id}
                        </div>
                    )}
                </Form>
            </LayoutDashboard>
        </>
    );
}
