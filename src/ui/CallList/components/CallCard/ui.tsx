import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { Font, Theme } from '~ui/theme/theme';
import CardHeader from './components/CardHeader';
import CardUserList from './components/CardUserList';
import CardDateLabel from './components/CardDateLabel';
import { Call } from '~core/domain/Call';

interface CallCardPropsUI {
  call: Call;
  onPressJoinConference: () => void;
  onPressPlayRecordedCall: () => void;
}

const CallCardUI: React.FC<CallCardPropsUI> = ({ onPressJoinConference, onPressPlayRecordedCall, call }) => {

  return (
    <View style={styles.container}>
      <CardHeader callId={call.callId.toUpperCase()} title={call.callName} companyName={call.companyName}/>
      <CardUserList call={call} />
      {!call.recordFileUrl && <TouchableOpacity style={styles.joinContainer} onPress={onPressJoinConference}>
        <Text style={styles.joinText}>JOIN CONFERENCE CALL</Text>
        <CardDateLabel call={call} />
      </TouchableOpacity>}
      {call.recordFileUrl &&  <TouchableOpacity style={styles.joinContainer} onPress={() => onPressPlayRecordedCall()}>
        <Text style={styles.joinText}>LISTEN THIS RECORDED CALL</Text>
        <CardDateLabel call={call} />
      </TouchableOpacity>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: 'white',
    width: '100%',
    marginVertical: responsiveHeight(1),
    padding: 15,
    shadowColor: '#171717',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  name: {
    ...Font.Regular,
    color: Theme.darkGray,
    fontSize: 16,
  },
  company: {
    ...Font.Regular,
    color: Theme.mediumGray,
    fontSize: 12,
  },
  joinContainer: {
    alignItems: 'center',
    marginTop: responsiveHeight(1),
  },
  joinText: {
    ...Font.Bold,
    color: Theme.accent,
    fontSize: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  callID: {
    ...Font.Regular,
    color: Theme.mediumGray,
    fontSize: 12,
  },
});

export default CallCardUI;
