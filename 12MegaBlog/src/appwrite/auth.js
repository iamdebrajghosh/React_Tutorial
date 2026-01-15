import config from '../config/config'

import { Client, Account, ID } from "appwrite";

export class AppwriteService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async login({ email, password }) {
        try {
            await this.account.createEmailSession(email, password);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

const appwriteService = new AppwriteService();

export default appwriteService;
