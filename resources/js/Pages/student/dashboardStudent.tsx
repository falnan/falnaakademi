import { ButtonLink } from "@/components/button";
import Navbar from "@/components/navbar";
import { Link, usePage } from "@inertiajs/react";

export default function DashboardStudent({ studentRoom }: any) {
    const { studentAuth }: any = usePage().props;
    const color = ["bg-purple-200", "bg-orange-200", "bg-blue-200"];
    return (
        <div>
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
                            {studentAuth.username}
                        </span>
                    </p>
                    <table className="text-white">
                        <tbody>
                            <tr>
                                <td>Nama</td>
                                <td>: {studentAuth.name}</td>
                            </tr>
                            <tr>
                                <td>Sekolah</td>
                                <td>: {studentAuth.adress}</td>
                            </tr>
                            <tr>
                                <td>Whatsapp</td>
                                <td>: {studentAuth.phone}</td>
                            </tr>
                            <tr>
                                <td>Koin</td>
                                <td>: {studentAuth.coin}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex gap-2 mt-4">
                    <ButtonLink
                        link="/koin"
                        bgcolor="bg-orange-400"
                        hover="hover:bg-orange-500"
                    >
                        Tambah Koin
                    </ButtonLink>
                    <ButtonLink
                        link="/tanyasoal"
                        bgcolor="bg-blue-400"
                        hover="hover:bg-blue-500"
                    >
                        Tanya Soal{" "}
                    </ButtonLink>
                </div>
            </div>
            <div className="overflow-x-auto">
                <div className="ml-5 sm:ml-10 md:ml-16 inline-flex gap-4">
                    {studentRoom.map((i: any, index: any) => (
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
                                    <p>Status</p>
                                    <p className="capitalize col-span-2">
                                        :{" "}
                                        {i.is_active == true
                                            ? "Aktif"
                                            : "Non-Aktif"}
                                    </p>
                                </div>
                                <div className="grid grid-cols-3">
                                    <p>Pelajaran</p>
                                    <p className="capitalize col-span-2">
                                        : {i.rooms.subjects.subject}
                                    </p>
                                </div>
                                <div className="grid grid-cols-3">
                                    <p>Guru</p>
                                    <p className="capitalize col-span-2">
                                        : {i.rooms.teachers.name}
                                    </p>
                                </div>
                                <div className="grid grid-cols-3">
                                    <p>Program</p>
                                    <p className="capitalize col-span-2">
                                        : Online {i.rooms.program}
                                    </p>
                                </div>
                                <div className="grid grid-cols-3">
                                    <p>Hari</p>
                                    <p className="capitalize col-span-2">
                                        : {i.rooms.day}
                                    </p>
                                </div>
                                <div className="grid grid-cols-3">
                                    <p>Pukul</p>
                                    <p className="capitalize col-span-2">
                                        : {i.rooms.time}
                                    </p>
                                </div>
                                <div className="grid grid-cols-3">
                                    <p>ID Kelas</p>
                                    <p className="capitalize col-span-2">
                                        :
                                        {i.is_active == true
                                            ? i.rooms.idRoom
                                            : " ---"}
                                    </p>
                                </div>
                                <div className="grid grid-cols-3">
                                    <p>Password</p>
                                    <p className="capitalize col-span-2">
                                        :
                                        {i.is_active == true
                                            ? i.passwordRoom
                                            : " ---"}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                {i.is_active == true ? (
                                    <ButtonLink
                                        link={i.linkRoom}
                                        bgcolor="bg-green-500"
                                        hover="hover:bg-green-600"
                                    >
                                        Mulai Kelas
                                    </ButtonLink>
                                ) : (
                                    <button
                                        className="bg-gray-500 px-3 py-1 text-white rounded-md line-through"
                                        disabled
                                    >
                                        Mulai Kelas
                                    </button>
                                )}
                                <ButtonLink
                                    link={"rapor/data/" + i.rooms.subject_id}
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
                        <Link href="/paketbelajar">
                            <i className="w-full mt-14 text-center opacity-30 text-5xl fa-solid fa-circle-plus"></i>
                            <div className="mt-2 text-center text-xl font-bold text-gray-500">
                                <p>Tambah Paket</p>
                                <p>Belajar</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
