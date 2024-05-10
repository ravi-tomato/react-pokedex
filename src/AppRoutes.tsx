import {
    BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";
import { Pokemon } from "./pages/pokemon";
import { Location } from "./pages/location";
import { Items } from "./pages/items";

export const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Pokemon />} />
          <Route path='/pokemon' element={<Pokemon />} />
          <Route path='/location' element={<Location />} />
          <Route path='/items' element={<Items />} />
        </Routes>
      </BrowserRouter>
    )
  }