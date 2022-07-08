import React from 'react';

import CatsList from '../components/CatsList';


const MainPage = ({ cats, onMoreCats, page, isLoading, favorit, onAddToFavorite, onDeletCat }) => {
    return (
        <div className='main-page'>
            <CatsList 
                cats={cats} 
                onMoreCats={onMoreCats} 
                page={page}
                isLoading={isLoading}
                onAddToFavorite={onAddToFavorite}
                onDeletCat={onDeletCat}
                favorit={favorit}/>
        </div>
    );
};

export default MainPage;