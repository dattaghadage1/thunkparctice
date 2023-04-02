import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD, deleteData, fetchData } from './Redux/Resuceres/reducer1';
import { useNavigate } from 'react-router-dom';

function Table() {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const userData = useSelector((state) => state.userData)
    useEffect(() => {
        dispatch(fetchData())
    }, [])
const Update=(ele)=>{
    localStorage.setItem("data",JSON.stringify(ele))
    navigate('/update')
}
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.data && userData.data.map((ele, index) => (
                            <tr key={index}>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.username}</td>
                                <td>{ele.email}</td>
                                <td><button onClick={() => dispatch(deleteData(ele.id))}>Delete</button></td>
                                <td><button onClick={()=>Update(ele)}>Update</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table