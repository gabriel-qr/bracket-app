import { bracketStore } from '../../../store/bracketStore';
import { connectionsStore } from '../../../store/connectionsStore';
import type { Team, WinnerSlot } from '../../../types/bracket';
import TeamSlot from '../TeamSlot/TeamSlot';
import styles from './MatchCard.module.css';

interface MatchCardProps {
  matchId: string;
  teamA: Team;
  teamB: Team;
  winner?: WinnerSlot | null;
  roundIndex: number;
  matchIndex: number;
}

export default function MatchCard({
  matchId,
  teamA,
  teamB,
  winner,
  roundIndex,
  matchIndex,
}: MatchCardProps) {
  const registerNode = connectionsStore((state) => state.registerNode);
  const status = bracketStore((state) => state.status);
  const renameTeam = bracketStore((state) => state.renameTeam);
  const undoWinner = bracketStore((state) => state.undoWinner);
  const setWinner = bracketStore((state) => state.setWinner);

  const isEditable = status === 'active' && roundIndex === 0;
  const isPlaying = status === 'playing';
  const hasWinner = winner !== null && winner !== undefined;
  const canUndo = roundIndex > 0 && !hasWinner;

  return (
    <div
      className={styles.container}
      ref={(el) => {
        registerNode(`in-${matchId}`, el);
        registerNode(`out-${matchId}`, el);
      }}
    >
      <TeamSlot
        name={teamA.name}
        isWinner={winner === 'teamA'}
        teamId='teamA'
        isEditable={isEditable}
        onNameChange={(name) =>
          renameTeam(roundIndex, matchIndex, 'teamA', name)
        }
        isPlaying={isPlaying}
        hasWinner={hasWinner}
        onSetWinner={() => setWinner(roundIndex, matchIndex, 'teamA')}
        onUndoWinner={
          canUndo && teamA.name.trim() !== ''
            ? () => undoWinner(roundIndex, matchIndex, 'teamA')
            : null
        }
      />

      <div className={styles.divider}></div>

      <TeamSlot
        name={teamB.name}
        isWinner={winner === 'teamB'}
        teamId='teamB'
        isEditable={isEditable}
        onNameChange={(name) =>
          renameTeam(roundIndex, matchIndex, 'teamB', name)
        }
        isPlaying={isPlaying}
        hasWinner={hasWinner}
        onSetWinner={() => setWinner(roundIndex, matchIndex, 'teamB')}
        onUndoWinner={
          canUndo && teamB.name.trim() !== ''
            ? () => undoWinner(roundIndex, matchIndex, 'teamB')
            : null
        }
      />
    </div>
  );
}
