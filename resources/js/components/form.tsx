type TForm = {
    onSubmit: any;
    title: string;
    children: any;
};

export default function Form(props: TForm) {
    return (
        <div className="bg-white shadow-lg border-2 mx-auto w-[85%] sm:w-80 mt-5 p-3 px-8 rounded-lg">
            <form onSubmit={props.onSubmit} className="flex flex-col gap-2">
                <p className="text-gray-500 font-bold text-center text-2xl">
                    {props.title}
                </p>
                {props.children}
            </form>
        </div>
    );
}
