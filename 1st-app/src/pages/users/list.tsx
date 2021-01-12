
import React, {useEffect,useState} from 'react'
import ServiceUser from '../../Service/ServiceUser'

export default function ListUser({dados}){

    const [users, setUsers] = useState([])

    useEffect(() => {
        async function loadUsers(){
            setUsers(dados)
        }
        loadUsers();
    },[])
    

    return (
        <div>
            <h2>Listagem de Users</h2>
            {users.map(element => (
                <li key={element.username}>
                    <p>{element.username}</p>
                </li>
            
            ))}
        </div>
    )
}


export const getStaticProps = () => {
    
    const data =  ServiceUser();
    const d = data.listUser()
   
    return {
        props: {
            dados:d
        },
        revalidate:1
    }
}
