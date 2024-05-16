"use client";
import { ReactNode } from "react";
import TextInput from "@/components/ui/TextInput";
import AdminButton from "@/components/ui/AdminButton";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

interface Props {
  create: ReactNode;
}

const TableActions = ({ create }: Props) => {
  return (
    <div className="flex justify-between items-end mb-6 border p-6 bg-zinc-50 rounded-xl">
      <div className={"flex items-end gap-x-2 w-1/2"}>
        <TextInput type={"text"} name={"search"} label={"Search"} />
        <AdminButton icon={MagnifyingGlassIcon} text={"Search"} />
      </div>
      {create && <div className="flex space-x-4">{create}</div>}
    </div>
  );
};

export default TableActions;
