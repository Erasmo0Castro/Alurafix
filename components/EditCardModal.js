import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faEraser } from "@fortawesome/free-solid-svg-icons";
import "./EditCardModal.css";

const EditCardModal = ({ video, onClose, onEdit }) => {
  const [title, setTitle] = useState(video.title);
  const [description, setDescription] = useState(video.description);
  const [url, setUrl] = useState(video.url);
  const [category, setCategory] = useState(video.category);
  const [image, setImage] = useState(video.image);

  const handleSave = () => {
    if (title && description && url && category && image) {
      const updatedVideo = {
        ...video,
        title,
        description,
        url,
        category,
        image,
      };
      onEdit(updatedVideo);
      onClose();
    } else {
      alert("Todos los campos son obligatorios.");
    }
  };

  const handleClear = () => {
    setTitle("");
    setDescription("");
    setUrl("");
    setCategory("");
    setImage("");
  };

  return (
    <div className="modal-backdrop">
      <div className="edit-card-modal">
        <h2>Editar Video</h2>
        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            placeholder="Ingrese el título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Categoría</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Seleccione una categoría</option>
            <option value="Front End">Front End</option>
            <option value="Back End">Back End</option>
            <option value="Innovación y Gestión">Innovación y Gestión</option>
          </select>
        </div>
        <div className="form-group">
          <label>Imagen (URL)</label>
          <input
            type="text"
            placeholder="Ingrese la URL de la imagen"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Video</label>
          <input
            type="text"
            placeholder="Ingrese el enlace del video"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Descripción</label>
          <textarea
            placeholder="¿De qué se trata este video?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="buttons">
          <button onClick={handleSave}>
            <FontAwesomeIcon icon={faSave} /> Guardar
          </button>
          <button onClick={handleClear}>
            <FontAwesomeIcon icon={faEraser} /> Borrar
          </button>
        </div>
        <button className="close-button" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default EditCardModal;
