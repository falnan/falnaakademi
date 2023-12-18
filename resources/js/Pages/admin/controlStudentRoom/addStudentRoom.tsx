import ButtonSubmit from "@/components/button";
import Form from "@/components/form";
import LayoutDashboard from "@/components/layoutDashboard";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function AddStudentRoom({ studentRoom, student_id, room }: any) {
    const [values, setValues] = useState({
        student_id: student_id,
        room_id: "",
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
            <LayoutDashboard setActiveLink="Student">
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
                {/* form */}
                <Form title="Input Kelas Murid" onSubmit={handleSubmit}>
                    <div></div>
                    {studentRoom &&
                        studentRoom.map((i: any, index: any) => (
                            <div key={index} className="grid grid-cols-3 gap-2">
                                <input
                                    type="text"
                                    className="col-span-2 rounded-md border-none shadow ring-1 ring-blue-300"
                                    disabled
                                    value={i.room_id}
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        router.delete(
                                            "/studentRoom/" +
                                                student_id +
                                                "/" +
                                                i.room_id
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
                            list="room"
                            onChange={(e: any) =>
                                setValues((val: any) => ({
                                    ...val,
                                    room_id: e.target.value,
                                }))
                            }
                            name="room"
                            className="text-left col-span-2 rounded-md border-none shadow ring-1 ring-blue-300 w-full"
                        />
                        <datalist id="room">
                            {room.map((i: any) => (
                                <option key={i.id} value={i.id} />
                            ))}
                        </datalist>
                        <ButtonSubmit
                            bgcolor="bg-green-500"
                            hover="hover:bg-green-500"
                        >
                            Tambah
                        </ButtonSubmit>
                    </div>
                    {error.room_id && (
                        <div className=" text-red-500 text-xs">
                            *{error.room_id}
                        </div>
                    )}
                </Form>
            </LayoutDashboard>
        </>
    );
}
