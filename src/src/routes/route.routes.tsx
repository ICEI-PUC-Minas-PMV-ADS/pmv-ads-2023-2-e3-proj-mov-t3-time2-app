import React from 'react';

import {useUser} from '../contexts/UserContext';

import Auth from './auth.routes';
import TabRoutes from './tab.routes';

const Route = ()=> {
  const {signed} = useUser();

  return(
    <>
    {
      signed
      ? <TabRoutes/>
      : <Auth/>
    }
    </>
  )

}

export default Route;