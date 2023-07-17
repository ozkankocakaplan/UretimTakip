import {
  View,
  StyleSheet,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import SearchSvg from '../../Svg/SearchSvg';
import I18n from '../../lang/_i18n';
import {useSelector} from 'react-redux';
import {AppState} from '../../store';
interface SearchBarProps extends TextInputProps {
  sx?: StyleProp<ViewStyle>;
  inputStyleProps?: StyleProp<TextStyle>;
}
export default function SearchBar(props: SearchBarProps) {
  const {language} = useSelector((state: AppState) => state.app);
  return (
    <View className="ml-[20px]" style={[props.sx]}>
      <View className="absolute z-10 left-[18px] top-[12px]">
        <SearchSvg />
      </View>
      <TextInput
        {...props}
        autoFocus={false}
        placeholderTextColor={'#999999'}
        placeholder={I18n.t('homescreen_search_placeholder', {
          locale: language,
        })}
        className="bg-[#fff] border-[#F2F2F2] border-1 rounded-[40px] h-[40px] font-bold text-[13px] text-[#999999] px-[43px] py-[6px]"
        style={[props.inputStyleProps]}
      />
    </View>
  );
}
