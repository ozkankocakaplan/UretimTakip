import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import HeaderBar from '../components/Header/HeaderBar';
import {faAngleLeft, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Label from '../components/Text/Label';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import I18n from '../lang/_i18n';
import {useSelector} from 'react-redux';
import {AppState} from '../store';
export default function Report(props: any) {
  const {language} = useSelector((state: AppState) => state.app);
  return (
    <View className="flex-1 bg-[#F5F5F5]">
      <SafeAreaView className="ml-[30px] mr-[20px]">
        <View className="mt-[15px] mb-[10px] flex-row items-center">
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <FontAwesomeIcon icon={faArrowLeft} color="#D8B267" size={25} />
          </TouchableOpacity>
          <Label
            font="Raleway-Bold"
            class={'text-[20px] text-[#5F5E70] ml-[15px]'}
            label={I18n.t('reportsscreen_title', {locale: language})}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
