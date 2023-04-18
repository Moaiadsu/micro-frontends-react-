import { useEffect, useState } from "react";



const Users = () => {
    const [users, setUsers] = useState();
    return(
        <article>
            <h2>
                Users List
            </h2>
            {users?.length ? (
                <url>
                    {users.map(
                        (user, i) => <li key={i}>{user?.username}</li>)}
                </url>
            ) : <p>NO Users to display</p>}
        </article>
    );

}
export default Users;