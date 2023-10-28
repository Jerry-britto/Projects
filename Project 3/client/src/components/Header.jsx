import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <div className="bg-orange-200 flex justify-around p-2">
          <Link className="hover:text-red-500" to="/search">
            Search Profile
          </Link>
          <Link className="hover:text-red-500" to="/display">
            Display Data
          </Link>
          <Link className="hover:text-red-500" to="create">
            Create User
          </Link>
          <Link className="hover:text-red-500" to="/update">
            Update User
          </Link>
          <Link className="hover:text-red-500" to="/delete">
            Delete User
          </Link>
      </div>
    </div>
  );
}

export default Header;
