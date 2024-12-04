import { Skeleton } from "@/components/ui/skeleton";


export const ListLoading = ({count}: { count: number }) => {
  return (
    <div className={"space-y-2"}>
      {[...Array(5)].map((_, i) => (
        <Skeleton className={"h-8 w-full"} />
      ))}
    </div>
  )
}
