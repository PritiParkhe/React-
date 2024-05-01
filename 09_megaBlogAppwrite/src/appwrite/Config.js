import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite"
export class Services{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)

    }

    async createPost({title, slug, content, featuredImage,status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appWriteCollectionId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,

                }
            )
        } catch (error) {
            console.log("Apwrite service :: createPost :: error",error);
        }
    }

    async updatePost(slug, {title, content, featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title, 
                    content, 
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Apwrite service :: updatePost :: error",error);
        }
    }
    
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,slug
            )
            return true
        } catch (error) {
            console.log("Apwrite service :: deletePost :: error",error);
            return false
        }
    }
    
    async getPost(slug){
        try {
            return await this. databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug

            )
            
        } catch (error) {
            console.log("Apwrite service :: getPost :: error",error);
            return false
        }
    }

    async getPosts(queries= [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                queries,

            )
        } catch (error) {
            console.log("Apwrite service :: getPosts :: error",error);
            return false
        }
    }

    //file upload sevices
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("Apwrite service :: uploadFiles :: error",error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appWriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Apwrite service :: deletFile :: error",error);
            return false
            
        }

    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileId
        )
    }
}
const service = new Services()
export default Services