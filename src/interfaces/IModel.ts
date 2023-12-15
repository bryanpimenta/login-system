export interface ICRUD<T, L> extends
    IReadable<T>,
    ICreatable<L>,
    IUpdatable<T>,
    IDeletable<T> { }

export interface IReadable<T> {
    getAll(): Promise<T[]>;
    getOne(email: string): Promise<T>;
}

export interface ICreatable<L> {
    create(account: L): Promise<L>;
}

export interface IUpdatable<T> {
    update(email: string, token: string): Promise<T>;
}

export interface IDeletable<T> {
    delete(email: string): Promise<T>;
}