import React from 'react';
import {View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Label from '../components/Text/Label';
import I18n from '../lang/_i18n';
import SearchBar from '../components/SearchBar/SearchBar';
import {AppState} from '../store';
import {useSelector} from 'react-redux';

export default function Orders(props: any) {
  const {language} = useSelector((state: AppState) => state.app);
  return (
    <View className="flex-1 bg-[#F5F5F5]">
      <SafeAreaView className="ml-[20px] mr-[20px]">
        <View className="mt-[15px] mb-[10px] flex-row items-center">
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <FontAwesomeIcon icon={faArrowLeft} color="#D8B267" size={25} />
          </TouchableOpacity>
          <Label
            font="Raleway-Bold"
            class="ml-[15px] text-[#5f5e70] text-[20px]"
            label={I18n.t('orderscreen_title', {locale: language})}
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
