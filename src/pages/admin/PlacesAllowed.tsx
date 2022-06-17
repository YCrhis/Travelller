import axios from 'axios'
import { useState, useEffect } from 'react'
import PlacesTable from '../../components/PlacesTable'
import ContAdmin from '../../layout/admin/ContAdmin'

const PlacesAllowed = () => {

    const [places, setPlaces] = useState<any>()

    const loadUsers = async () => {
        const data = await axios.get('/places/get/admin');
        setPlaces(data)
    }

    useEffect(() => {
        loadUsers();
    }, [])

    return (
        <ContAdmin>
            <h1 className="text-zinc-500">ADMIN &nbsp; {'  |  '}&nbsp;  PLACES NOT ALLOWED</h1>
            <h1 className="text-4xl font-bold text-zinc-600 mt-[3rem] ml-3 mb-6 border-l-4 border-blue-400 px-2">
                Places
            </h1>
            <div className="w-[90%] m-auto">
            <PlacesTable
                places= {places}
                page={true}
                allowed={true}
            />
            </div>
        </ContAdmin>
    )
}

export default PlacesAllowed