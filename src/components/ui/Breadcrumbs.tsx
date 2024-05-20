"use client";
import useBreadcrumbs from "@/hooks/useBreadcrumbs";

const Breadcrumbs = () => {
  const { breadcrumbs } = useBreadcrumbs();

  if (!breadcrumbs.length) return <></>;

  return (
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul className={"flex gap-x-2 text-xs font-semibold mb-2"}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index}>
            <a href={breadcrumb.href}>{breadcrumb.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
