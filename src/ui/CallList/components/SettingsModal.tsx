import React, { useContext } from 'react';
import BottomModal from '../../components/BottomModal/BottomModal';
import BottomModalOption from '../../components/BottomModal/BottomModalOption';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppContext } from '../../AppProvider';
import Logout from '~/core/useCases/Logout';
import { sessionStorage } from '~/core/infrastructure/instances';

interface SettingsModalProps {
  modalRef: Record<string, any>;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ modalRef }) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const navigateToEditScreen = () => { navigation.navigate('AccountEdit'); };
  const { profile } = useContext(AppContext);
  const logout = new Logout(sessionStorage);

  const tryLogout = async () => {
    try {
      await logout.execute();
      navigation.navigate('Login');
    } catch (e) {
      console.log(e);
    }
  };

  const navigateToHistoryCalls = () => { navigation.navigate('MyCalls'); };

  return (
    <BottomModal modalRef={modalRef} top={75}>
      <BottomModalOption modalRef={modalRef} icon={'account-edit'} label={'My account'} onPress={navigateToEditScreen} />
      {profile === 'company' && <BottomModalOption modalRef={modalRef}  icon={'phone'} label={'My company calls'} onPress={navigateToHistoryCalls} />}
      <BottomModalOption modalRef={modalRef}  icon={'logout'} label={'Logout'} onPress={tryLogout} />
    </BottomModal>
  );
};

export default SettingsModal;
