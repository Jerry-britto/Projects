import React from "react";
import Axios from "axios";
function ShowData() {
  const display = async () => {
    const val = document.querySelector('#val').value
    const res = await Axios.get(`/api/showInfo/${val}`);
    const result = res.data
    let id = document.querySelector('#id')
    let name = document.querySelector('#name')
    let pass = document.querySelector('#pass')

    id.classList.add("border-2")
    name.classList.add("border-2")
    pass.classList.add("border-2")

    id.textContent = `${result.id}`
    name.textContent = `${result.name}`
    pass.textContent = `${result.password}`
  };
  return (
    <div
      style={{
        backgroundImage: `url('https://png.pngtree.com/background/20211215/original/pngtree-modern-simple-elegant-dark-blue-landing-page-website-background-picture-image_1454711.jpg')`,
      }}
      className="w-full h-screen bg-cover flex justify-center items-center"
    >
      <div className="bg-white rounded p-5">
        <input
          type="text"
          name=""
          id="val"
          className="bg-gray-200 rounded text-black text-center border-black  "
        />
        <button
          onClick={display}
          className="bg-green-500 text-black text-center mx-10 p-2 rounded-lg my-1 font-bold"
        >
          Search Profile
        </button>
        <table>
          <thead>
            <tr>
              <th className="border-2 border-black p-1">Id</th>
              <th className="border-2 border-black p-1">Name</th>
              <th className="border-2 border-black p-1">Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="id" className="border-black p-1"></td>
              <td id="name" className="border-black p-1"></td>
              <td id="pass" className="border-black p-1"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowData;
