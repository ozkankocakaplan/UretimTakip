import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

interface LoginInputProps extends TextInputProps {
  icon?: IconProp;
  svg?: React.ReactNode;
  iconSize?: number;
  iconColor?: string;
  title: string;
  sx?: StyleProp<ViewStyle>;
  classname?: string;
}

export default function LoginInput({
  icon,
  svg,
  iconColor = '#868686',
  iconSize = 17,
  title,
  sx,
  classname,
  ...rest
}: LoginInputProps) {
  return (
    <View className={classname} style={sx}>
      <View className="flex-row items-center">
        {icon && (
          <FontAwesomeIcon color={iconColor} icon={icon} size={iconSize} />
        )}
        {svg && svg}
        <Text className="text-[15px] text-[#868686] ml-[10px] font-[Raleway-SemiBold]">
          {title}
        </Text>
      </View>
      <TextInput
        className="h-[30px] font-[Raleway-Bold] py-[5px] bg-transparent border-b-[#C9C9C9] border-b-[1px]"
        {...rest}
      />
    </View>
  );
}
