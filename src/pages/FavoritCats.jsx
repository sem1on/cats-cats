import React from 'react';

import FavoriteList from '../components/FavoriteList';


const FavoritCats = ({ favorit, onDeletCat }) => {
    return (
        <div className='main-page'>
            <FavoriteList 
                favorit={favorit}
                onDeletCat={onDeletCat}/>
        </div>
    );
};

export default FavoritCats;