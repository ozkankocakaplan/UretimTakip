import {View, Text} from 'react-native';
import React from 'react';
import Label from '../../components/Text/Label';

import OrderCreateSvg from '../../Svg/OrderCreateSvg';
import FabricSvg from '../../Svg/FabricSvg';
import ProductionTrackingSvg from '../../Svg/ProductionTrackingSvg';
import I18n from '../../lang/_i18n';
import QuickWidget from './QuickWidget';
import {AppState} from '../../store';
import {useSelector} from 'react-redux';
export default function QuickActions() {
  const {language} = useSelector((state: AppState) => state.app);
  return (
    <View>
      <Label
        font="Raleway-Bold"
        class={'text-[15px] text-[#5F5E70] mt-[15px]'}
        label={I18n.t('homescreen_quicktitle', {locale: language})}
      />
      <View className="mt-[15px] justify-between flex-row ">
        <QuickWidget
          icon={<OrderCreateSvg />}
          label={I18n.t('homescreen_quick1', {locale: language})}
        />
        <QuickWidget
          icon={<FabricSvg />}
          label={I18n.t('homescreen_quick2', {locale: language})}
        />
        <QuickWidget
          icon={<ProductionTrackingSvg />}
          label={I18n.t('homescreen_quick3', {locale: language})}
        />
      </View>
    </View>
  );
}
