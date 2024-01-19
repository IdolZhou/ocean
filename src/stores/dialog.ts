/**
 * 📄FileName   : dialog.ts
 * ⏱CreateDate : 2024/01/19 14:59:12
 * 🧑Author     : master
 * 👆Version    : 1.0
 * 💭Description: 登录/注册弹窗显示状态Store
 */

import { create } from 'zustand';

export interface DialogState {
  visible: boolean;
  setVisible: (by: boolean) => void;
}

export const useDialogStore = create<DialogState>((set) => ({
  visible: false,
  setVisible: (by: boolean) => set(() => ({ visible: by })),
}));
