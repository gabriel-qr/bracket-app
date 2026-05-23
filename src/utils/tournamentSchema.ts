import { z } from 'zod';

export const tournamentSchema = z
  .object({
    name: z.string().min(1, 'Nome do torneio é obrigatório'),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    teamCount: z.number().min(2).max(64),
  })
  .refine(
    (data) => {
      if (data.startDate && data.endDate) {
        return new Date(data.endDate) > new Date(data.startDate);
      }
      return true;
    },
    {
      message: 'Data de término deve ser após o início',
      path: ['endDate'],
    },
  );

export type TournamentFormData = z.infer<typeof tournamentSchema>;
