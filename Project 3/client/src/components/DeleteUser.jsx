import React from "react";
import Axios from 'axios'
function DeleteUser() {
  const submitToDelete = async (e)=>{
    e.preventDefault();
    alert("Profile deleted successfully")
    let a = document.querySelector('#id').value;
    console.log(a)
    const response = await Axios.delete(`api/deleteInfo/${a}`)
    console.log(response)
  }
  return (
    <div
      className="w-full h-screen bg-cover justify-center items-center flex flex-wrap"
      style={{
        backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20200804/pngtree-minimal-geometric-podium-scene-with-geometrical-forms-image_383579.jpg')`,
      }}
    >
      <form onSubmit={submitToDelete}>
        <div className=" bg-white rounded p-4">
          <label htmlFor="id">
            <h2 className="font-bold text-center mb-2">Remove Profile</h2>
          </label>
          <div>
            <input
              id="id"
              type="text"
              placeholder="Enter Your Id"
              className="outline-blue-300 text-center bg-gray-300 text-black rounded p-2"
              required
            />
          </div>
          <button type="submit" className="text-white bg-red-600 text-center w-full rounded-xl mt-2 p-1">
            Delete User
          </button>
        </div>
      </form>
    </div>
  );
}

export default DeleteUser;
