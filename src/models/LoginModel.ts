import { Pool } from "mysql2/promise";
import { ICRUD } from "../interfaces/IModel";
import { TLogin, TSignInLogin } from "../types/TLogin";

export default class LoginModel implements ICRUD<TLogin, TSignInLogin> {
    
    constructor(private _connection: Pool = _connection) {}

    public async getAll(): Promise<TLogin[]> {
        const query = 'SELECT * FROM accounts.users'
        const [accounts] = await this._connection.execute(query);
        return accounts as TLogin[];
    }

    public async getOne(email: string): Promise<TLogin> {
        const query = 'SELECT * FROM accounts.users WHERE email = ?';
        const [account] = await this._connection.execute(query, [email]);
        return account as unknown as TLogin;
    }

    public async create(account: TSignInLogin): Promise<TLogin> {
        const query = 'INSERT INTO accounts (email, password) VALUES (?, ?)';
        const [accountCreated] = await this._connection.execute(query, [account.email]);
        return accountCreated as unknown as TLogin;
    }

    public async update(email: any, token: any): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public async delete(email: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}
