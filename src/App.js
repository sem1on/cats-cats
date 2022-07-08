import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { fetchData, catsOption } from './api/fetchCats';

import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import FavoritCats from './pages/FavoritCats';

import './App.css';


function App() {

    const [cats, setCats ] = useState([]);
    const [page, setPage] = useState(10);
    const [isLoading, setIsLoadind] = useState(false);
    const [favorit, setFavorit] = useState(
        JSON.parse(localStorage.getItem('favorit')) || []
    );

    const catsData = async () => {
        setIsLoadind(true);
        const newCats  =  await fetchData(`https://api.thecatapi.com/v1/images/search?limit=15&page=9&order=Asc`, catsOption);
        setIsLoadind(false);
        setCats(newCats);
    };

    useEffect(() => {
        localStorage.setItem('favorit', JSON.stringify(favorit))
    }, [favorit]);

    useEffect(() => {
        catsData();
    }, []);

    const onDeletCat = (cat) => {
        setFavorit(favorit.filter(item => item.id !== cat.id))
    }

    const onAddToFavorite = (cat) => {
        setFavorit([...favorit, cat])
    }

    const onMoreCats = async () => {
        setPage(page + 1);
        setIsLoadind(true);
        const newCats  =  await fetchData(`https://api.thecatapi.com/v1/images/search?limit=15&page=${page}&order=Asc`, catsOption);
        setIsLoadind(false);
        setCats([...cats, ...newCats])
    }

    return (
        <div className="app">
            <Navbar/>
            <Routes>
                <Route path='/' element={<MainPage 
                    cats={cats}
                    page={page}
                    isLoading={isLoading}
                    favorit={favorit}
                    onMoreCats={onMoreCats}
                    onAddToFavorite={onAddToFavorite}
                    onDeletCat={onDeletCat}
                    />
                }/>
                <Route path='/favorit' element={<FavoritCats 
                    favorit={favorit}
                    onDeletCat={onDeletCat}/>
                }/>
            </Routes>
        </div>
    );
}

export default App;
