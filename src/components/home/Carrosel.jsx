import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import instance from '../axiosConfig';

function Carrosel() {
  const carrosel = useRef();
  const [width, setWidth] = useState(0);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    instance.get('/playlists')
      .then(res => {
        setPlaylists(res.data);
        setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
      });
  }, []);

  return (
    <div className="carrosel-content">
      <motion.div ref={carrosel} className="carrosel" whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {playlists.map(image => (
            <motion.div className="item" key={image}>
              <img src={image.capa} alt="texto alt" />
              <Link to={`/playlist/${image._id}`}>
                <button className="botao-playlist">Acessar Playlist</button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Carrosel;
