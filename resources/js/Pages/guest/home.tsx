import FAQ from "@/components/FAQ";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Link } from "@inertiajs/react";

export default function Home() {
    const data1 = [
        {
            img: "wifi.svg",
            ket: "Bimbel Online",
            link: "bimbelreguler",
        },
        {
            img: "chat.svg",
            ket: "English Course",
            link: "englishcourse",
        },
        {
            img: "kids.svg",
            ket: "Falna Kids",
            link: "falnakids",
        },
    ];

    const data2 = [
        {
            img: "ngajiquran.svg",
            ket: "Ngaji Quran",
            link: "ngajiquran",
        },
        {
            img: "it.svg",
            ket: "Ngerti IT",
            link: "ngertiit",
        },
    ];

    const data3 = [
        {
            judul: "Matematika",
            from: "from-red-300",
            to: "to-red-300",
            color: "bg-red-400",
            servedby: "logoreguler.svg",
            img: "math.svg",
            imgclass: "right-2 -bottom-10 w-48",
            durasi: "60",
            ketbtnatas: "2",
        },
        {
            judul: "English",
            from: "from-blue-300",
            to: "to-blue-300",
            color: "bg-blue-400",
            servedby: "logoenglish.svg",
            img: "phone2.svg",
            imgclass: "right-2 -bottom-2 w-36",
            durasi: "60",
            ketbtnatas: "2",
        },
        {
            judul: "Belajar Membaca",
            from: "from-orange-300",
            to: "to-orange-300",
            color: "bg-orange-400",
            servedby: "logokids.svg",
            img: "dinoabc.svg",
            imgclass: "right-0 bottom-6 w-44",
            durasi: "35",
            ketbtnatas: "4",
        },
        {
            judul: "Ngaji",
            from: "from-green-300",
            to: "to-green-300",
            color: "bg-red-400",
            servedby: "logongajiquran.svg",
            img: "quran.svg",
            imgclass: "right-0 -bottom-3 w-56",
            durasi: "35",
            ketbtnatas: "4",
        },
    ];
    return (
        <main className="bg-slate-100">
            <Navbar bgcolor="bg-cyan-500" />

            {/* header */}

            <div className="bg-gradient-to-tr from-blue-500 via-cyan-500 to-cyan-500 relative h-64 md:h-96 bg-cyan-600 overflow-hidden">
                <div className="text-white m-5 w-40 md:w-72 md:m-12 md:ml-16">
                    <p className="text-4xl md:text-5xl font-bold">
                        Falna Akademi
                    </p>
                    <p className="md:text-3xl md:mt-0 max-md:leading-5">
                        Bimbel Online dan Offline pilihan juara.
                    </p>
                    <button className=" bg-orange-400 shadow-md mt-2 md:text-lg px-2 py-1 text-white rounded-md md:px-5 md:py-2">
                        <Link href="/daftar">Daftar</Link>
                    </button>
                </div>
                <img
                    src="/img/o.svg"
                    alt=""
                    className="absolute -top-20 -right-10 w-60 md:w-96"
                />
                <img
                    src="/img/o.svg"
                    alt=""
                    className="max-md:hidden absolute -bottom-40 right-60 w-96"
                />
                <img
                    src="/img/online3.svg"
                    alt=""
                    className="absolute right-0 bottom-12 w-48 md:bottom-10 md:right-20 md:w-96"
                />
            </div>

            {/* pilihan paket belajar */}

            <div className="relative -top-16 w-[90%] h-40 md:h-28 rounded-2xl bg-white shadow-md mx-auto">
                <p className="md:hidden text-center p-3 text-lg text-gray-600  font-semibold">
                    Pilihan Paket Belajar
                </p>
                <div className="flex flex-row justify-around text-center md:text-left md:p-4 ">
                    {data1.map((i: any) => (
                        <div key={i.link}>
                            <Link
                                href={i.link}
                                className="flex flex-col md:flex-row w-20 items-center md:border-2  border-gray-300 md:p-2 rounded-xl md:w-44"
                            >
                                <img
                                    src={"img/" + i.img}
                                    alt=""
                                    className="w-14"
                                />
                                <p className="leading-5 text-gray-700 md:text-md md:ml-2 md:leading-6">
                                    {i.ket}
                                </p>
                            </Link>
                        </div>
                    ))}
                    {data2.map((i: any) => (
                        <div
                            key={i.link}
                            className="hidden xl:flex xl:flex-row w-20 items-center border-2 border-gray-300 xl:p-2 rounded-xl xl:w-44"
                        >
                            <Link
                                href={i.link}
                                className="flex flex-row items-center"
                            >
                                <img
                                    src={"img/" + i.img}
                                    alt=""
                                    className="w-14"
                                />
                                <p className="leading-5 text-gray-700 md:text-md md:ml-2 md:leading-6">
                                    {i.ket}
                                </p>
                            </Link>
                        </div>
                    ))}
                    <div>
                        <Link
                            href="/konsultasi"
                            className="flex flex-col md:flex-row w-20 items-center md:border-2 border-gray-300 md:p-2 rounded-xl md:w-44"
                        >
                            <img
                                src="/img/lainnya.svg"
                                alt=""
                                width={1}
                                height={1}
                                className="w-14"
                            />
                            <p className="leading-5 text-gray-700 md:text-md md:ml-2 md:leading-6">
                                Paket Lainnya
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* judul populer */}

            <div className="relative flex flex-row -top-10 ml-8 md:ml-16">
                <img src="/img/stars.svg" alt="" className="w-12" />
                <p className="self-center ml-2 text-xl font-semibold text-gray-600">
                    Paket Belajar Populer
                </p>
            </div>

            {/* card */}

            <div className="relative -top-5 overflow-x-auto">
                <div className="inline-flex ml-2 md:ml-12">
                    {data3.map((i: any) => (
                        <div key={i.judul} className="w-56 ml-5 ">
                            <div
                                className={
                                    "relative overflow-hidden h-60 mx-auto w-56 rounded-t-xl bg-gradient-to-bl " +
                                    i.from +
                                    " " +
                                    i.to
                                }
                            >
                                <img
                                    src="img/o.svg"
                                    alt=""
                                    className="absolute w-60 -left-10 -top-10"
                                />
                                <div className="absolute left-3 top-3 bg-blue-700 inline px-3 rounded-full  text-white">
                                    {i.judul}
                                </div>
                                <p className="pt-9 pl-4 text-gray-700">
                                    Served by
                                </p>
                                <img
                                    src={"/img/" + i.servedby}
                                    alt=""
                                    className="w-40 pl-4 -mt-1"
                                />
                                <img
                                    src={"/img/" + i.img}
                                    alt=""
                                    className={"absolute " + i.imgclass}
                                />
                            </div>
                            <div className="relative h-80 bg-white rounded-xl -top-5 shadow-md">
                                <div className="container ml-4 pt-2">
                                    <button className="flex ml-14 mt-2 justify-between w-20 bg-green-500 px-5 py-1 rounded-md text-white font-semibold">
                                        <Link href={"/daftar"}>Daftar</Link>
                                    </button>
                                    <p className="font-semibold text-lg text-gray-700">
                                        Fasilitas:
                                    </p>
                                    <div className="flex">
                                        <img
                                            src="/img/check1.svg"
                                            alt=""
                                            width={1}
                                            height={1}
                                            className="w-4"
                                        />
                                        <p className="ml-1"> Online Grup </p>
                                    </div>
                                    <div className="flex">
                                        <img
                                            src="img/check1.svg"
                                            alt=""
                                            width={1}
                                            height={1}
                                            className="w-4"
                                        />
                                        <p className="ml-1">
                                            Max 6 orang / kelas
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <img
                                            src="img/check1.svg"
                                            alt=""
                                            width={1}
                                            height={1}
                                            className="w-4"
                                        />
                                        <p className="ml-1">
                                            Layanan tanya soal
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <img
                                            src="img/check1.svg"
                                            alt=""
                                            width={1}
                                            height={1}
                                            className="w-4"
                                        />
                                        <p className="ml-1">
                                            {i.durasi + " menit / sesi"}
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <img
                                            src="img/check1.svg"
                                            alt=""
                                            width={1}
                                            height={1}
                                            className="w-4"
                                        />
                                        <p className="ml-1">Laporan belajar</p>
                                    </div>
                                </div>
                                <p className="font-semibold ml-4 mt-3 text-lg text-gray-700">
                                    Biaya per Bulan:
                                </p>
                                <div
                                    className={
                                        "flex mt-1 justify-between w-[85%] mx-auto " +
                                        i.color +
                                        " px-4 rounded-full text-white"
                                    }
                                >
                                    <span className="self-center text-sm">
                                        {i.ketbtnatas + " sesi / minggu"}
                                    </span>
                                    <span className="font-bold text-lg">
                                        140K
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="w-56 ml-5 ">
                        <div className="relative overflow-hidden h-[540px] mx-auto w-56 rounded-xl bg-gradient-to-bl from-purple-300 to-purple-200 shadow-md">
                            <img
                                src="img/o.svg"
                                alt=""
                                width={1}
                                height={1}
                                className="absolute w-60 -left-10 -top-10"
                            />
                            <img
                                src="img/o.svg"
                                alt=""
                                width={1}
                                height={1}
                                className="absolute w-60 -right-10 top-20"
                            />
                            <p className="leading-6 mt-10 ml-3 font-bold text-xl text-orange-500">
                                Lihat Semua Paket Belajar
                            </p>
                            <Link href="/konsultasi">
                                <img
                                    src="img/next.svg"
                                    alt=""
                                    className="relative w-10 ml-3"
                                />
                            </Link>
                            <img
                                src="img/phone.svg"
                                alt=""
                                width={1}
                                height={1}
                                className="absolute bottom-10"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* tambahan */}
            <FAQ />
            <Footer />
        </main>
    );
}
