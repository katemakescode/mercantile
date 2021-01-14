import React from "react";

function CustomerMenuItems() {
  return (<>
    <li className="navbar-item" >
      <a href="#classics-root" className="nav-link" >Wishlist</a >
    </li >
    <li className="navbar-item" >
      <a href="#classics-root" className="nav-link" >Account</a >
    </li >
  </ >);
}

function GuestMenuItems() {
  return (<>
    <li className="navbar-item" >
      <a href="#classics-root" className="nav-link" >Sign Up</a >
    </li >
  </ >);
}

function MenuItems({isLoggedIn}) {
  return isLoggedIn ? <CustomerMenuItems /> : <GuestMenuItems />;
}


function Navigation({url}) {
  return (<>
    <a href={url} className="navbar-brand" >
      Mercantile
    </a >
    <button className="navbar-toggler" data-toggle="collapse"
            data-target="#navbar-menu" >
      <span className="navbar-toggler-icon" ></span >
    </button >
    <div id="navbar-menu" className="collapse navbar-collapse" >
      <ul className="navbar-nav ml-auto" >
        <MenuItems isLoggedIn />
        <li className="navbar-item" >
          <a href="#warning-root" className="nav-link" >Cart</a >
        </li >
      </ul >
    </div >
  </ >);
}

export default Navigation;
