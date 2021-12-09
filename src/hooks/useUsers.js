import { useEffect, useState } from "react";

const useUsers = () => {
    // const [users, setUsers] = useState([]);
    // useEffect(()=>{
        const getingData = localStorage.getItem('users')
        const users = JSON.parse(getingData);
    // },[])
    

    return {
        users
    };
}
export default useUsers;