import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faEraser } from "@fortawesome/free-solid-svg-icons";
import "./AddVideo.css";

const AddVideo = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleSave = () => {
    if (title && description && url && category && image) {
      const videoData = { title, description, url, category, image };
      onSave(videoData);
      setTitle("");
      setDescription("");
      setUrl("");
      setCategory("");
      setImage("");
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
    <div className="add-video">
      <h2>NUEVO VIDEO</h2>
      <p>Llene los datos para agregar un nuevo video</p>
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
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
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
    </div>
  );
};

export default AddVideo;
