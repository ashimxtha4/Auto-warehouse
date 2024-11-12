import { create } from 'zustand'

interface UIState {
  isRegisterDialogOpen: boolean
  isLoginDialogOpen: boolean
  isHoverCardOpen: boolean
  openRegisterDialog: () => void
  closeRegisterDialog: () => void
  openLoginDialog: () => void
  closeLoginDialog: () => void
  setHoverCardOpen: (open: boolean) => void
  closeAll: () => void
}

export const useAuthStore = create<UIState>(set => ({
  isRegisterDialogOpen: false,
  isLoginDialogOpen: false,
  isHoverCardOpen: false,

  openRegisterDialog: () =>
    set({
      isRegisterDialogOpen: true,
      isHoverCardOpen: true
    }),

  closeRegisterDialog: () => set({ isRegisterDialogOpen: false }),

  openLoginDialog: () =>
    set({
      isLoginDialogOpen: true,
      isHoverCardOpen: true
    }),

  closeLoginDialog: () => set({ isLoginDialogOpen: false }),

  setHoverCardOpen: (open: boolean) =>
    set(state => ({
      // Only allow hover card to close if no dialogs are open
      isHoverCardOpen:
        open || state.isLoginDialogOpen || state.isRegisterDialogOpen
    })),

  closeAll: () =>
    set({
      isRegisterDialogOpen: false,
      isLoginDialogOpen: false,
      isHoverCardOpen: false
    })
}))
