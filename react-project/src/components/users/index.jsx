import { useEffect, useState } from "react";

export default function UsersList(){
    const [userList,setUserList] = useState([])
    useEffect(()=>{
        fetchAllUsers()  
    },[])
    async function fetchAllUsers() {
        try{
            const apiResponse = await fetch('https://dummyjson.com/users');
            const result = await apiResponse.json()
            if(result?.users){
                setUserList(result?.users)
            }
            else setUserList([]);
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
        <h1>All user list</h1>
        <ul>
            {
                userList && userList.length>0 ? userList.map(user =><li key={user?.id}>
                    {user?.id}. {user?.firstName} {user?.lastName}
                </li>) : <h2>No user found! please try again</h2>
            }
        </ul>
       
    </div>
    );
}