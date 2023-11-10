import React ,{useContext}from 'react'
import Axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "../context/ContextProvider";

const Option = ({deletedData,get}) => {
  const {account,setAccount} = useContext(LoginContext);

  const removeData = async()=>{
    const res = await Axios.delete(`/remove/${deletedData}`,{withCredentials:true})
    if(res.status!==201 || !res.data){
      console.log("Error occured")
      toast.error("error occured",{
        position:"top-center"
      })
    }else{
      console.log(res.data)
      setAccount(res.data)
      get()
      toast.success("Deleted item successfully",{
        position:"top-center"
      })
    }
  }
  return (
    <div className='add_remove_select'>
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p style={{cursor:"pointer"}} onClick={removeData}>Delete</p><span>|</span>
      <ToastContainer/>
      <p className='forremovemedia'>Save Or later</p><span>|</span>
      <p className='forremovemedia'>See More or like this</p>
    </div>
  )
}

export default Option
