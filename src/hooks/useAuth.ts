import api from "@/lib/api";
import useSWR, { mutate } from "swr";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setUser } from "@/features/user/userSlice";

interface AuthProps {
  redirectWhenLoggedIn?: string;
  protected?: boolean;
}

const useAuth = () => {
  const dispatch = useAppDispatch();
  const fetchUser = async () => {
    try {
      const response = await api.get("/api/user");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const { data: profile, error, isLoading } = useSWR("/api/user", fetchUser);

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post("/api/login", {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("timeByPanduroToken", response.data.token);
      }

      await mutate("/api/user");
      //window.location.href = redirectWhenLoggedIn;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (profile) {
      //window.location.href = redirectWhenLoggedIn;
      dispatch(setUser(profile));
    } else {
      //window.location.href = "/login";
    }

    if (error) {
      console.error(error);
    }
  }, [profile, error]);

  return { login, isLoading, user: useAppSelector((state) => state.user.data) };
};

export default useAuth;
