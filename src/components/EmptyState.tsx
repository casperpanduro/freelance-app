import { PlusIcon } from "@heroicons/react/20/solid";
import AdminButton from "@/components/AdminButton";
import { ReactNode } from "react";

export interface EmptyStateProps {
  title: string;
  description?: string;
  createAction?: ReactNode;
}

export default function EmptyState({
  title,
  description,
  createAction,
}: EmptyStateProps) {
  return (
    <div className="text-center w-full border border-dashed py-12 border-gray-300 rounded">
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        />
      </svg>
      <h3 className="mt-2 text-sm lg:text-xl font-bold text-zinc-900">
        {title}
      </h3>
      {description && (
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      )}
      {createAction && <div className="mt-6">{createAction}</div>}
    </div>
  );
}
