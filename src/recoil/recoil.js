import { atom } from 'recoil';

export const UserState = atom({
    key: 'UserState',
    default: {
       id : '',
       pw: '',
    },
});

export const LoginState = atom({
    key:'LoginState',
    dafault: '',

});