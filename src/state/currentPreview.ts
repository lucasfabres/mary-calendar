import { getMonth, getYear } from 'date-fns';
import { create } from 'zustand';

const now = new Date();

type CurrentPreview = {
  month: number;
  year: number;
  setYear: (year: number) => void;
  setMonth: (month: number) => void;
};

export const useCurrentPreview = create<CurrentPreview>((set) => ({
  month: getMonth(now),
  year: getYear(now),
  setYear: (year: number) => set({ year }),
  setMonth: (month: number) => set({ month }),
}));
