import React,{useState, useEffect } from 'react'
import Navbar from './Navbar'
import { getUser,deleteUser } from '../service/api.js';
import {Link  } from 'react-router-dom';
function AllUser() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    getAllUser();
  },[]);
 // const navigate= useNavigate();
  const getAllUser = async() =>{
   let response= await getUser();
   setUsers(response.data)
   
  }

  const deleteUserDetails = async (id) =>{
        await deleteUser(id);
        getAllUser();
        //navigate('/all');
  }

  return (
    <>
    <div> <Navbar  />
    <table className="table">
  <thead>
    <tr>
      <th scope="col">*</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
      
    {
      users.map((user) => (
        <tr>
        <th >*</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td><button><Link to={`/edit/${ user._id }`}>  Edit</Link></button></td>
        <td><button onClick={()=>{ deleteUserDetails(user._id)} }>Delete</button></td>
        </tr>
      ) )
    }
    
    
   
   </tbody> 
</table>
    </div>
    </>
  )
}

export default AllUser 