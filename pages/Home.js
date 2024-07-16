import React from "react";
import Card from "../components/Card";
import "./Home.css";

const Home = ({ videos, onEdit, onDelete }) => {
  const categories = ["Front End", "Back End", "Innovación y Gestión"];

  return (
    <div className="home">
      {categories.map((category) => (
        <div key={category}>
          <h2 className="category-title">{category}</h2>
          <div className="category-cards">
            {videos
              .filter((video) => video.category === category)
              .map((video) => (
                <Card
                  key={video.id}
                  video={video}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
