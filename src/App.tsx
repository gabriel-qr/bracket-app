import TournamentForm from './components/ui/TournamentForm/TournamentForm';
import { useTheme } from './hooks/useTheme';
import Landing from './pages/Landing/Landing';
import { uiStore } from './store/uiStore';

export default function App() {
  useTheme();

  const isModalOpen = uiStore((state) => state.isModalOpen);

  return (
    <div>
      <Landing />

      {isModalOpen && <TournamentForm />}
    </div>
  );
}
