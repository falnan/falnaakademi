"use client";

import { Link, usePage } from "@inertiajs/react";
import $ from "jquery";
import { useState } from "react";

const data = [
    {
        link: "bimbelreguler",
        img: "logoreguler.svg",
        ket: "Belajar online dari rumah jadi lebih mudah dan menyenangkan.",
    },
    {
        link: "bimbelprivat",
        img: "logoprivat.svg",
        ket: "Belajar lebih fokus dengan menyesuaikan kemampuan dan kebutuhan belajar siswa.",
    },
    {
        link: "englishcourse",
        img: "logoenglish.svg",
        ket: "Ngobrol Bahasa Inggris lebih lancar, lebih PD, dan lebih berani.",
    },
    {
        link: "falnakids",
        img: "logokids.svg",
        ket: "Bimbel Online untuk anak umur 5-7 tahun dengan program CALISTUNG.",
    },
    {
        link: "ngajiquran",
        img: "logongajiquran.svg",
        ket: "Belajar membaca Al-Quran dan pengetahuan Islam bersama Ustadz-Ustadzah.",
    },
    {
        link: "ngertiit",
        img: "logongertiit.svg",
        ket: "XXXXXXXXXXXXXXXXXXXXXXXXXXX.",
    },
];

export function CekLogin() {
    const { auth }: any = usePage().props;
    const [viewLogin, setViewLogin] = useState(false);
    if (!auth.check) {
        return (
            <div>
                <Link as="button" href="/login">
                    Login
                </Link>
            </div>
        );
    }
    {
        return (
            <div className="text-center">
                <button onClick={() => setViewLogin(!viewLogin)}>
                    <p>Hai</p>
                    <p>{auth.id}</p>
                </button>
                {viewLogin && (
                    <div className="absolute bg-white text-gray-600 shadow-md rounded-lg z-10 right-8 top-16">
                        <div className="flex flex-col">
                            <p className="px-3 py-2 border-gray-400 border-b">
                                <Link as="button" href="/dashboard">
                                    Dashboard
                                </Link>
                            </p>
                            <p className="py-2">
                                <Link as="button" method="post" href="/logout">
                                    Logout
                                </Link>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default function Navbar({ bgcolor }: any) {
    const [invi, setInvi] = useState("invisible");
    const [invi2, setInvi2] = useState("invisible");
    const paketBelajar = data.map((i) => (
        <div key={i.link}>
            <Link href={"/" + i.link}>
                <img className="w-44" src={"/img/" + i.img} alt="" />
            </Link>
            {i.ket}
        </div>
    ));

    $("#navnamas2").click(function () {
        $("#navnamao2").slideToggle("fast");
    });

    return (
        <nav className={bgcolor}>
            <div className="grid grid-cols-5 justify-items-center  content-center text-white h-20">
                <button
                    onClick={() => $("#burgero").slideToggle()}
                    id="burgers"
                    className="lg:hidden py-2"
                >
                    <svg
                        className="block h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>
                <div className="max-lg:col-span-3">
                    <Link href="/">
                        <img
                            src="/img/logofalnaputih.svg"
                            className="absolute max-md:-ml-6 top-6 w-9"
                            alt=""
                        />
                    </Link>
                </div>
                <div
                    id="burgero"
                    className={
                        bgcolor +
                        " hidden absolute top-16 z-20 left-0 h-30 w-full py-3 place-items-center"
                    }
                >
                    <div className="flex flex-col gap-3">
                        <div
                            onClick={() =>
                                $("#navpaketbelajaro").slideToggle("slow")
                            }
                            className="grid grid-flow-row w-full place-items-center"
                        >
                            <button>Paket Belajar</button>
                            <div
                                id="navpaketbelajaro"
                                className="hidden bg-white w-[85%] rounded-md text-gray-700 grid grid-flow-row gap-3 p-3"
                            >
                                {paketBelajar}
                            </div>
                        </div>
                        <div className="text-center">
                            <button>
                                <Link href="/tanyasoal">Tanya Soal</Link>
                            </button>
                        </div>
                        <div className="text-center">
                            <button>
                                <Link href="{{ Route('tips') }}">
                                    Tips dan Trik
                                </Link>
                            </button>
                        </div>
                        <div
                            onClick={() =>
                                $("#navlayanano").slideToggle("fast")
                            }
                            className="grid grid-flow-row w-full place-items-center"
                        >
                            <button>Layanan</button>
                            <div
                                id="navlayanano"
                                className="hidden bg-white w-[85%] rounded-md text-gray-700 grid grid-flow-row gap-3 p-3"
                            >
                                <div className="grid grid-flow-row">
                                    <div>
                                        <button>
                                            <Link href="{{ Route('konsultasi') }}">
                                                Admin Falna
                                            </Link>
                                        </button>
                                    </div>
                                    <div>
                                        <button>
                                            <Link href="/konsultasi">
                                                Konsultasi Pilih Paket Belajar
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* {{-- menu for pc screen --}} */}

                <div className="col-span-3 max-lg:hidden lg:justify-self-start py-2 grid grid-flow-col gap-10">
                    <div
                        onMouseOver={() => setInvi("")}
                        onMouseOut={() => setInvi("invisible")}
                        className="self-center relative z-10"
                    >
                        <button>Paket Belajar</button>
                        <div
                            onMouseOver={() => setInvi("")}
                            onMouseOut={() => setInvi("invisible")}
                            className={
                                invi +
                                " absolute bg-white text-gray-600 shadow-md rounded-lg z-10 left-0 top-6 grid grid-cols-3 w-[650px] p-5"
                            }
                        >
                            {paketBelajar}
                        </div>
                    </div>
                    <button>
                        <Link href="/tanyasoal">Tanya Soal</Link>
                    </button>
                    <button>
                        <Link href="/tips">Tips dan Trik</Link>
                    </button>
                    <button
                        id="navlayanans2"
                        onMouseOver={() => setInvi2("")}
                        onMouseOut={() => setInvi2("invisible")}
                        className="relative z-10"
                    >
                        Layanan
                        <div
                            id="navlayanano2"
                            onMouseOver={() => setInvi2("")}
                            onMouseOut={() => setInvi2("invisible")}
                            className={
                                invi2 +
                                " absolute bg-white text-gray-600 shadow-md rounded-lg z-10 left-0 top-6 flex flex-col w-60 p-3"
                            }
                        >
                            <p className="flex">
                                <Link href="/konsultasi">Admin Falna</Link>
                            </p>
                            <p className="flex">
                                <Link href="/konsultasi">
                                    Konsultasi Pilih Paket Belajar
                                </Link>
                            </p>
                        </div>
                    </button>
                </div>
                <div className="py-2 mr-10 md:-mr-20 rounded-lg">
                    <CekLogin />
                </div>
            </div>
        </nav>
    );
}
