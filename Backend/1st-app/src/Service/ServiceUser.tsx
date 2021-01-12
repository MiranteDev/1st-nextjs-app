export default function ServiceUser(){

    const users = [{
        username:'Joao',
        password:'123'
    }];


    async function createUser(user){
        users.push(user);
    }

    function listUser(){
        return users;
    }

    

    return {
        createUser,
        listUser
    }

}

