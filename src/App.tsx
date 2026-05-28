import { Navigate, Routes } from 'react-router';
import TournamentForm from './components/ui/TournamentForm/TournamentForm';
import { useTheme } from './hooks/useTheme';
import Landing from './pages/Landing/Landing';
import { uiStore } from './store/uiStore';
import { Route } from 'react-router';
import { bracketStore } from './store/bracketStore';
import BracketView from './pages/BracketView/BracketView';
import { useEffect, useState } from 'react';
import Topbar from './components/ui/Topbar/Topbar';
import './app.css';

export default function App() {
  useTheme();

  const isModalOpen = uiStore((state) => state.isModalOpen);
  const rounds = bracketStore((state) => state.rounds);

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <div className='container'>
      <Topbar />

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route
          path='bracket'
          element={rounds.length > 0 ? <BracketView /> : <Navigate to='/' />}
        />
      </Routes>

      {isModalOpen && <TournamentForm />}
    </div>
  );
}
