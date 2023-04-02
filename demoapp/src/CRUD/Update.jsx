import React, { useEffect, useState } from 'react'
import { updateData } from './Redux/Resuceres/reducer1'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Update() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const[userData,setUserData]=useState({
    id:"",
    name:"",
    username:"",
    email:""
  })
  useEffect(()=>{
    const localData=localStorage.getItem("data")
    const update=JSON.parse(localData)
    setUserData(update)
  },[])
  const getValue=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setUserData({...userData,[name]:value})
  }
  const updateRecord=()=>{
    dispatch(updateData(userData))
    navigate("/")
  }
  return (
    <div>
      ID: <input type="text" name='id' value={userData.id} onChange={getValue} />
      Name: <input type="text" name='name' value={userData.name} onChange={getValue} />
      UserName: <input type="text" name='username' value={userData.username} onChange={getValue} />
      Email: <input type="text" name='email' value={userData.email} onChange={getValue} /><br />
      <button onClick={updateRecord}>Update</button>
      
    </div>
  )
}

export default Update