import { Link } from "@inertiajs/react";

type TButtonSubmit = {
  bgcolor: string;
  hover: string;
  children: any;
}
export default function ButtonSubmit(props: TButtonSubmit) {
  return (
    <button
    type="submit"
      className={
        props.bgcolor + " " + props.hover + " text-white rounded-md px-2 py-1"
      }
    >
      {props.children}
    </button>
  );
}

type TButtonLink = {
  link: string;
  bgcolor: string;
  hover: string;
  children: any;
}
export function ButtonLink(props: TButtonLink) {
  return (
    <Link
    method="get"
    as="button"
      href={props.link}
      className={
        props.bgcolor + " " + props.hover + " text-white rounded-md px-2 py-1"
      }
    >
      {props.children}
    </Link>
  );
}
