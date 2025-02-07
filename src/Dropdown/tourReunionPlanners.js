import React from "react";
import { Link } from 'react-router-dom';

export const Menuitems = () => {
  const MenuItems = [
    {
      title: "Cultural Festivals",
      path: "/cultural-festivals",
      cName: "dropdown-link",
    },
    {
      title: "KigaliUp",
      path: "/kigaliup",
      cName: "dropdown-link",
    },
    {
      title: "Music Concerts",
      path: "/music-concerts",
      cName: "dropdown-link",
    },
    {
      title: "Sports Events",
      path: "/sports-events",
      cName: "dropdown-link",
    },
    {
      title: "Food Festivals",
      path: "/food-festivals",
      cName: "dropdown-link",
    },
    {
      title: "Art Exhibitions",
      path: "/art-exhibitions",
      cName: "dropdown-link",
    },
    {
      title: "Theatre & Comedy",
      path: "/theatre-comedy",
      cName: "dropdown-link",
    },
    {
      title: "Networking Events",
      path: "/networking-events",
      cName: "dropdown-link",
    },
    {
      title: "Film Festivals",
      path: "/film-festivals",
      cName: "dropdown-link",
    }
  ];

  return (
    <div className="dropdown-menu">
      {MenuItems.map((item, index) => (
        <Link key={index} to={item.path} className={item.cName}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};