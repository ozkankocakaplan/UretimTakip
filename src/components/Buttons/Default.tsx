import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';

interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean;
  children: React.ReactNode;
  sx?: StyleProp<ViewStyle>;
  class?: any;
}
export default function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      className={
        props.class +
        ' ' +
        'bg-[#D8B267] h-[45px] justify-center items-center rounded-[10px]'
      }
      {...props}
      style={[props.sx]}>
      {props.children}
    </TouchableOpacity>
  );
}
