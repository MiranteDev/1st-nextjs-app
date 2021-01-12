
import {useState} from 'react'

import ServiceUser from '../../Service/ServiceUser'


function Create(){
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

   
     async function  handleSubmit(event) {
        event.preventDefault();
        
        const data = new FormData();
        data.append('username',username);
        data.append('password',password)

        console.log('entrei')
        const users = ServiceUser();

        await users.createUser(data);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>


            
            <h2>Create User</h2>
            <input type="text" 
            id="username"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}/>
            <input type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}/>
            <button type="submit">Criar</button>

            </form>
            <a href="/users/list"></a>
        </div>
        )
}

export default Create