import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate()
  //get user from local storage
  const user = JSON.parse(localStorage.getItem("user"))
  console.log(user)

  //logout function
  const logout=() =>{
    localStorage.clear()
    navigate("/login")
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <Link to={'/'} class="navbar-brand me-2">
            <h3 className="text-danger fw-bold">
              Online-
              <span className="text-black">Bazzar</span>
            </h3>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarButtonsExample">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Dashboard
                </a>
              </li>
            </ul>

            <div class="d-flex align-items-center">
              {
                user ? (
                  <div class="dropdown">
                    <button
                      class="btn btn-primary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {user.fname}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      {
                        user.isAdmin ? (
                          <li><Link to={'/profile'} class="dropdown-item" href="#">Admin Dashboard</Link></li>
                        ): <li><Link to={'/profile'} class="dropdown-item" href="#">Profile</Link></li>
                      }
                      <li><a class="dropdown-item" onClick={logout}>Logout</a></li>
                    </ul>
                  </div>
                ) : (
                  <Link to={"/register"}>
                    <button type="button" class="btn btn-primary px-3 me-2">
                      Register
                    </button>
                  </Link>
                )
              }



            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

