import React from 'react';

const FavoriteCat = ({ cat, onDeletCat }) => {
    return (
     
        <div className='cats-item' >
            <img src={cat?.url} alt="cat" />
                <div className='hearts-like'  onClick={onDeletCat}>
                    <div className='heart-like'>
                        <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 36.7L17.1 34.06C6.8 24.72 0 18.56 0 11C0 4.84 4.84 0 11 0C14.48 0 17.82 1.62 20 4.18C22.18 1.62 25.52 0 29 0C35.16 0 40 4.84 40 11C40 18.56 33.2 24.72 22.9 34.08L20 36.7Z" fill="#FF3A00"/>
                        </svg>
                    </div>
                </div>
        </div>
    
    );
};

export default FavoriteCat;