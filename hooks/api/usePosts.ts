import useSWR from "swr";
import axios from "axios";
import { API_ENDPOINT_POST } from "@/constants";

const fetcher = () => axios.get(API_ENDPOINT_POST).then((res) => res.data);

export function usePosts() {
  const { data, error, isLoading } = useSWR("/todos", fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
}
