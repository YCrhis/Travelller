import axios from 'axios'
import { useState, useEffect } from 'react'
import UsersTable from '../../components/UsersTable'
import ContAdmin from '../../layout/admin/ContAdmin'

const Users = () => {

    const [users, setUsers] = useState<any>()

    const loadUsers = async () => {
        const data = await axios.get('/users');
        setUsers(data)
    }

    useEffect(() => {
        loadUsers();
    }, [])

    return (
        <ContAdmin>
            <h1 className="text-zinc-500">ADMIN &nbsp; {'  |  '}&nbsp;  USERS</h1>
            <h1 className="text-4xl font-bold text-zinc-600 mt-[3rem] ml-3 mb-6 border-l-4 border-blue-400 px-2">
                Users
            </h1>
            <div className="w-[90%] m-auto">
            <UsersTable
               users= {users}
                page={true}
            />
            </div>
        </ContAdmin>
    )
}

export default Users