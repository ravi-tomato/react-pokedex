import './App.css'
import { AppRoutes } from './AppRoutes';
// import { Navbar } from './components/navbar';
import { ThemeProvider } from './contexts/themeContext';
import { MainLayout } from './layouts/MainLayout';

function App() {

  return (
    <ThemeProvider>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </ThemeProvider>
  )
}

export default App
