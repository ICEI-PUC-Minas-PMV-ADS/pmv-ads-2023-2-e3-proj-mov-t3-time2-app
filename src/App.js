import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import UserProvider from './src/contexts/UserContext';
import TabRoutes from './src/routes/tab.routes';

const App = () => {

  return (
   <UserProvider>
    <NavigationContainer>
      <TabRoutes/>
   </NavigationContainer>
  </UserProvider>
  )
}

export default App;