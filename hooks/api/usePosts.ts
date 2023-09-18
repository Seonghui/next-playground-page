import useSWR from "swr";
import axios from "axios";
import { API_ENDPOINT_POST } from "@/constants";
import { useQuery } from "@tanstack/react-query";

const fetcher = () => axios.get(API_ENDPOINT_POST).then((res) => res.data);

export function usePosts() {
  // const { data, error, isLoading } = useSWR("/todos", fetcher);
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetcher,
  });
  console.log("hello?");

  return {
    data,
    isLoading,
    isError: error,
  };
}
