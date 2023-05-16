import { atom } from 'recoil';

export const user = atom({
    key: 'user',
    default: JSON.parse(sessionStorage.getItem("user")) || null,
});
