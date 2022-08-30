import React, { useContext, useEffect, useRef, useState } from 'react';
import CallListScreenUI from './ui';
import { NavigationProp, useIsFocused, useNavigation } from '@react-navigation/native';
import { Call } from '~core/domain/Call';
import GetCallList from '~core/useCases/GetCallList';
import { callService } from '~core/infrastructure/instances';
import { AppContext } from '../AppProvider';


const CallListScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [searchText, setSearchText] = useState<string>('');
  const settingsModalRef = useRef<Record<string, any>>();
  const [loading, setLoading] = useState<boolean>(true);
  const [editing, setEditing] = useState<boolean>(false);
  const [callList, setCallList] = useState<Call[]>([]);
  const callListUC = new GetCallList(callService);
  const isFocused = useIsFocused();
  const { profile } = useContext(AppContext);
  // const ws = new WebSocket('wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self');

  useEffect(() => {
    const start = async () => {
      try {
        const calls = await callListUC.execute();
        setCallList(calls);
      } catch (e: unknown) {
        console.log(e);
      }
    };

    // ws.onopen = () => {
    //   // connection opened
    //   ws.send('algo'); // send a message
    // };
    //
    // ws.onmessage = (e) => {
    //   // a message was received
    //   console.log(e.data);
    // };

    if (isFocused) {
      start();
      setLoading(false);
    }
  }, [isFocused]);


  const openSettingsModal = () => {
    if (settingsModalRef.current) { settingsModalRef.current.open(); }
  };

  const navigateToCreateCall = () => navigation.navigate('CreateCall');

  return (
    <CallListScreenUI
      loading={loading}
      searchText={searchText}
      callList={callList}
      setSearchText={setSearchText}
      onCreateCall={navigateToCreateCall}
      settingsModalRef={settingsModalRef}
      onPressSettings={openSettingsModal}
      userProfile={profile}
    />
  );
};

export default CallListScreen;
