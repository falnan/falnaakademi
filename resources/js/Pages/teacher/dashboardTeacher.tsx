import { ButtonLink } from "@/components/button";
import Navbar from "@/components/navbar";
import { usePage } from "@inertiajs/react";

export default function DashboardTeacher({ teacherRoom }: any) {
    const { teacherAuth }: any = usePage().props;
    const color = ["bg-purple-200", "bg-orange-200", "bg-blue-200"];
    return (
        <main>
            <Navbar bgcolor="bg-cyan-500" />
            <div className="w-[90%] mx-auto">
                <div className="relative md:w-96 shadow-lg bg-gradient-to-tr from-blue-400 via-cyan-500 to-cyan-500 rounded-lg  mt-5 p-3">
                    <img
                        src="/img/piala.svg"
                        className="absolute right-0 top-2 w-28"
                        alt=""
                    />
                    <p className="text-yellow-300 text-2xl font-bold">
                        Hello,{" "}
                        <span className="capitalize">
                            {teacherAuth.username}
                        </span>
                    </p>
                    <table className="text-white">
                        <tbody>
                            <tr>
                                <td>Nama</td>
                                <td>: </td>
                                <td className="capitalize">
                                    {teacherAuth.name}
                                </td>
                            </tr>
                            <tr>
                                <td>Whatsapp</td>
                                <td>: </td>
                                <td>{teacherAuth.phone}</td>
                            </tr>
                            <tr>
                                <td>Alamat</td>
                                <td>: </td>
                                <td>{teacherAuth.adress}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="overflow-x-auto">
                {/* card */}
                <div className="ml-5 sm:ml-10 md:ml-16 inline-flex gap-4">
                    {teacherRoom.map((i: any, index: any) => (
                        <div
                            key={i.id}
                            className={
                                color[index] +
                                " shadow-lg rounded-lg w-60  mt-5 p-3"
                            }
                        >
                            <p className="text-yellow-900 text-xl font-bold text-center">
                                Paket Belajar {index + 1}
                            </p>
                            <div className="">
                                <div className="grid grid-cols-3">
                                    <p>Pelajaran</p>
                                    <p className="capitalize col-span-2">
                                        : {i.subjects.subject}
                                    </p>
                                </div>
                                <div className="grid grid-cols-3">
                                    <p>Grup</p>
                                    <p className="capitalize col-span-2">
                                        : {i.program}
                                    </p>
                                </div>
                                <div className="grid grid-cols-3">
                                    <p>Hari</p>
                                    <p className="capitalize col-span-2">
                                        : {i.day}
                                    </p>
                                </div>
                                <div className="grid grid-cols-3">
                                    <p>Pukul</p>
                                    <p className="capitalize col-span-2">
                                        : {i.time}
                                    </p>
                                </div>
                                <div className="grid grid-cols-3">
                                    <p>ID Kelas</p>
                                    <p className="capitalize col-span-2">
                                        : {i.idRoom}
                                    </p>
                                </div>
                                <div className="grid grid-cols-3">
                                    <p>Password</p>
                                    <p className="capitalize col-span-2">
                                        : {i.passwordRoom}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <ButtonLink
                                    link={i.linkRoom}
                                    bgcolor="bg-green-500"
                                    hover="hover:bg-green-600"
                                >
                                    Mulai Kelas
                                </ButtonLink>
                                <ButtonLink
                                    link={"/rapor/" + i.id}
                                    bgcolor="bg-blue-500"
                                    hover="hover:bg-blue-600"
                                >
                                    Rapor
                                </ButtonLink>
                            </div>
                        </div>
                    ))}
                    {/* tambah */}
                    <div className="shadow-lg bg-gray-200 rounded-lg w-60 mt-5 p-3">
                        <div className="text-center">
                            <i className="w-full mt-14 opacity-30 text-5xl fa-solid fa-circle-plus"></i>
                            <div className="mt-2 text-xl font-bold text-gray-500">
                                <p>Paket Belajar Selanjutnya</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
