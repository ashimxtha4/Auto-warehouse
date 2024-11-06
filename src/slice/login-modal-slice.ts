import { create } from 'zustand'

interface LoginModalState {
  open: boolean
  setOpen: () => void
}

export const useLoginModalStore = create<LoginModalState>(set => ({
  open: false,
  setOpen: () => set(state => ({ open: !state.open }))
}))
