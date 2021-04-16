import useSWR from "swr";

import userFetcher from "../libs/api-user";

export default function useUser() {
    console.log("useUser");
    const { data, mutate, error } = useSWR("api_user", userFetcher);

    const loading = !data && !error;
    const loggedOut = error && error.status === 403;

    return {
        loading,
        loggedOut,
        user: data,
        mutate
    };
}
