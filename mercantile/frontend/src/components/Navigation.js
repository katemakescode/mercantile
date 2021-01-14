import React from "react";

function MenuItem({url, text}) {
  return (<>
    <li className="navbar-item" >
      <a href={url} className="nav-link" >{text}</a >
    </li >
  </ >);
}

function CustomerMenuItems() {
  return (<>
    <MenuItem url="#classics-root" text="Wishlist" />
    <MenuItem url="#classics-root" text="Account" />
  </ >);
}

function GuestMenuItems() {
  return (<>
    <MenuItem url="#classics-root" text="Sign Up" />
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
      <span className="navbar-toggler-icon" />
    </button >
    <div id="navbar-menu" className="collapse navbar-collapse" >
      <ul className="navbar-nav ml-auto" >
        <MenuItems isLoggedIn />
        <MenuItem url="#warning-root" text="Cart" />
      </ul >
    </div >
  </ >);
}

export default Navigation;
