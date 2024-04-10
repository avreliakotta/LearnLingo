import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Toaster } from 'react-hot-toast';
// import HomePage from '../pages/HomePage/HomePage';
// import TeachersPage from '../pages/TeachersPage/TeachersPage';
// import FavoritesPage from '../pages/FavoritesPage/FavoritesPage';
// import NotFoundPage from '../pages/NotFoundPage/NotFaundPage';
// import Layout from '../components/Layout/Layout';
// import PrivateRoute from "../components/PrivateRoute";
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const TeachersPage = lazy(() => import('../pages/TeachersPage/TeachersPage'));
const FavoritesPage =lazy(()=> import('../pages/FavoritesPage/FavoritesPage'));
const NotFoundPage =lazy(()=> import('../pages/NotFoundPage/NotFaundPage'));
const Layout = lazy(()=> import('../components/Layout/Layout'));


export const App = () => {
  return (
    <>
      <Toaster />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />

          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      </Suspense>
    </>
  );
};
