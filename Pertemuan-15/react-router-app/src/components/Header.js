import React from 'react';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
    return(
      <>
        <nav className="py-2 bg-light border-bottom">
          <div className="container d-flex flex-wrap">
            <ul className="nav me-auto">
              <li className="nav-item">
                <a href="/" className="nav-link link-dark px-2 active" aria-current="page">Home</a>
              </li>
              <li className="nav-item"><a href="/" className="nav-link link-dark px-2">About</a></li>
              <li className="nav-item"><a href="/" className="nav-link link-dark px-2">Todos</a></li>
            </ul>
            <ul className="nav">
              <li className="nav-item"><a href="/" className="nav-link link-dark px-2">Login</a></li>
              <li className="nav-item"><a href="/" className="nav-link link-dark px-2">Sign Up</a></li>
            </ul>
          </div>
        </nav>

        <header className="py-3 mb-4 border-bottom">
          <div className="container d-flex flex-wrap justify-content-center">
            <a href="/" className="d-flex align-item-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
              <span className="fs-4">My First React App</span>
            </a>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0">
              <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
            </form>
          </div>
        </header>
      </>
    )
}

export default Header;