import { useAppSelector } from "@/lib/hooks";

const useMiddleware = () => {
  const user = useAppSelector((state) => state.user.data);

  return { isAuthenticated: !!user };
};

export default useMiddleware;
