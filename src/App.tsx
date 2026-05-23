import Landing from './components/pages/Landing/Landing';
import TournamentForm from './components/ui/TournamentForm/TournamentForm';
import { useTheme } from './hooks/useTheme';
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
