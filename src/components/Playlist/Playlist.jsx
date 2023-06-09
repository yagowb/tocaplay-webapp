import React from 'react';
import Footer from '../home/Footer';
import PlaylistPage from '../Playlist/PlaylistPage';

function Playlist() {
    return (
        <>
        <div className='cadastro-container'>
            <div>
                <PlaylistPage/>
            </div>
            <div className="cadastro-footer">
                <Footer/>
            </div>
        </div>
        </>
    );
}

export default Playlist;