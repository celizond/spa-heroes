import { Route, Routes } from 'react-router-dom';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { LoginPage } from '../auth/pages/LoginPage';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>}
                />
                <Route path='/*' element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>}
                />
            </Routes>
        </>
    )
}
