import $ from "jquery";

const data = [
    {
        ask: "Bagaimana sistem belajar di Falna Akademi?",
        ket: "Pembelajaran dilakukan secara online dengan menggunakan aplikasi zoom yang akan diajarkan oleh tutor-tutor berpengalaman.",
    },
    {
        ask: "Bagaimana sistem belajar di Falna Akademi?",
        ket: "Selain bisa belajar dengan tutor-tutor berpengalaman di bidangnya, siswa juga mendapatkan fasilitas 'Tanya Soal'. Dengan Fasilitas ini, tim kami akan membantu siswa untuk menjawab pertanyaan atau PR mereka.",
    },
    {
        ask: "Bagaimana cara untuk menggunakan fitur 'Tanya Soal'?",
        ket: "Cukup mudah, Anda hanya perlu mengirimkan pertanyaan dalam bentuk tulisan atau gambar ke ke kolom yang sudah disediakan di menu 'Tanya Soal,' Anda bisa mengakases menu ini setelah mendaftar di Falna Akademi.",
    },
    {
        ask: "Apakah Falna Akademi menyediakan layanan bimbel offline?",
        ket: "Kami menyediakan Bimbel Offline di beberapa wilayah di Indonesia, silahkan hubungi Admin untuk mengetahui apakah wilayah Anda juga termasuk salah satunya.",
    },
    {
        ask: "Apakah tersedia pembelajaran dengan bahasa Asing?",
        ket: "Kami juga menyiadakan bimbel dengan menggunakan bahasa pengantar asing dengan biaya tambahan, untuk penjelasan lebih lanjut silahkan hubungi Admin Falna Akademi.",
    },
];

export default function FAQ() {
    return (
        <div className="bg-gradient-to-tr from-blue-400 via-cyan-500 to-cyan-500 w-full flex flex-col gap-2 py-5 mt-5">
            <p className="text-center text-white font-semibold text-2xl">
                Sering Ditanyakan
            </p>
            {data.map((i: any, index) => (
                <div
                    key={index}
                    className="bg-white text-gray-700 w-[90%] rounded-md mx-auto"
                >
                    <div className="relative flex flex-col p-3">
                        <div
                            onClick={() =>
                                $("#" + String(index)).slideToggle("fast")
                            }
                            className="flex justify-between"
                        >
                            <p className="font-semibold items-start">{i.ask}</p>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                        <p id={String(index)} className="jadi leading-5 hidden">
                            {i.ket}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
