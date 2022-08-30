import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { UserInCall } from '~core/domain/Types';
import ProfileThumb from '~ui/components/ProfileThumb';
import { Font, Theme } from '~ui/theme/theme';
import ProfileThumbMore from '~ui/components/ThumbMore';
import { Call } from '~core/domain/Call';

interface CardUserListProps {
  call: Call;
}

const CardUserList: React.FC<CardUserListProps> = ({ call }) => {
  const maxUserToShow = call.usersLength === 5 ? 5 : 4;
  const moreThanFiveUsers = call.usersLength > 5;
  return (
    <>
      {call.usersLength > 0 && <View style={styles.profilesContainer}>
        {call.users.filter((user: UserInCall, index: number) => index < maxUserToShow).map((user: UserInCall, index: number) => <ProfileThumb key={index} source={{ uri: user.avatar || ''  }} name={user.firstname + ' ' + user.lastname} /> )}
        {moreThanFiveUsers && <ProfileThumbMore count={call.usersLength - 5} />}
      </View>}
      {call.usersLength === 0 && <View style={styles.profilesEmptyContainer}>
        <Text style={styles.emptyProfilesText}>No audience in this call yet.</Text>
      </View>}
    </>
  );
};

const styles = StyleSheet.create({
  profilesContainer: {
    flexDirection: 'row',
    marginVertical: responsiveHeight(2),
    justifyContent: 'center',
  },
  profilesEmptyContainer: {
    height: responsiveHeight(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyProfilesText: {
    ...Font.Bold,
    color: Theme.accentLight,
    fontSize: 14,
  },


});

export default CardUserList;
