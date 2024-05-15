import Logo from "@/components/ui/Logo";
import AdminMenu from "@/components/partials/AdminMenu";

interface Props {
  menu: any[];
}

const AdminSidebar = ({ menu }: Props) => {
  return (
    <div
      className={
        "fixed inset-y-0 left-[-320px] bg-black md:static shrink-0 w-[320px] px-12 py-6"
      }
    >
      <div className={"space-y-6"}>
        <div>
          <Logo />
        </div>
        <div>
          <AdminMenu items={menu} />
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
