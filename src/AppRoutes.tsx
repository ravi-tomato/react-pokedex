import {
    BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";
import { Pokemon } from "./pages/pokemon";
import { Home } from "./pages/home";

export const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemon' element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    )
  }