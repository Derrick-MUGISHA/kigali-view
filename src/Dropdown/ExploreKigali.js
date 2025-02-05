import React from "react";
import { Link } from "react-router-dom";

export const ExploreKigali = () => {
  const items = [
    {
      title: "The Rwanda Art Museum",
      path: "/heaven",
      cName: "dropdown-link",
    },
    {
      title: "The Kandt House Museum of Natural History",
      path: "/bourbon-coffee",
      cName: "dropdown-link",
    },
    {
      title: "Waka Waka Café",
      path: "/la-bonne-adresse",
      cName: "dropdown-link",
    },
    {
      title: "Sabyinyo Silverback Lodge",
      path: "/repub-lounge",
      cName: "dropdown-link",
    },
    {
      title: "Norr Hotel",
      path: "/brachetto",
      cName: "dropdown-link",
    },
    {
      title: "Ubumwe Grande Hotel",
      path: "/khmer",
      cName: "dropdown-link",
    },
    {
      title: "Gisozi Hill",
      path: "/soleluna",
      cName: "dropdown-link",
    },
    {
      title: "Art World Gallery",
      path: "/indian-kadhai",
      cName: "dropdown-link",
    },
    {
      title: "The Rwanda Cultural Village",
      path: "/japonais",
      cName: "dropdown-link",
    },
    {
      title: "The New Remera Park",
      path: "/the-hut",
      cName: "dropdown-link",
    },
  ];

  // Remove duplicates based on the 'title' and 'path' fields
  const uniqueItems = Array.from(
    new Map(items.map((item) => [`${item.title}-${item.path}`, item])).values()
  );

  return (
    <div className="dropdown-menu">
      {uniqueItems.map((item, index) => (
        <Link key={index} to={item.path} className={item.cName}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};
