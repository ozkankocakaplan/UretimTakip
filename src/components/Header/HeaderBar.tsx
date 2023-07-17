import React from 'react';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

export interface HeaderBarProp extends TouchableOpacityProps {
  label: String;
  iconLeft?: IconProp;

  leftButon?: TouchableOpacityProps;

  color?: {iconLeft: '#fff'; label: '#fff'};
}
const HeaderBar: React.FC<HeaderBarProp> = ({
  label,
  iconLeft,
  leftButon,
  color = {iconLeft: '#594E3C', label: '#594E3C'},
}) => {
  return (
    <SafeAreaView className="bg-[#D8B267] flex-row justify-center items-center">
      {iconLeft && (
        <TouchableOpacity
          {...leftButon}
          className="absolute bottom-0 p-[10px]  left-0 items-center justify-end">
          <FontAwesomeIcon color={color.iconLeft} size={22} icon={iconLeft} />
        </TouchableOpacity>
      )}
      <Text
        className="text-[18px] font-bold p-[10px] text-[#594E3C]"
        style={{color: color.label}}>
        {label}
      </Text>
    </SafeAreaView>
  );
};
export default HeaderBar;
