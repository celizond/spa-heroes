import { Route, Routes } from 'react-router-dom';

import { DcPage, MarvelPage, SearchPage, HeroPage } from '../pages';
import { Navbar } from '../../NavBar';

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container'>

                <Routes>
                    <Route path='marvel' element={<MarvelPage />} />
                    <Route path='dc' element={<DcPage />} />

                    <Route path='search' element={<SearchPage />} />
                    <Route path='hero' element={<HeroPage />} />
                    
                    <Route path='*' element={<h1>404 Not Found</h1>} />
                </Routes>
            </div>
        </>
    )
}
