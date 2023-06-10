import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import instance from '../axiosConfig';

function Carrosel() {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    instance.get('/playlists')
      .then(res => {
        setPlaylists(res.data);
        setWidth(carouselRef.current?.scrollWidth - carouselRef.current?.offsetWidth);
      });
  }, []);

  return (
    <div className="carousel-content">
      <motion.div ref={carouselRef} className="carousel" whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {playlists.map(playlist => (
            <motion.div className="item" key={playlist._id}>
              <img src={playlist.capa} alt="Playlist cover" />
              <Link to={`/playlist/${playlist._id}`}>
                <button className="playlist-button">Acessar Playlist</button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Carrosel;
