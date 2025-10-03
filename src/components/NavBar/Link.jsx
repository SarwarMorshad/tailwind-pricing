import React from "react";

const Link = ({ route }) => {
  return (
    <li>
      <a href={route.url} className="mr-10">
        {route.name}
      </a>
    </li>
  );
};

export default Link;
