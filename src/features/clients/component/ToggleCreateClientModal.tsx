"use client";
import AdminButton from "@/components/AdminButton";
import { useAppDispatch } from "@/lib/hooks";
import { toggleCreateClientModal } from "@/features/clients/clientSlice";
import { PlusIcon } from "@heroicons/react/20/solid";

interface Props {
  text?: string;
}

const ToggleCreateClientModal = ({ text = "Create client" }: Props) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(toggleCreateClientModal());
  };

  return <AdminButton icon={PlusIcon} text={text} onClick={handleClick} />;
};

export default ToggleCreateClientModal;
