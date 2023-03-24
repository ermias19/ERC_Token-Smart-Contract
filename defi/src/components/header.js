import React, {Component} from 'react';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';



const Header=()=>{
    return (
       <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Defi X</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link "  href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">exchange</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tokens</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )


};
export default Header;