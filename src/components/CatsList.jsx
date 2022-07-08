import React from 'react';

import CatsItem from './CatsItem';
import Loader from '../components/Loader';


const CatsList = ({ cats, onMoreCats, page, isLoading, favorit, onAddToFavorite, onDeletCat }) => {

    return (
        <div className='cats-container'>
            <div className='cats-list'>
                {cats?.map((cat, i) => 
                    <CatsItem 
                        cat={cat} key={i}
                        favorit={favorit}
                        onDeletCat={() => onDeletCat(cat)} 
                        onAddToFavorite={() => onAddToFavorite(cat)}/>
                )}
                {isLoading &&
                    <div style={{display: 'flex', justifyContent:'center', marginTop: '10px'}}><Loader/></div>
                }
            </div>
            {page >= 20
                ? <h5 className='end-cats'>Котики кончились =(</h5>
                : <button onClick={onMoreCats} className='catslist-btn'>Показать еще котиков</button>
            }
        </div>
    );
};

export default CatsList;