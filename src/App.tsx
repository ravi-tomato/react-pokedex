import './App.css'
import { Navbar } from './components/navbar'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Router } from 'react-router-dom';
import { Pokemon } from './pages/pokemon';
import { Location } from './pages/location';
import { Items } from './pages/items';
import { AppRoutes } from './AppRoutes';

function App() {

  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  )
}

export default App
