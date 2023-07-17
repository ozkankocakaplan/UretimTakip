import {Pressable, PressableProps} from 'react-native';
import React from 'react';
import Label from '../../components/Text/Label';
interface QuickWidgetProps extends PressableProps {
  label: string;
  icon?: any;
}
export default function QuickWidget(props: QuickWidgetProps) {
  return (
    <Pressable
      {...props}
      className="bg-[#D8B267] w-[100px] h-[80px] justify-center items-center rounded-[5px] shadow-2xl">
      {props.icon}
      <Label
        class={'text-white text-[12px] font-bold text-center leading-[15px]'}
        font="Raleway"
        label={props.label}
      />
    </Pressable>
  );
}
