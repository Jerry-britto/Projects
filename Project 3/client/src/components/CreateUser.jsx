import React from "react";
import Axios from 'axios'
function CreateUser() {
  const uploadData = async(e)=>{
    e.preventDefault();
    alert("Created Profile Successfully")
    const _id = document.querySelector('#id').value
    const _name = document.querySelector('#Name').value
    const _password = document.querySelector('#pass').value
    const response = Axios.post('/api/create',{
      name:_name,
      password:_password,
      id:_id
    })
    console.log(response)
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap flex-col items-center justify-center bg-cover"
      style={{
        backgroundImage: `url('https://coolbackgrounds.io/images/backgrounds/index/ranger-4df6c1b6.png')`,
      }}
    >
      <div 
      className="flex flex-col items-center">
        <div className="flex flex-wrap flex-col bg-white rounded-xl px-5 py-2">
            <h2 className="text-center mb-2 mt-0 font-bold">Registration Form</h2>
          <form
           method="post"
           onSubmit={uploadData}
           >
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
                required
              />
            </div>
            <div className="flex justify-between mt-4">
              <label className="mx-2" htmlFor="id">
                ID
              </label>
              <input
                className="bg-slate-200 rounded-lg outline-blue-400 text-center w-auto"
                type="text"
                id="id"
                required
              />
            </div>
            <div className="cursor-pointer bg-black flex flex-wrap rounded-lg my-4 mb-0 justify-center h-9 text-red-500 text-xl">
              <input type="submit" onClick={uploadData} value={"Submit data"} id="btn"/>
            </div>
            <div className="cursor-pointer bg-black flex flex-wrap rounded-lg my-4 mb-0 justify-center h-9 text-red-500 text-xl">
              <input type="reset"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
