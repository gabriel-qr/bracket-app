import { useState } from 'react';
import {
  tournamentSchema,
  type TournamentFormData,
} from '../../../utils/tournamentSchema';
import styles from './TournamentForm.module.css';
import { uiStore } from '../../../store/uiStore';
import { bracketStore } from '../../../store/bracketStore';
import z from 'zod';
import { Minus, Plus, X } from 'lucide-react';
import clsx from 'clsx';
import { useNavigate } from 'react-router';

const QUICK_SELECT_OPTIONS = [4, 8, 16, 32];
const MIN_TEAMS = 2;
const MAX_TEAMS = 32;

export default function TournamentForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<TournamentFormData>({
    name: '',
    startDate: '',
    endDate: '',
    teamCount: 8,
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof TournamentFormData, string>>
  >({});

  const handleDecrement = () => {
    if (formData.teamCount > MIN_TEAMS) {
      setFormData((prev) => ({ ...prev, teamCount: prev.teamCount - 1 }));
    }
  };

  const handleIncrement = () => {
    if (formData.teamCount < MAX_TEAMS) {
      setFormData((prev) => ({ ...prev, teamCount: prev.teamCount + 1 }));
    }
  };

  const handleQuickSelect = (value: number) => {
    setFormData({ ...formData, teamCount: value });
  };

  const setIsModalOpen = uiStore((state) => state.setIsModalOpen);
  const generateBracket = bracketStore((state) => state.generateBracket);
  const setTournament = bracketStore((state) => state.setTournament);
  const onClose = () => setIsModalOpen(false);

  const handleSubmit = () => {
    const result = tournamentSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = z.treeifyError(result.error).properties;
      setErrors({
        name: fieldErrors?.name?.errors[0],
        startDate: fieldErrors?.startDate?.errors[0],
        endDate: fieldErrors?.endDate?.errors[0],
      });

      return;
    }

    setTournament({
      name: result.data.name,
      startDate: result.data.startDate,
      endDate: result.data.endDate,
    });
    generateBracket(result.data.teamCount);
    onClose();
    navigate('/bracket');
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>Novo Torneio</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputContainer}>
            <label htmlFor='name'>Nome do torneio</label>
            <input
              autoFocus
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name)
                  setErrors((prev) => ({ ...prev, name: undefined }));
              }}
              placeholder='Ex: Copa do Brasil'
              className={clsx(styles.input, {
                [styles.inputError]: errors.name,
              })}
            />
            <span className={styles.error}>{errors.name ?? ''}</span>
          </div>

          <div className={styles.horizontal}>
            <div className={styles.inputContainer}>
              <label htmlFor='startDate'>Data de início</label>
              <input
                type='date'
                id='startDate'
                name='startDate'
                value={formData.startDate}
                onChange={(e) => {
                  setFormData({ ...formData, startDate: e.target.value });
                  if (errors.startDate)
                    setErrors((prev) => ({ ...prev, startDate: undefined }));
                }}
                className={styles.input}
              />
              <span className={styles.error}>{errors.startDate ?? ''}</span>
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor='endDate'>Data de término</label>
              <input
                type='date'
                id='endDate'
                name='endDate'
                value={formData.endDate}
                onChange={(e) => {
                  setFormData({ ...formData, endDate: e.target.value });
                  if (errors.endDate)
                    setErrors((prev) => ({ ...prev, endDate: undefined }));
                }}
                className={styles.input}
              />
              <span className={styles.error}>{errors.endDate ?? ''}</span>
            </div>
          </div>

          <div className={styles.counterContainer}>
            <span>Número de times</span>

            <div className={styles.stepperRow}>
              <div className={styles.stepperContainer}>
                <button
                  type='button'
                  onClick={handleDecrement}
                  className={clsx(styles.button, {
                    [styles.buttonDisabled]: formData.teamCount <= MIN_TEAMS,
                  })}
                >
                  <Minus size={16} strokeWidth={1.5} />
                </button>

                <div className={styles.countValue}>{formData.teamCount}</div>

                <button
                  type='button'
                  onClick={handleIncrement}
                  className={clsx(styles.button, {
                    [styles.buttonDisabled]: formData.teamCount >= MAX_TEAMS,
                  })}
                >
                  <Plus size={16} strokeWidth={1.5} />
                </button>
              </div>

              <div className={styles.quickSelectorContainer}>
                {QUICK_SELECT_OPTIONS.map((item) => {
                  const isSelected = formData.teamCount === item;

                  return (
                    <button
                      key={item}
                      type='button'
                      className={clsx(styles.quickSelector, {
                        [styles.isSelected]: isSelected,
                      })}
                      onClick={() => handleQuickSelect(item)}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={styles.line}></div>

          <div className={styles.bottom}>
            <button className={styles.cancel} onClick={onClose}>
              Cancelar
            </button>

            <button className={styles.confirm} onClick={handleSubmit}>
              Gerar Chaveamento
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
