import { ButtonLink } from "@/components/button";
import LayoutDashboard from "@/components/layoutDashboard";
import { router, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function DataRoom({ room }: any) {
    const { flash }: any = usePage().props;
    {
        flash == "success" &&
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
            });
    }
    return (
        <>
            <LayoutDashboard setActiveLink="Room">
                <div>
                    <ButtonLink
                        bgcolor="bg-green-500"
                        hover="hover:bg-green-400"
                        link="/room/add"
                    >
                        Input Room
                    </ButtonLink>
                </div>
                <div className="mt-4 overflow-auto">
                    <table className="table-auto text-sm text-left text-gray-500">
                        <thead className="text-xs text-white uppercase bg-blue-400">
                            <tr className="text-center">
                                <th className="px-1">No</th>
                                <th className="px-1">Kode Kelas</th>
                                <th className="px-1">Guru</th>
                                <th className="px-1">Pelajaran</th>
                                <th className="px-1">Kelas</th>
                                <th className="px-1">Program</th>
                                <th className="px-1">Hari</th>
                                <th className="px-1">Waktu</th>
                                <th className="px-1">ID Room</th>
                                <th className="px-1 py-1">Password Room</th>
                                <th className="px-1">Murid</th>
                                <th colSpan={3} className="px-1">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {room.map((i: any, index: any) => (
                                <tr
                                    key={index}
                                    className={
                                        index % 2 === 0
                                            ? "text-center bg-white"
                                            : "text-center bg-blue-100"
                                    }
                                >
                                    <td>{index + 1}</td>
                                    <td>{i.id}</td>
                                    <td>{i.teachers.name}</td>
                                    <td>{i.subjects.subject}</td>
                                    <td>{i.grade}</td>
                                    <td>{i.program}</td>
                                    <td>{i.day}</td>
                                    <td>{i.time}</td>
                                    <td>{i.idRoom}</td>
                                    <td>{i.passwordRoom}</td>
                                    <td>
                                        {i.students.map(
                                            (a: any) => a.username + ", "
                                        )}
                                    </td>
                                    <td className="px-2">
                                        <svg
                                            className="cursor-pointer fill-blue-500"
                                            onClick={() =>
                                                router.get(
                                                    "/room/" + i.id + "/student"
                                                )
                                            }
                                            height="16"
                                            width="18"
                                            viewBox="0 0 576 512"
                                        >
                                            <path d="M96 32C60.7 32 32 60.7 32 96V384H96V96l384 0V384h64V96c0-35.3-28.7-64-64-64H96zM224 384v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H416V384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32z" />
                                        </svg>
                                    </td>

                                    <td className="px-2">
                                        <svg
                                            onClick={() =>
                                                router.get("/room/" + i.id)
                                            }
                                            className="cursor-pointer fill-green-500"
                                            height="16"
                                            width="16"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                                        </svg>
                                    </td>
                                    <td className="px-2">
                                        <svg
                                            onClick={(e: any) => {
                                                Swal.fire({
                                                    title: "Are you sure?",
                                                    text: "You won't be able to revert this!",
                                                    icon: "warning",
                                                    showCancelButton: true,
                                                    confirmButtonColor:
                                                        "#3085d6",
                                                    cancelButtonColor: "#d33",
                                                    confirmButtonText:
                                                        "Yes, delete it!",
                                                }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        e.preventDefault();
                                                        router.delete(
                                                            "/room/" + i.id
                                                        );
                                                    }
                                                });
                                            }}
                                            className="cursor-pointer fill-red-500"
                                            height="16"
                                            width="14"
                                            viewBox="0 0 448 512"
                                        >
                                            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                        </svg>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </LayoutDashboard>
        </>
    );
}
