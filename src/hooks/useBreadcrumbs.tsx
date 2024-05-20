import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setBreadcrumbs } from "@/store/configSlice";
import { BreadCrumb } from "@/types";

const useBreadcrumbs = () => {
  const dispatch = useAppDispatch();

  return {
    setBreadcrumbs: (breadcrumbs: BreadCrumb[]) =>
      dispatch(setBreadcrumbs(breadcrumbs)),
    breadcrumbs: useAppSelector((state) => state.config.breadcrumbs),
  };
};

export default useBreadcrumbs;
