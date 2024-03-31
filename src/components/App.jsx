import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import TeachersPage from '../pages/TeachersPage/TeachersPage';
import FavoritesPage from '../pages/FavoritesPage/FavoritesPage';
import NotFoundPage from '../pages/NotFoundPage/NotFaundPage';
import Layout from '../components/Layout/Layout';
// import PrivateRoute from "../components/PrivateRoute";
import { Toaster } from 'react-hot-toast';
export const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />

          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
