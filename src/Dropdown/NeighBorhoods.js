import React from "react";
import { Link } from "react-router-dom";

export const NeighBorhoods = () => {
  const items = [
    {
      title: "Kigali Serena Hotel",
      path: "/heaven",
      cName: "dropdown-link",
    },
    {
      title: "Radisson Blu Hotel & Convention Centre",
      path: "/the-hut",
      cName: "dropdown-link",
    },
    {
      title: "The Retreat by Heaven ",
      path: "/bourbon-coffee",
      cName: "dropdown-link",
    },
    {
      title: "Hotel des Mille Collines",
      path: "/la-bonne-adresse",
      cName: "dropdown-link",
    },
    {
      title: "Gorillas Golf Hotel",
      path: "/repub-lounge",
      cName: "dropdown-link",
    },
    {
      title: "Park Inn by Radisson Kigali",
      path: "/brachetto",
      cName: "dropdown-link",
    },
    {
      title: "Hôtel La Palisse Nyandungu",
      path: "/khmer",
      cName: "dropdown-link",
    },
    {
      title: "Iris Guest House",
      path: "/soleluna",
      cName: "dropdown-link",
    },
    {
      title: "M Hotel Kigali",
      path: "/indian-kadhai",
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