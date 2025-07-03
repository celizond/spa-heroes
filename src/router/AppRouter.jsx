import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';

import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';

export const AppRouter = () => {
    return (
        <>
                <Routes>
                    <Route path='login' element={<LoginPage />} />
                    <Route path='/*' element={<HeroesRoutes />} />
                    
                    <Route path='/' element={<Navigate to='/login' />} />
                </Routes>
        </>
    )
}
