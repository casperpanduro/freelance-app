"use client";
import { PlusIcon } from "@heroicons/react/20/solid";

interface Props {
  text: string;
  onClick?: () => void;
}

const AdminButton = ({ text, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="inline-flex items-center rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {/*<PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />*/}
      {text}
    </button>
  );
};

export default AdminButton;
