import { atom } from "recoil";
import { TabInterface } from './../interfaces/TabInterface';

export const OpenTabsState = atom<TabInterface[]>({
    key: 'OpenTabsState',
    default: [{
        icon: "https://i.ibb.co/KzCJb7z/typescript.png",
        name : "home.tsx",
        type: "file",
        url: "/",
    },], 
})