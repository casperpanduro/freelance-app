import { clsx } from "clsx";
import { cn } from "@/lib/utils";

interface Props {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}

const Heading = ({as = "h2", children, className}: Props) => {
  const Elem = "h2";
  return <Elem className={cn("font-semibold", className)}>{children}</Elem>;
}

export const Heading3Xl = ({children, className, as = "h1"}: Props) => {
  return (
    <Heading as={as} className={cn("text-6xl leading-tight font-bold", className)}>
      {children}
    </Heading>
  );
}

export const HeadingXl = ({children, className, as = "h1"}: Props) => {
  return (
    <Heading as={as} className={cn("text-3xl font-bold", className)}>
      {children}
    </Heading>
  );
}
