import { router, usePage } from "@inertiajs/react";
import $ from "jquery";
import { useState } from "react";

const menu = [
    {
        name: "Dashboard",
        img: "fa-solid fa-house",
        link: "/dashboard",
        children: "",
    },
    {
        name: "Student",
        img: "fa-solid fa-user",
        link: "/student",
        children: "",
    },
    {
        name: "Teacher",
        img: "fa-solid fa-user-graduate",
        link: "/teacher",
        children: "",
    },
    {
        name: "Room",
        img: "fa-solid fa-chalkboard-user",
        link: "/room",
        children: "",
    },
];
export function LayoutDashboar(props: any) {
    const { auth }: any = usePage().props;
    const [activeLink, setActiveLink] = useState(props.setActiveLink);
    const [fullSidebar, setFullSidebar] = useState(
        localStorage.getItem("sidebar")
    );
    function handleClick() {
        if (fullSidebar == "off") {
            localStorage.removeItem("sidebar");
            setFullSidebar("");
        } else {
            localStorage.setItem("sidebar", "off");
            setFullSidebar("off");
        }
    }
    return (
        <>
            <div className="flex justify-between h-20 sticky top-0 w-full bg-cyan-500 shadow-md">
                <div className="flex items-center justify-center h-full w-60">
                    <button onClick={handleClick} className="bg-green-500">
                        Kliklah
                    </button>

                    <img
                        className="w-12"
                        src="/img/logofalnaputih.svg"
                        alt=""
                    />
                </div>
                <div className="flex flex-col items-center justify-center h-full w-60 text-white">
                    <p>Hai</p>
                    <p>{auth.id}</p>
                </div>
            </div>
            {/* split 2 part */}
            <div
                className={
                    !fullSidebar
                        ? "flex flex-row w-60 transition-all duration-1000"
                        : "flex flex-row w-20 transition-all duration-1000"
                }
            >
                {/* side bar */}
                <div className="sticky top-20 h-max text-gray-700 max-md:hidden p-4 transition-all duration-1000">
                    {menu.map((i: any) => (
                        <div
                            onClick={() => {
                                () => setActiveLink(i.name);
                                router.get(i.link);
                            }}
                            key={i.name}
                            className=" flex-col p-1 cursor-pointer"
                        >
                            <div
                                className={
                                    activeLink == i.name
                                        ? "flex h-8 px-2.5 gap-3 items-center rounded-full bg-gradient-to-tr from-blue-400 to-cyan-500 text-white font-semibold"
                                        : "flex h-8 px-2.5 gap-3 items-center text-gray-700"
                                }
                            >
                                <i
                                    className={
                                        activeLink == i.name
                                            ? i.img + " text-white"
                                            : i.img + " text-cyan-500"
                                    }
                                ></i>
                                {!fullSidebar && <p>{i.name}</p>}
                            </div>
                        </div>
                    ))}
                </div>
                {/* content */}
                <div
                    className={
                        !fullSidebar
                            ? "w-full bg-gray-100 min-h-screen text-black"
                            : "w-screen bg-gray-100 min-h-screen text-black"
                    }
                >
                    <div className="grid grid-flow-col">{props.children}</div>
                </div>
            </div>
        </>
    );
}

export default function LayoutDashboard(props: any) {
    const { auth }: any = usePage().props;
    const [activeLink, setActiveLink] = useState(props.setActiveLink);
    const [fullSidebar, setFullSidebar] = useState(
        sessionStorage.getItem("sidebar") || ""
    );
    const [mobileSidebar, setMobileSidebar] = useState(
        sessionStorage.getItem("mobileSidebar") || ""
    );
    function handleClick() {
        if (fullSidebar) {
            sessionStorage.removeItem("sidebar");
            setFullSidebar("");
        } else {
            sessionStorage.setItem("sidebar", "on");
            setFullSidebar("on");
        }
    }
    function handleClick2() {
        if (!mobileSidebar) {
            $(".burger").animate({
                width: "toggle",
            });
            sessionStorage.setItem("mobileSidebar", "on");
            setMobileSidebar("on");
        } else {
            new Promise(function (resolve, reject) {
                $(".burger").animate({
                    width: "toggle",
                });
                resolve(() => {});
            }).then((res) => {
                setTimeout(() => {
                    sessionStorage.removeItem("mobileSidebar");
                    setMobileSidebar("");
                }, 500);
            });
        }
    }
    return (
        <>
            <div className="grid max-lg:grid-cols-5 grid-cols-2 justify-items-center place-items-center h-20 sticky top-0 w-full bg-cyan-500 shadow-md text-white text-center">
                <div className="lg:hidden">
                    <button onClick={handleClick2} className="">
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
                </div>
                <div className="max-lg:col-span-3 lg:justify-self-start lg:ml-28">
                    <img
                        className="w-12"
                        src="/img/logofalnaputih.svg"
                        alt=""
                    />
                </div>
                <div className="lg:justify-self-end lg:mr-32">
                    <p>Hai</p>
                    <p>{auth.id}</p>
                </div>
            </div>
            <div className="flex flex-row">
                {/* sidebar */}
                <div
                    className={
                        !fullSidebar
                            ? "flex-none max-lg:hidden w-60 transition-all duration-500"
                            : "flex-none max-lg:hidden w-20 transition-all duration-500"
                    }
                >
                    <div
                        className={
                            !fullSidebar
                                ? "fixed w-60 transition-all duration-500 top-20 h-screen bg-white"
                                : "fixed w-20 transition-all duration-500 top-20 h-screen  bg-white"
                        }
                    >
                        <div className="flex flex-col justify-between h-full p-4">
                            <div className="flex flex-col p-1 gap-2">
                                {menu.map((i: any) => (
                                    <div
                                        onClick={() => {
                                            () => setActiveLink(i.name);
                                            router.get(i.link);
                                        }}
                                        key={i.name}
                                        className={
                                            activeLink == i.name
                                                ? "flex h-8 px-2.5 gap-3 items-center rounded-full bg-gradient-to-tr from-blue-400 to-cyan-500 text-white font-semibold cursor-pointer"
                                                : "flex h-8 px-2.5 gap-3 items-center text-gray-700 cursor-pointer"
                                        }
                                    >
                                        <i
                                            className={
                                                activeLink == i.name
                                                    ? i.img + " text-white"
                                                    : i.img + " text-cyan-500"
                                            }
                                        ></i>
                                        <p
                                            className={
                                                !fullSidebar
                                                    ? "text-gray-500"
                                                    : "lg:hidden text-gray-500"
                                            }
                                        >
                                            {i.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="mb-20 ">
                                <div
                                    onClick={handleClick}
                                    className="flex h-8 px-2.5 gap-3 items-center text-gray-700 cursor-pointer"
                                >
                                    <i className="fa-solid fa-arrows-left-right-to-line text-cyan-500"></i>
                                    {!fullSidebar && <p> Perluas</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* sidebar hp */}
                <div className="lg:hidden">
                    <div
                        onClick={handleClick2}
                        className={
                            mobileSidebar ? "fixed h-screen w-screen" : "hidden"
                        }
                    ></div>
                    <div
                        className={
                            !mobileSidebar
                                ? "burger fixed hidden w-60 top-20 h-screen bg-white"
                                : "burger fixed w-60 top-20 h-screen bg-white"
                        }
                    >
                        <div className="flex flex-col justify-between h-full p-4">
                            <div className="flex flex-col p-1 gap-2">
                                {menu.map((i: any) => (
                                    <div
                                        onClick={() => {
                                            () => setActiveLink(i.name);
                                            router.get(i.link);
                                        }}
                                        key={i.name}
                                        className={
                                            activeLink == i.name
                                                ? "flex h-8 px-2.5 gap-3 items-center rounded-full bg-gradient-to-tr from-blue-400 to-cyan-500 text-white font-semibold cursor-pointer"
                                                : "flex h-8 px-2.5 gap-3 items-center text-gray-700 cursor-pointer"
                                        }
                                    >
                                        <i
                                            className={
                                                activeLink == i.name
                                                    ? i.img + " text-white"
                                                    : i.img + " text-cyan-500"
                                            }
                                        ></i>
                                        <p
                                            className={
                                                !fullSidebar
                                                    ? "text-gray-500"
                                                    : "lg:hidden text-gray-500"
                                            }
                                        >
                                            {i.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="mb-20 ">
                                <div
                                    onClick={handleClick}
                                    className="max-lg:hidden flex h-8 px-2.5 gap-3 items-center text-gray-700 cursor-pointer"
                                >
                                    <i className="fa-solid fa-arrows-left-right-to-line text-cyan-500"></i>
                                    {!fullSidebar && (
                                        <p className="max-lg:hidden">Perluas</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* content */}
                <div className="grid pl-4 pt-4 w-full min-h-screen bg-gray-100 content-start">
                    {props.children}
                </div>
            </div>
        </>
    );
}
