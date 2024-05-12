import {
    BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";
import { Pokemon } from "./pages/pokemon";
import { Home } from "lucide-react";

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