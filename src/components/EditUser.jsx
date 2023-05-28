import React,{ useState,useEffect } from 'react'
import Navbar from './Navbar'
import  { editUser , getUsers } from '../service/api';
import { useNavigate,useParams } from 'react-router-dom';
function EditUser() {
 const initial={
   name:'',
   email:'',
   password:''
 
 }
 const[user,setUser]=useState(initial);
 let { id } = useParams();
 useEffect(()=>{
  loadUserDetails();
 },[]);



 console.log(id);
 const  loadUserDetails = async() =>{
  const response = await getUsers(id);
  console.log(response);
  setUser(response.data);
}

 const navigate= useNavigate();

 const onValueChange = (e) =>{
   setUser({...user,[e.target.name]:e.target.value})

 };

 const edithandleSubmit = async (e) =>
 {
   e.preventDefault();
   //console.log("user add", user);
   await editUser(user,id);
  navigate('/all');
   
 }
  return (
   <>
    <Navbar  />
    <h1>Edit User</h1>
   <div className="container">
   <form   onSubmit={ edithandleSubmit } >
       <center>
      <div className="row mt-5">
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                 <label>Username</label>
                 <input type="text" 
                  onChange={(e)=>onValueChange(e)} 
                  name="name" 
                  value={user.name}
                 className="form-control" />
                  
               </div>
               <div className="col-lg-4"></div>
       </div>
        <div className="row mt-5">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
               <label>Email</label>
               <input type="text"
                onChange={(e)=>onValueChange(e)} 
                 name="email" 
                 value={user.email}
                 className="form-control" />
            </div>
           <div className="col-lg-4"></div>
       </div>
      
    
       <div className="row mt-3">
           <div className="col-lg-5"></div>
           <div className="col-lg-2">
           <input
              type="submit"
              value="submit"
                className="btn btn-primary"
               />
           </div>
           <div className="col-lg-5"></div>
        </div>
       </center>
       </form>
       </div>
    </>
  )
}

export default EditUser