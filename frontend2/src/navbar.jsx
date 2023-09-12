import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const Navy=()=>{
    return(
        <Fragment>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <Link  to="/">  <a class="navbar-brand" href="#">Home</a>
      </Link>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
    <Link to='/F'> <a class="nav-link active" aria-current="page" href="#">YOUR VIDEOS</a></Link>     
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <Link to="/s"> <button class="btn btn-outline-success" type="submit">Signup</button></Link>   
    <Link to="/login"> <button class="btn btn-outline-success" type="submit">login</button></Link>   
      </form>
    </div>
  </div>
</nav>
        </Fragment>
    )
}