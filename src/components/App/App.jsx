import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import css from "./app.module.css";
import { Toaster } from 'react-hot-toast';
import PrivateRoute from '../PrivateRoute';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const TeachersPage = lazy(() => import('../../pages/TeachersPage/TeachersPage'));

const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFaundPage'));
const Layout = lazy(() => import('../Layout/Layout'));

export const App = () => {
  return (
    <>
      <Toaster />

      <Suspense fallback={<div className={css.loadingText}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/teachers" element={<TeachersPage />} />

            <Route path="/favorites" element={<PrivateRoute />} />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
