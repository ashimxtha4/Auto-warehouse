import { create } from 'zustand'

interface UIState {
  isRegisterDialogOpen: boolean
  isLoginDialogOpen: boolean
  isHoverCardOpen: boolean
  isOTPDialogOpen: boolean
  isForgotPasswordDialogOpen: boolean
  openRegisterDialog: () => void
  closeRegisterDialog: () => void
  openLoginDialog: () => void
  closeLoginDialog: () => void
  openOTPDialog: () => void
  closeOTPDialog: () => void
  openForgotPasswordDialog: () => void
  closeForgotPasswordDialog: () => void
  setHoverCardOpen: (open: boolean) => void
  closeAll: () => void
}

export const useAuthStore = create<UIState>(set => ({
  isRegisterDialogOpen: false,
  isLoginDialogOpen: false,
  isHoverCardOpen: false,
  isOTPDialogOpen: false,
  isForgotPasswordDialogOpen: false,

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

  openOTPDialog: () =>
    set({
      isOTPDialogOpen: true,
      isHoverCardOpen: true
    }),

  closeOTPDialog: () => set({ isOTPDialogOpen: false }),

  openForgotPasswordDialog: () =>
    set({
      isForgotPasswordDialogOpen: true,
      isHoverCardOpen: true
    }),

  closeForgotPasswordDialog: () => set({ isForgotPasswordDialogOpen: false }),

  setHoverCardOpen: (open: boolean) =>
    set(state => ({
      // Only allow hover card to close if no dialogs are open
      isHoverCardOpen:
        open ||
        state.isLoginDialogOpen ||
        state.isRegisterDialogOpen ||
        state.isOTPDialogOpen ||
        state.isForgotPasswordDialogOpen
    })),

  closeAll: () =>
    set({
      isRegisterDialogOpen: false,
      isLoginDialogOpen: false,
      isHoverCardOpen: false,
      isOTPDialogOpen: false,
      isForgotPasswordDialogOpen: false
    })
}))
