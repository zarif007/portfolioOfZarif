import { atom } from "recoil";

export const OpenTabsState = atom<any[]>({
    key: 'OpenTabsState',
    default: [], 
})