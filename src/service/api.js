import axios from 'axios';

//const URL = 'http://localhost:3000';

export const addUser = async (data) =>{
try{
     
    const result= await axios.post("http://35.154.132.212:8000/add",data);
      console.log(result);
      return result;

    }
catch(error){
    console.log(error.message);
}
};

export const getUser = async () =>{
  try{
       
      return await axios.get("http://35.154.132.212:8000/all");
      }
  catch(error){
      console.log(error.message);
  }
  };

  export const getUsers = async (id) =>{
    try{
         
        return await axios.get(`http://35.154.132.212:8000/${id}`);
        }
    catch(error){
        console.log(error.message);
    }
    };

export const editUser = async (user,id) =>{
        try{
             
            return await axios.put(`http://35.154.132.212:8000/${id}`,user);
            }
        catch(error){
            console.log(error.message);
        }
        };

        export const deleteUser = async (id) =>{
            try{
                 
                return await axios.delete(`http://35.154.132.212:8000/${id}`,);
                }
            catch(error){
                console.log(error.message);
            }
            };       