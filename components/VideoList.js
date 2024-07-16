import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./VideoList.css";

const VideoList = ({ videos, onEdit, onDelete }) => {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <div className="video-card" key={video.id}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <div className="video-actions">
            <button onClick={() => onEdit(video.id)}>
              <FontAwesomeIcon icon={faEdit} /> Editar
            </button>
            <button onClick={() => onDelete(video.id)}>
              <FontAwesomeIcon icon={faTrash} /> Borrar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
