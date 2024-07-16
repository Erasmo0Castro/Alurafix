import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import EditCardModal from "./EditCardModal";
import "./Card.css";

const Card = ({ video, onEdit, onDelete }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
  };

  const handleDelete = () => {
    onDelete(video.id);
  };

  return (
    <div className="card">
      <img src={video.image} alt={video.title} className="card-image" />
      {/* Se eliminaron los elementos de título y descripción */}
      <div className="card-buttons">
        <button onClick={handleEdit}>
          <FontAwesomeIcon icon={faEdit} /> Editar
        </button>
        <button onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} /> Borrar
        </button>
      </div>
      {isEditModalOpen && (
        <EditCardModal
          video={video}
          onClose={handleCloseModal}
          onEdit={onEdit}
        />
      )}
    </div>
  );
};

export default Card;
