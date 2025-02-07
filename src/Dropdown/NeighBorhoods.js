import React from "react";
import { Link } from "react-router-dom";

export const NeighBorhoods = () => {
  const items = [
    {
      title: "Nyamirambo",
      path: "/nyamirambo",
      cName: "dropdown-link",
    },
    {
      title: "Kimironko",
      path: "/kimironko",
      cName: "dropdown-link",
    },
    {
      title: "Nyarutarama",
      path: "/nyarutarama",
      cName: "dropdown-link",
    },
    {
      title: "Kigali City Centre",
      path: "/city-centre",
      cName: "dropdown-link",
    },
    {
      title: "Remera",
      path: "/remera",
      cName: "dropdown-link",
    },
    {
      title: "Kabuye",
      path: "/kabuye",
      cName: "dropdown-link",
    },
    {
      title: "Gikondo",
      path: "/gikondo",
      cName: "dropdown-link",
    },
    {
      title: "Kibagabaga",
      path: "/kibagabaga",
      cName: "dropdown-link",
    },
    {
      title: "Biryogo",
      path: "/biryogo",
      cName: "dropdown-link",
    },
    {
      title: "Kigali Heights",
      path: "/kigali-heights",
      cName: "dropdown-link",
    },
  ];

  return (
    <div className="dropdown-menu">
      {items.map((item, index) => (
        <Link key={index} to={item.path} className={item.cName}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};