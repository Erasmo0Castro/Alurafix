import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddVideo from "./pages/AddVideo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles.css";

const App = () => {
  const [videos, setVideos] = useState([]);

  const handleSaveVideo = (video) => {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  };

  const handleUpdateVideo = (updatedVideo) => {
    setVideos(
      videos.map((video) =>
        video.id === updatedVideo.id ? updatedVideo : video
      )
    );
  };

  const handleDeleteVideo = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  videos={videos}
                  onEdit={handleUpdateVideo}
                  onDelete={handleDeleteVideo}
                />
              }
            />
            <Route
              path="/add-video"
              element={<AddVideo onSave={handleSaveVideo} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
