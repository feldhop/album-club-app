import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    console.log('albums');
    useEffect(() => {
        const getAlbums = async () => {
            const resp = await fetch('/api/albums');
            console.log('resp', resp);
            const albumsResp = await resp.json();
            console.log('albumsResp', albumsResp);
            setAlbums(albumsResp);
        };

        getAlbums();
    }, []);

    return (
        <div>
            <h1>Albums</h1>
            {albums.map(album => (
                <div key={album.id}>
                    <h2>
                        <Link to={`/album/${album.id}`}>{album.title}</Link>
                    </h2>
                </div>
            ))}
        </div>
    );
};

export default Albums;