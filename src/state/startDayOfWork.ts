import { create } from 'zustand';

type StartDayOfWorkStore = {
  day: Date;
  setDay: (day: Date) => void;
};

export const useStartDayOfWork = create<StartDayOfWorkStore>((set) => ({
  day: new Date(2023, 7, 19),
  setDay: (day: Date) => set({ day }),
}));
