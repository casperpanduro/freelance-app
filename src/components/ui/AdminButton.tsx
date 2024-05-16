"use client";
import { ElementType, ReactNode } from "react";

interface Props {
  text: string;
  icon?: ElementType;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const AdminButton = ({ text, onClick, icon: Icon, type = "button" }: Props) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="inline-flex items-center rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {Icon && <Icon className={`w-4 h-4 ${text && "mr-1.5"}`} />}
      {text}
    </button>
  );
};

export default AdminButton;
