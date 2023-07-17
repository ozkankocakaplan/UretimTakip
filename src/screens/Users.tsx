import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Label from '../components/Text/Label';
import I18n from '../lang/_i18n';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../components/SearchBar/SearchBar';

import {AppState} from '../store';
import {useSelector} from 'react-redux';
export default function Users(props: any) {
  const {language} = useSelector((state: AppState) => state.app);
  return (
    <View className="flex-1 bg-[#F5F5F5]">
      <SafeAreaView className="mx-[20px]">
        <View className="mt-[15px] mb-[10px] flex-row items-center">
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <FontAwesomeIcon icon={faArrowLeft} color="#D8B267" size={25} />
          </TouchableOpacity>
          <Label
            font="Raleway-Bold"
            class={'text-[20px] text-[#5F5E70] ml-[15px]'}
            label={I18n.t('usersscreen_title', {locale: language})}
          />
        </View>
        <SearchBar
          sx={{marginLeft: 0}}
          inputStyleProps={{
            borderRadius: 4,
          }}
        />
      </SafeAreaView>
    </View>
  );
}
