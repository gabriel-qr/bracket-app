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
import ExportModal from './components/modals/ExportModal/ExportModal';
import ResetModal from './components/modals/ResetModal/ResetModal';

export default function App() {
  useTheme();

  const isModalOpen = uiStore((state) => state.isModalOpen);
  const rounds = bracketStore((state) => state.rounds);

  const [hydrated, setHydrated] = useState<boolean>(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState<boolean>(false);

  const handleOpenExportModal = () => setIsExportModalOpen(true);
  const handleCloseExportModal = () => setIsExportModalOpen(false);

  const handleOpenResetModal = () => setIsResetModalOpen(true);
  const handleCloseResetModal = () => setIsResetModalOpen(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <div className='container'>
      <Topbar
        handleOpenExportModal={handleOpenExportModal}
        handleOpenResetModal={handleOpenResetModal}
      />

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route
          path='bracket'
          element={rounds.length > 0 ? <BracketView /> : <Navigate to='/' />}
        />
      </Routes>

      {isModalOpen && <TournamentForm />}
      {isExportModalOpen && <ExportModal onClose={handleCloseExportModal} />}
      {isResetModalOpen && <ResetModal onClose={handleCloseResetModal} />}
    </div>
  );
}
