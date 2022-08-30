import React, { Dispatch, SetStateAction } from 'react';
import { StyleSheet } from 'react-native';
import HeaderGradient from '../components/HeaderGradient';
import ContainerView from '../components/ContainerView';
import SearchBar from '../components/SearchBar';
import CallCard from './components/CallCard';
import ScrollContentView from '../components/ScrollContentView';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import CustomButton from '../components/CustomButton';
import SettingsModal from './components/SettingsModal';
import { Call } from '../../core/domain/Call';
import { LoadingScreen } from '../components/LoadingScreen';

interface CallListScreenUIProps {
  loading: boolean;
  callList: Call[];
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  onCreateCall: () => void;
  settingsModalRef: Record<string, any>;
  onPressSettings: () => void;
  userProfile: string;
}

const CallListScreenUI: React.FC<CallListScreenUIProps> = ({ loading, searchText, setSearchText, onCreateCall, settingsModalRef, onPressSettings, callList, userProfile }) => {
  if (loading) {return <LoadingScreen />;}
  return (
    <ContainerView light>
      <HeaderGradient title="Conference Calls" rightIcon={'cog'} onPressRightIcon={onPressSettings} />
      <>
        <SearchBar style={styles.marginHorizontal} value={searchText} onChange={setSearchText} />
        <ScrollContentView>
          {callList.map((call: Call) => <CallCard key={call.id} call={call} /> )}
        </ScrollContentView>
      </>
      {userProfile === 'company' && <CustomButton style={styles.button} label="CREATE CALL" onPress={onCreateCall} accent />}
      <SettingsModal modalRef={settingsModalRef} />
    </ContainerView>
  );
};

const styles = StyleSheet.create({
  marginHorizontal: {
    marginHorizontal: responsiveWidth(5),
  },
  button: {
    marginHorizontal: responsiveWidth(5),
    marginTop: responsiveHeight(2),
  },
});

export default CallListScreenUI;
