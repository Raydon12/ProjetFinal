import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import TabsNavigator from './src/containers/navigator/tabsNavigator';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthContext from './src/services/context';
import AuthService from './src/services/AuthService';

export default function App() {
  const [user,setUser]= useState()
  const restoreUser = async()=>{
    const user = await AuthService.getUser();
    if(user) setUser(user)
  };

  useEffect(()=>{
    restoreUser()
  },[])
   
  return (
      <AuthContext.Provider value = {{user,setUser}}>
      <Provider store={configureStore}>
      <TabsNavigator></TabsNavigator>
      </Provider>
      </AuthContext.Provider>

  );
}



