import React, { useEffect, useState } from 'react'
import Axios from 'axios'
function DisplayData() {
    const [users,setUser]=useState([])
    useEffect(()=>{
        Axios.get('/api/getData')
        .then((res)=>setUser(res.data))
        .catch(err =>console.log(err))
    },[])
  return (
    <div 
    className='w-full h-screen flex justify-center items-center bg-cover bg-[url("https://media.istockphoto.com/id/1414981473/photo/futuristic-flight-through-a-digital-line-landscape-blue-dust-particle-abstract-background-3d.webp?b=1&s=170667a&w=0&k=20&c=nR3IdRbSFibEagWhoCRY_d-WyEJJSv0BLcIsmJJYN5M=")]'
    >
        <div className='bg-white rounded-md p-5'>
            <table>
                <thead>
                    <tr>
                        <th className='border-2 border-black p-1'>Id</th>
                        <th className='border-2 border-black p-1'>Name</th>
                        <th className='border-2 border-black p-1'>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user=>{
                            return <tr key={user.id}>
                                <td className='border-2 border-black p-1'>{user.id}</td>
                                <td className='border-2 border-black p-1'>{user.name}</td>
                                <td className='border-2 border-black p-1'>{user.password}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default DisplayData
