import api from "@/apis";
import { useQuery } from "@tanstack/react-query";
import { UseQueryOptions } from "@tanstack/react-query/src/types";

const fetcher = () => api.get("/api/v1/users/me").then((res) => res.data);

export function useUserMe(options: UseQueryOptions) {
  const queryResult = useQuery({
    queryKey: ["userMe"],
    queryFn: fetcher,
    ...options,
  });
  return {
    ...queryResult,
  };
}
