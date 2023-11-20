import useFetch from "./useFetch";

const useGetDentist = (id) => {
    const URL = `https://jsonplaceholder.typicode.com/users/${id}`;
    return useFetch(URL, {});
}

export default useGetDentist;