import React, { useEffect, useState } from 'react';
import {
  Platform,
  TextInput,
  View,
  TouchableOpacity,
  Text, SafeAreaView,
} from 'react-native';
import RtcEngine from 'react-native-agora';
import requestAudioPermission from './components/Permission';
import styles from './components/Style';
import { config } from './config';

let engine: RtcEngine;

const App: React.FC = () => {
  const [joinSucceed, setJoinSucceed] = useState(false);
  const [enableSpeakerphone, setEnableSpeakerphone] = useState(true);
  const [channelName, setChannelName] = useState(config.CHANNEL_NAME);
  const [openMicrophone, setOpenMicrophone] = useState(true);
  const [peerIds, setPeerIds] = useState<number[]>([]);

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestAudioPermission().then(() => {
        console.log('requested!');
      });
    }
    init();
  }, []);

  const init = async () => {

    engine = await RtcEngine.create(config.APP_ID);

    await engine.enableAudio();

    engine.addListener('Warning', (warn) => {
      console.log('Warning', warn);
    });

    engine.addListener('Error', (err) => {
      console.log('Error', err);
    });

    engine.addListener('UserJoined', (uid, elapsed) => {
      console.log('UserJoined', uid, elapsed);
      if (peerIds.indexOf(uid) === -1) {
        setPeerIds( [...peerIds, uid]);
      }
    });

    engine.addListener('UserOffline', (uid, reason) => {
      console.log('UserOffline', uid, reason);
      setPeerIds(peerIds.filter((id) => id !== uid));
    });

    engine.addListener('RequestToken', () => {
      console.log('Token Expired');
    });

    engine.addListener('JoinChannelSuccess', (channel, uid, elapsed) => {
      console.log('JoinChannelSuccess', channel, uid, elapsed);
      setJoinSucceed(true);
    });

    engine.addListener('LocalAudioStateChanged', (callback) => {
      console.log('Speaking');
    });


  };

  const joinChannel = async () => {
    await engine?.joinChannel(config.TOKEN, channelName, null,0);
  };

  const leaveChannel = async () => {
    await engine?.leaveChannel();
    setJoinSucceed(false );
    setPeerIds([]);
  };

  const switchMicrophone = () => {
    engine?.enableLocalAudio(!openMicrophone).then(() => {
      setOpenMicrophone(!openMicrophone);
    }).catch((err) => {
      console.warn('enableLocalAudio', err);
    });
  };

  const switchSpeakerphone = () => {
    engine?.setEnableSpeakerphone(!enableSpeakerphone).then(() => {
      setEnableSpeakerphone(!enableSpeakerphone);
    }).catch((err) => {
      console.warn('setEnableSpeakerphone', err);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setChannelName(text)}
          placeholder={'Channel Name'}
          value={channelName}
        />
        <TouchableOpacity style={styles.buttonChannel} onPress={joinSucceed ? leaveChannel : joinChannel}>
          <Text style={styles.buttonText}>{`${joinSucceed ? 'Leave' : 'Join'} channel`}</Text>
        </TouchableOpacity>
        <Text style={styles.input}>{`Peers: ${peerIds}`}</Text>
      </View>
      <View style={styles.buttonHolder}>
        <TouchableOpacity style={styles.button} onPress={switchMicrophone}>
          <Text style={styles.buttonText}>{`Microphone ${openMicrophone ? 'on' : 'off'}`}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={switchSpeakerphone}>
          <Text style={styles.buttonText}>{`Speakerphone ${enableSpeakerphone ? 'on' : 'off'}`}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
