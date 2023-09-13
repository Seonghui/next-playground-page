import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export function useLogin() {
  const { data, error, isLoading } = useSWR("/api/user/123", fetcher);
}
