// In Restaurants.js
import React from "react";
import { Link } from "react-router-dom";

export const Restaurants = () => {
  const items = [
    {
      title: "Heaven Restaurant & Boutique Hotel",
      path: "/heaven",
      cName: "dropdown-link",
    },
    {
      title: "The Hut",
      path: "/the-hut",
      cName: "dropdown-link",
    },
    {
      title: "Bourbon Coffee",
      path: "/bourbon-coffee",
      cName: "dropdown-link",
    },
    {
      title: "La Bonne Adresse",
      path: "/la-bonne-adresse",
      cName: "dropdown-link",
    },
    {
      title: "Repub Lounge",
      path: "/repub-lounge",
      cName: "dropdown-link",
    },
    {
      title: "Brachetto Restaurant",
      path: "/brachetto",
      cName: "dropdown-link",
    },
    {
      title: "Khmer Restaurant",
      path: "/khmer",
      cName: "dropdown-link",
    },
    {
      title: "Soleluna",
      path: "/soleluna",
      cName: "dropdown-link",
    },
    {
      title: "Indian Kadhai Restaurant",
      path: "/indian-kadhai",
      cName: "dropdown-link",
    },
    {
      title: "The Pot Restaurant",
      path: "/the-pot",
      cName: "dropdown-link",
    }
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