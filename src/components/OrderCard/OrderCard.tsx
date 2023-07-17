import React from 'react';
import {
  StyleSheet,
  Pressable,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Label from '../Text/Label';
import dayjs from 'dayjs';
import ArrowRightSvg from '../../Svg/ArrowRightSvg';
import I18n from '../../lang/_i18n';
import {useSelector} from 'react-redux';
import {AppState} from '../../store';

const col = 'mb-[6px] px-[10px] justify-between items-center flex-row';

export default function OrderCard() {
  const {language} = useSelector((state: AppState) => state.app);
  return (
    <Pressable
      onPress={() => {
        console.log('a');
      }}
      style={{width: Dimensions.get('window').width / 2 - 25}}
      className={`h-[120px] bg-white  rounded-[10px] mr-[10px]`}>
      <View className="bg-[#D8B267] h-[25px] justify-between items-center flex-row px-[10px] mb-[10px] rounded-t-[10px]">
        <Label
          label={I18n.t('homescreen_order_productcode', {locale: language})}
          font="Raleway-SemiBold"
          class={'text-[#fff] text-[10px]'}
        />
        <Label
          label="0001"
          font="Raleway-Bold"
          class={'text-[#fff] text-[12px]'}
        />
      </View>
      <View className={col}>
        <Label
          label={I18n.t('homescreen_order_orderno', {locale: language})}
          font="Raleway-Bold"
          class={'text-[#594E3C] text-[10px]'}
        />
        <Label
          label="001"
          font="Raleway-Bold"
          class={'text-[#594E3C] text-[10px]'}
        />
      </View>
      <View className={col}>
        <Label
          label={I18n.t('homescreen_order_quantity', {locale: language})}
          font="Raleway-Bold"
          class={'text-[#594E3C] text-[10px]'}
        />
        <Label
          label="11"
          font="Raleway-Bold"
          class={'text-[#594E3C] text-[10px]'}
        />
      </View>
      <View className={col}>
        <Label
          label={I18n.t('homescreen_order_date', {locale: language})}
          font="Raleway-Bold"
          class={'text-[#594E3C] text-[10px]'}
        />
        <Label
          label={dayjs(new Date(2011, 11, 11)).format('DD.MM.YYYY')}
          font="Raleway-SemiBold"
          class={'text-[#594E3C] text-[10px] font-bold'}
        />
      </View>
      <View className="mx-[10px] w-[90%] bg-[#D8B267] h-[.5px]"></View>
      <View className="mt-[2px] mr-[5px] justify-center items-end">
        <TouchableOpacity className="w-[100%] items-end">
          <ArrowRightSvg />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
}
