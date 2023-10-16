import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';


import Route from './src/navigations/Route';
import UserProvider from './src/contexts/UserContext';
import Main from './src/navigations/Main'
import Auth from './src/navigations/Auth'
import NovoProjeto from './src/pages/NovoProjeto'


const App = () => {

  return (
   <UserProvider>
    <NavigationContainer>
      <Auth/>
   </NavigationContainer>
  </UserProvider>
  )
}

export default App;