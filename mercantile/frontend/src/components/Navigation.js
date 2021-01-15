import React, {useState} from "react";

function MenuItem({url, text, onSelect = f => f}) {
  return (<>
    <li className="navbar-item" >
      <a href={url} className="nav-link" onClick={onSelect}>{text}</a >
    </li >
  </ >);
}

function CustomerMenuItems({onSelect}) {
  return (<>
    <MenuItem url="#classics" text="Wishlist" />
    <MenuItem text="Account" onSelect={onSelect} />
  </ >);
}

function GuestMenuItems({onSelect}) {
  return (<>
    <MenuItem text="Sign Up" onSelect={onSelect}/>
  </ >);
}

function MenuItems() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <CustomerMenuItems onSelect={() => setIsLoggedIn(false)} />;
  } else {
    return <GuestMenuItems onSelect={() => setIsLoggedIn(true)}/>;
  }
}

export default function Navigation({url}) {
  return (<>
    <a href={url} className="navbar-brand" >
      Mercantile
    </a >
    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-menu" >
      <span className="navbar-toggler-icon" />
    </button >
    <div id="navbar-menu" className="collapse navbar-collapse" >
      <ul className="navbar-nav ml-auto" >
        <MenuItems />
        <MenuItem url="#warning" text="Cart" />
      </ul >
    </div >
  </ >);
}
