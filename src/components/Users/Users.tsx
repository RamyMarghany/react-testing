import {useEffect, useState} from "react";

export const Users = ()=>{
    const [users, setUsers]=useState<string[]>([]);
    const [error, setError] = useState<string|null>(null);

    useEffect(()=>{
        // Real APIs are considered for E2E testing, not for usnit testing, so in unit testing we are mocking APIs response
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data.map((user:{name:string})=>user.name)))
        .catch(()=>setError('Error fetching users'))
    },[])

    return(
        <>
            <h2>Users</h2>
            {error && <p>{error}</p>}
            <ul>
                {users.map(user=><li key={user}>{user}</li>)}
            </ul>
        </>
    )
}