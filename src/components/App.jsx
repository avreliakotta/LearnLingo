import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from "../components/PrivateRoute";

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
    <Route element={<PrivateRoute/>}>
          <Route path="/favorites" element={<FavoritesPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      </Suspense>
      
    </>
  );
};
