import { create } from 'zustand';
import type { Round } from '../types/bracket';

const nodeMap = new Map<string, HTMLElement>();

interface LineConnection {
  id: string;
  pathString: string;
  isWinner: boolean;
}

interface ConnectionsStoreState {
  lines: LineConnection[];

  registerNode: (nodeId: string, element: HTMLElement | null) => void;

  calculateConnections: (
    parentRect: DOMRect,
    rounds: Round[],
    champion?: string,
  ) => void;
}

export const connectionsStore = create<ConnectionsStoreState>((set, get) => ({
  lines: [],

  registerNode: (nodeId, element) => {
    if (element) {
      nodeMap.set(nodeId, element);
    } else {
      nodeMap.delete(nodeId);
    }
  },

  calculateConnections: (parentRect, rounds, champion) => {
    const newLines: LineConnection[] = [];

    for (let i = 0; i < rounds.length; i++) {
      const currentRound = rounds[i];

      currentRound.forEach((match, j) => {
        const nextMatchIndex = Math.floor(j / 2);
        const nextMatchId = `r${i + 1}-m${nextMatchIndex}`;

        const originNode = nodeMap.get(`out-${match.id}`);
        const destNode = nodeMap.get(`in-${nextMatchId}`);

        if (originNode && destNode) {
          const originRect = originNode.getBoundingClientRect();
          const destRect = destNode.getBoundingClientRect();

          // CALCULATE EXACT MIDPOINT OF THE ORIGIN RECTANGLE
          const x1 = originRect.right - parentRect.left;
          const y1 = originRect.top - parentRect.top + originRect.height / 2;

          // CALCULATE EXACT MIDPOINT OF THE DESTINATION RECTANGLE
          const x2 = destRect.left - parentRect.left;
          const y2 = destRect.top - parentRect.top + destRect.height / 2;

          const midX = x1 + (x2 - x1) / 2;

          const pathString = `M ${x1} ${y1} L ${midX} ${y1} L ${midX} ${y2} L ${x2} ${y2}`;

          const isWinner = champion
            ? (match.winner === 'teamA'
                ? match.teamA.name
                : match.teamB.name) === champion
            : false;

          newLines.push({
            id: `line-${match.id}-to-${nextMatchId}`,
            pathString,
            isWinner,
          });
        }
      });
    }

    set({ lines: newLines });
  },
}));
