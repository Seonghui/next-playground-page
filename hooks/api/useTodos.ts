import useSWR from "swr";
import axios from "axios";
import { API_ENDPOINT_POST, API_ENDPOINT_TODO } from "@/constants";
import { ITodo } from "@/types";

const fetcher = () => axios.get(API_ENDPOINT_TODO).then((res) => res.data);

export function useTodos() {
  const { data, error, isLoading } = useSWR<ITodo[]>("/todos", fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
}
