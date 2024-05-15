import AdminButton from "@/components/ui/AdminButton";
import { useAppDispatch } from "@/lib/hooks";
import { toggleCreateClientModal } from "@/features/clients/clientSlice";

interface Props {
  text?: string;
}

const ToggleCreateClientModal = ({ text = "Create client" }: Props) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(toggleCreateClientModal());
  };

  return <AdminButton text={text} onClick={handleClick} />;
};

export default ToggleCreateClientModal;
