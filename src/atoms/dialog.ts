import { atom } from 'recoil'

export const onDialog = atom<boolean>({
  key: 'onDialog',
  default: false,
})
