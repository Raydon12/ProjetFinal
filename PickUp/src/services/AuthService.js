
import * as SecureStore from 'expo-secure-store'

const key = "authToken"


const storeToken = async (authToken) =>{
    try{
        const token = JSON.stringify(authToken)
        await SecureStore.setItemAsync(key,token);

    } catch (error){
        console.log("Erreur de stockage du token ", error);
    }
};

const getToken = async () =>{
    try{
        const token = await SecureStore.getItemAsync(key);
        return JSON.parse(token)
    }
    catch(error){
        console.log("Erreur de reception du token")
    }
}
 const removeToken = async ()=>{
     try{
         const token = await SecureStore.deleteItemAsync(key)
         
     }catch(error){
         console.log('Impossible de delete ce token mamene', error )
     }
 }
 const getUser = async () =>{
     const user =  await getToken();
     return user?user:null;
 };

 export default {
     getToken,
     getUser,
     removeToken,
     storeToken
 }