import Landing from './components/pages/Landing/Landing';
import { useTheme } from './hooks/useTheme';

export default function App() {
  useTheme();

  return (
    <div>
      <Landing />
    </div>
  );
}
