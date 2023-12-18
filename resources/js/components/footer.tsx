const dataMedsos = [
    {
        media: "facebook",
        link: "",
    },
    {
        media: "whatsapp",
        link: "",
    },
    {
        media: "instagram",
        link: "",
    },
    {
        media: "telegram",
        link: "",
    },
];

const dataMenu = [
    {
        link: "/bimbelreguler",
        ket: "Bimbel Reguler",
    },
    {
        link: "/bimbelprivat",
        ket: "Bimbel Privat",
    },
    {
        link: "/englishcourse",
        ket: "English Course",
    },
    {
        link: "/falnakids",
        ket: "Falna Kids",
    },
];

export default function Footer() {
    const medsos = dataMedsos.map((i: any) => (
        <div key={i.media} className="">
            <a className="flex flex-row" href={i.link}>
                <i className={"fa-brands fa-" + i.media + " text-xl"}></i>
                <p className="self-center ml-2">{i.media}</p>
            </a>
        </div>
    ));

    const menu = dataMenu.map((i: any, index) => (
        <div key={index} className="flex flex-row">
            <i className="fa-solid fa-caret-right self-center"></i>
            <a href={i.link}>
                <p className="ml-2">{i.ket}</p>
            </a>
        </div>
    ));

    return (
        <div className="bg-cyan-800 grid grid-flow-row md:grid-cols-3 p-5 text-white gap-5">
            <div className="flex flex-col">
                <div className="flex flex-row my-3">
                    <img
                        src="/img/logofalnaputih.svg"
                        alt=""
                        className="w-10 -mt-1"
                    />
                    <p className="font-bold text-2xl">Falna Akademi</p>
                </div>
                <p>Bimbel Online untuk Generasi Emas Indonesia.</p>
                <div className="flex flex-col">{medsos}</div>
            </div>
            <div className="flex flex-col">
                <p className="font-bold text-2xl my-3">Paket Belajar</p>
                {menu}
            </div>
            <div className="flex flex-col">
                <p className="font-bold text-2xl my-3">Hubungi</p>
            </div>
            <div className="flex flex-row border-t md:col-span-3 items-center justify-center">
                <i className="fa-solid fa-copyright mt-10 mb-4"></i>
                <p className="mt-10 mb-4 ml-1">
                    Lentera Akademi. All right reserved
                </p>
            </div>
        </div>
    );
}
