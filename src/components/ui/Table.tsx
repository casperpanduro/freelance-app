import { ReactNode } from "react";
import Skeleton from "@/components/ui/Skeleton";
import EmptyState, { EmptyStateProps } from "@/components/ui/EmptyState";

interface Props {
  headlines: string[];
  data: ReactNode[][] | string[][];
  action?: (id: string) => void;
  loading?: boolean;
  emptyState?: EmptyStateProps;
}

const Table = ({ headlines, data, loading, emptyState }: Props) => {
  return (
    <>
      {(loading || data.length > 0) && (
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              {headlines.map((headline, index) => (
                <th
                  key={index}
                  scope="col"
                  className={`${index === 0 ? "pl-4 sm:pl-0" : "pl-3.5"} py-3.5 pr-3 text-left text-sm font-semibold text-gray-900`}
                >
                  {headline}
                </th>
              ))}

              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {loading &&
              Array.from({ length: 5 }).map((_, index) => (
                <tr>
                  {headlines.map((headline, index) => (
                    <td
                      className={`${index === 0 ? "pl-4 sm:pl-0" : "pl-3.5"} whitespace-nowrap py-4 pr-3 text-sm font-normal text-gray-500`}
                    >
                      <Skeleton height={"24px"} />
                    </td>
                  ))}
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <Skeleton height={"24px"} />
                  </td>
                </tr>
              ))}
            {!loading &&
              data.map((item, index) => (
                <tr key={index}>
                  {item.map((content, index) => (
                    <td
                      key={index}
                      className={`${index === 0 ? "pl-4 sm:pl-0" : "pl-3.5"} whitespace-nowrap py-4 pr-3 text-sm font-normal text-gray-500`}
                    >
                      {content}
                    </td>
                  ))}
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
      {!loading && data.length === 0 && emptyState && (
        <EmptyState
          title={emptyState.title}
          description={emptyState.description}
          createAction={emptyState.createAction}
          createText={emptyState.createText}
        />
      )}
    </>
  );
};

export default Table;
