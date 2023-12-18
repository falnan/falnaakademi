type TInputArea = {
    id: string;
    label: string;
    onChange: any;
    value: any;
    error: string;
};

export function InputArea(props: TInputArea) {
    return (
        <div className="">
            <Label id={props.id} label={props.label} />
            <textarea
                name={props.id}
                id={props.id}
                onChange={props.onChange}
                value={props.value}
                className={
                    props.error
                        ? "border-none text-gray-900 text-sm rounded-md outline-none ring-opacity-50 ring-1 ring-red-500 focus:border-red-500 w-full p-2"
                        : "border-none text-gray-900 text-sm rounded-md outline-none ring-opacity-50 ring-1 ring-blue-500 focus:border-blue-500 w-full p-2"
                }
            />
            {props.error && (
                <div className="-mb-4 text-red-500 text-xs">*{props.error}</div>
            )}
        </div>
    );
}

type TInputText = {
    id: string;
    label: string;
    onChange: any;
    value: any;
    error: string;
};
export function InputText(props: TInputText) {
    return (
        <div className="">
            <Label id={props.id} label={props.label} />
            <input
                type="text"
                name={props.id}
                id={props.id}
                onChange={props.onChange}
                value={props.value}
                className={
                    props.error
                        ? "border-none text-gray-900 text-sm rounded-md outline-none ring-opacity-50 ring-1 ring-red-500 focus:border-red-500 w-full p-2"
                        : "border-none text-gray-900 text-sm rounded-md outline-none ring-opacity-50 ring-1 ring-blue-500 focus:border-blue-500 w-full p-2"
                }
            />
            {props.error && (
                <div className="-mb-4 text-red-500 text-xs">*{props.error}</div>
            )}
        </div>
    );
}

type TInputSelect = {
    id: string;
    label: string;
    onChange: any;
    defaultValue: any;
    error: string;
    children: any;
};
export function InputSelect(props: TInputSelect) {
    return (
        <div>
            <Label id={props.id} label={props.label} />
            <select
                id={props.id}
                name={props.id}
                onChange={props.onChange}
                defaultValue={props.defaultValue}
                className={
                    props.error
                        ? "border-none text0 text-gray-900 text-sm rounded-md outline-none ring-opacity-50 ring-1 ring-red-500 focus:border-red-500 w-full p-2"
                        : "border-none text0 text-gray-900 text-sm rounded-md outline-none ring-opacity-50 ring-1 ring-blue-500 focus:border-blue-500 w-full p-2"
                }
            >
                {props.children}
            </select>
        </div>
    );
}

type TLabel = {
    id: string;
    label: string;
};
export function Label(props: TLabel) {
    return (
        <label
            htmlFor={props.id}
            className="text-gray-500 text-base capitalize"
        >
            {props.label}
        </label>
    );
}
