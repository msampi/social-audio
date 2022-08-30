import React, { useContext, useEffect, useState } from 'react';
import { Call } from '~core/domain/Call';
import { User } from '~core/domain/User';
import CallCardUI from './ui';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import SoundPlayer from 'react-native-sound-player';
import AddUserToCall from '~/core/useCases/AddUserToCall';
import { callService } from '~/core/infrastructure/instances';
import { AppContext } from '../../../AppProvider';

interface CallCardProps {
  call: Call;
}

const CallCard: React.FC<CallCardProps> = ({ call }) => {
  const addUserToCall = new AddUserToCall(callService);
  const { userId } = useContext(AppContext);

  const navigation = useNavigation<NavigationProp<any>>();

  const onPressJoinConferenceCall = () => {
    try {
      addUserToCall.execute(userId, call.id, call.userId);
      navigation.navigate('ConferenceCall', { params: { id: call.id } });
    }
    catch (e) {
      console.log(e);
    }
  };

  const onPressJoinRecordedCall = () => {
    navigation.navigate('RecordedCall');
    // try {
    //   SoundPlayer.playUrl(recordedCallUrl);
    //   // SoundPlayer.stop();
    // } catch (e) {
    //   console.log('cannot play the sound file', e);
    // }
  };

  return (
    <CallCardUI
      call={call}
      onPressPlayRecordedCall={onPressJoinRecordedCall}
      onPressJoinConference={onPressJoinConferenceCall}
    />
  );
};


export default CallCard;
