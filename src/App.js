import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';


import UserProvider from './src/contexts/UserContext';
import TabRoutes from './src/routes/tab.routes';
import Route from './src/routes/route.routes';

const App = () => {

  return (
    <UserProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </UserProvider>
  )
}

export default App;