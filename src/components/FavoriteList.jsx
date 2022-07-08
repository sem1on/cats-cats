import React from 'react';

import FavoriteCat from './FavoriteCat';


const FavoriteList = ({ favorit, onDeletCat }) => {

    return (
        <div className='cats-container'>
            {favorit.length
                ?
                <div className='cats-list'>
                    {favorit?.map((cat, i) => 
                        <FavoriteCat 
                            cat={cat} 
                            key={i}  
                            onDeletCat={() => onDeletCat(cat)}/>
                    )} 
                </div>
                : <h5 className='end-cats'>Еще нет любимых котиков</h5>
            }
            
        </div>
    );
};

export default FavoriteList;