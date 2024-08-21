'use client'
//if you need to initialize the store with data from parent component,
// then define that data as a prop on the client StoreProvider
// and use a Redux action on the slice to set the data in the store;
//to use function makeStore:create the Store and share it
import {useRef} from 'react';
import { Provider } from 'react-redux';
import { makeStore,AppStore } from '../lib/store';

export default function StoreProvider(
        { children }:{children:React.ReactNode}
      )
  {   
     const storeRef = useRef<AppStore>();
     if (!storeRef.current) {
//create the store inctance the first time this renders
         storeRef.current = makeStore();
       }
     return <Provider store={storeRef.current}>{children}</Provider>
  }

