import { RegisterResponseData } from '@/services/api/api-service/auth/register'
import { create } from 'zustand'

interface UserState {
  id: number
  uuid: string
  setUser: (id: number, uuid: string) => void
  loadUserFromLocalStorage: () => void
  newUserData: RegisterResponseData
  setNewUserData: (data: RegisterResponseData) => void
}

export const useUserStore = create<UserState>(set => ({
  id: -1,
  uuid: '',
  newUserData: {} as RegisterResponseData,
  setUser: (id, uuid) => set({ id, uuid }),
  loadUserFromLocalStorage: () => {
    if (typeof window !== 'undefined') {
      const currentUser = localStorage.getItem('user')
      if (currentUser) {
        const currentUserString = JSON.parse(currentUser)
        const userId = currentUserString.id
        const userUuid = currentUserString.uuid
        set({ id: userId, uuid: userUuid })
      }
    }
  },
  setNewUserData: data => set({ newUserData: data })
}))
