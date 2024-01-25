/**
 * 📄FileName   : mode.ts
 * ⏱CreateDate : 2024/01/23 14:45:20
 * 🧑Author     : master
 * 👆Version    : 1.0
 * 💭Description: 亮暗模式状态Store
 */

import { PaletteMode } from '@mui/material';
import { create } from 'zustand';
import { THEME_MODE_NAME } from '@utils/constants';
export interface ModeState {
  mode: PaletteMode;
  setMode: () => void;
}

/**
 * 获取默认模式
 * @returns 主题模式
 */
const defaultModel = () => {
  let result: PaletteMode = 'light';
  const localValue = localStorage.getItem(THEME_MODE_NAME);
  if (localValue && (localValue === 'light' || localValue === 'dark')) {
    result = localValue as PaletteMode;
  }
  return result;
};

export const useModeStore = create<ModeState>((set) => ({
  mode: defaultModel(),
  setMode: () =>
    set((state) => {
      const mode: PaletteMode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem(THEME_MODE_NAME, mode);
      return { mode };
    }),
}));
