import React from "react";
import { Link } from "react-router-dom";

export default function Icon({ label, icon, path }) {
  return (
    <Link className='icon_wrapper' to={path}>
      <div className='icon' style={{ backgroundImage: `url(${icon})` }}></div>

      <div className='icon_label'>
        <div> {label} </div>
      </div>
    </Link>
  );
}
