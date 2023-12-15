export type TLogin = {
    id: number;
    email: string;
}

export type TSignInLogin = Omit<TLogin, 'id'>;