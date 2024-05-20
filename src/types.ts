export type FetchStatus = "idle" | "loading" | "failed" | "succeeded";

export interface BreadCrumb {
  label: string;
  href: string;
}
