import React, { useState } from "react";
import FirstCar from "../assets/Car-1.png";
// import { lists } from "./list";

const Map = () => {
  const [showList, setShowList] = useState(false);
  const lists = [
    {
      id: 1,
      title: "tarzan",
      img: FirstCar,
    },
    {
      id: 2,
      title: "matrix",
    },
    {
      id: 3,
      title: "michael",
    },
    {
      id: 4,
      title: "emmanuel",
    },
  ];

  const handleClick = () => {
    setShowList(!showList);
  };

  return (
    <div>
      {showList
        ? lists.map((list, idx) => {
            return (
              <div key={idx}>
                <p>{list.id}</p>
                <p>{list.title}</p>
                <figure>
                  <img src={list.img} />
                </figure>
              </div>
            );
          })
        : null}
      <button onClick={handleClick} style={{ cursor: "pointer" }}>
        Show List
      </button>
    </div>
  );
};

export default Map;
