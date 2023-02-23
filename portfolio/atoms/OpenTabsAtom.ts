import { atom } from "recoil";

export const OpenTabsState = atom<any[]>({
    key: 'OpenTabsState',
    default: [{
        icon: "https://i.ibb.co/KzCJb7z/typescript.png",
        name : "technologies.tsx",
        type: "file",
        url: "/skills/technologies"
    },], 
})