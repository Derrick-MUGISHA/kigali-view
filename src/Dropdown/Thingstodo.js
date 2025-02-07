import React from "react";
import { Link } from "react-router-dom";
import "./Thingstodo.css";

export const Thingstodo = () => {
  const items = [
    {
      title: "Visit the Kigali Genocide Memorial",
      path: "/",
      cName: "dropdown-link",
    },
    {
      title: "Explore Nyamirambo Neighborhood",
      path: "/about",
      cName: "dropdown-link",
    },
    {
      title: "Tour the Inema Arts Center",
      path: "/contact",
      cName: "dropdown-link",
    },
    {
      title: "Hike Mount Kigali",
      path: "/blog",
      cName: "dropdown-link",
    },
    {
      title: "Visit the Kimironko Market",
      path: "/login",
      cName: "dropdown-link",
    },
    {
      title: "Relax at Lake Kivu (day trip)",
      path: "/signup",
      cName: "dropdown-link",
    },
    {
      title: "See the Kandt House Museum",
      path: "/museum",
      cName: "dropdown-link",
    },
    {
      title: "Enjoy local food at Heaven Restaurant",
      path: "/restaurant",
      cName: "dropdown-link",
    },
    {
      title: "Shop at Caplaki Craft Village",
      path: "/shopping",
      cName: "dropdown-link",
    },
    {
      title: "Visit the Rwanda Art Museum",
      path: "/art-museum",
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