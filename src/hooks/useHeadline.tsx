import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setHeadline } from "@/store/configSlice";

const useHeadline = () => {
  const dispatch = useAppDispatch();
  return {
    setHeadline: (headline?: string) => dispatch(setHeadline(headline || "")),
    headline: useAppSelector((state) => state.config.headline),
  };
};

export default useHeadline;
