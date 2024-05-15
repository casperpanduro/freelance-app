import { ReactNode } from "react";
import useMiddleware from "@/hooks/useMiddleware";

export const metadata = {
  title: "Sign in to your account",
  description: "Sign in to your account",
};

const GuestLayout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default GuestLayout;
