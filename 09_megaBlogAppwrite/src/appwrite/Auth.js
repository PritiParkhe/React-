import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite"

export class AuthService {
    client = new Client ();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);
        this.account = new this.account(this.client);
    }
    //calling appwrite services (wrapper)
    async createAccount({email, password, name}){
        try {
           const userAccount = await this.account.create( ID.unique() ,email, password, name)
           if (userAccount) {
            //call another method 
                return this,this.login({email, password});
            
           } else {
                return userAccount;
           }
        } catch (error) {
            throw error;
        }
    }

    async login ({email, password}){
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
           return await this.account.get();
        } catch (error) {
            console.log("Apwrite service :: getCurrentUser :: error",error);
            
        }
        return null;
    }
    async logout (){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Apwrite service :: logout :: error",error);
        }
    }
}
const authService = new AuthService();

export default AuthService