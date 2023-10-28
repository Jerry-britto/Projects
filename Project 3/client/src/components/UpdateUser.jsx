import React from 'react'
import Axios from 'axios'
function UpdateUser() {
  const updateData = async(e)=>{
    e.preventDefault()
    alert("Profile Update successfully")
   const id = document.querySelector('#id').value
   const _name = document.querySelector('#Name').value
   const _password = document.querySelector('#pass').value
    let data = {}
   if(!(_name) && !(_password)){
    alert("Kindlly fill in the input field which needs to be updated") 
    return
   } 
   if(_name && !_password){
    data.name = _name
  }
  else if(_password && !_name){
    data.password = _password
  } 
  else{
    data.name = _name
    data.password = _password
  }

    await Axios.put(`/api/updateInfo/${id}`,data)
  }
  return (
    <div 
    className='w-full h-screen bg-cover flex flex-wrap justify-center items-center'
    style={{
        backgroundImage:`url('https://png.pngtree.com/thumb_back/fh260/background/20200801/pngtree-purple-abstract-background-fluid-gradient-with-wave-forms-image_375467.jpg')`
    }}
    >
      <form>
        <div className='bg-white rounded-2xl flex flex-wrap flex-col py-2 px-5'>
            <h3 className='font-bold text-center mt-0 mb-2'>Update Profile</h3>
            <div className="flex justify-between">
              <label className="mx-2" htmlFor="Name" >
                Name
              </label>
              <input
                className="bg-slate-200 rounded-lg outline-blue-400 text-center w-auto"
                type="text"
                id="Name"
                required
              />
            </div>
            <div className="flex justify-between mt-4">
              <label className="mx-2" htmlFor="pass">
                Password
              </label>
              <input
                className="bg-slate-200 rounded-lg outline-blue-400 text-center w-auto"
                type="password"
                id="pass"
              />
            </div>
            <div className="flex justify-between mt-4">
              <label className="mx-2" htmlFor="id">
                ID
              </label>
              <input
                className="bg-slate-200 rounded-lg outline-blue-400 text-center w-auto"
                type="text"
                required={true}
                id="id"
              />
            </div>
            <div className="cursor-pointer bg-black flex flex-wrap rounded-lg my-4 mb-0 justify-center h-9 text-red-500 text-xl">
              <button type='submit' onClick={updateData}>Update Data</button>
            </div>
            <div className="cursor-pointer bg-black flex flex-wrap rounded-lg my-4 mb-0 justify-center h-9 text-red-500 text-xl">
              <button type='reset'>Reset Form</button>
            </div>
        </div>
        </form>
    </div>
  )
}

export default UpdateUser
