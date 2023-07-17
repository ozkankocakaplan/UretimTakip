import React, {useContext, useEffect, useState} from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header/Header';
import SearchResults from '../components/SearchResult/SearchResult';
import Label from '../components/Text/Label';
import I18n from '../lang/_i18n';
import FilterSvg from '../Svg/FilterSvg';
import {useSelector} from 'react-redux';
import {AppState} from '../store';
export default function Fabric(props: any) {
  const {language} = useSelector((state: AppState) => state.app);
  const [opacity] = useState(new Animated.Value(0));
  const [pageAnimation] = useState(new Animated.Value(1));
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const Section = () => {
    return (
      <View>
        <View className="mt-[15px] mb-[10px] justify-between flex-row items-center">
          <Label
            font="Raleway-Bold"
            class={'text-[15px] text-[#5F5E70]'}
            label={I18n.t('fabricsscreen_title', {locale: language})}
          />
          <TouchableOpacity activeOpacity={0.7}>
            <FilterSvg />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView className="bg-[#F5F5F5] flex-1 ml-[20px] mr-[20px]">
      <Header
        pageAnimation={pageAnimation}
        isFocused={isFocused}
        setIsFocused={setIsFocused}
        opacity={opacity}
        navigation={props.navigation}
      />
      {isFocused ? <SearchResults opacity={opacity} /> : <Section />}
    </SafeAreaView>
  );
}
