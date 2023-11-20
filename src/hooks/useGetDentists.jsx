import useFetch from "./useFetch";
const URL = 'https://jsonplaceholder.typicode.com/users';

const useGetDentists = () => {
    return useFetch(URL, {});
}

export default useGetDentists;