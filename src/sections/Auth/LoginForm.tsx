import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import LoginInput from '../../components/TextInput/LoginInput';

import Label from '../../components/Text/Label';
import EmailSvg from '../../Svg/EmailSvg';
import PasswordSvg from '../../Svg/PasswordSvg';
import Button from '../../components/Buttons/Default';
import I18n from '../../lang/_i18n';
import {useNavigation} from '@react-navigation/native';
import {goNavigate} from '../../utils/Helper';
import RouteTypes from '../../types/RouteTypes';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../store';
import {AuthActions} from '../../store/slice/authSlice';

export default function LoginForm() {
  const dispatch = useDispatch();
  const {language} = useSelector((state: AppState) => state.app);
  const navigation = useNavigation();
  return (
    <View className="bg-white rounded-l-[30px] rounded-r-[30px] pl-[20px] pr-[20px] absolute w-[100%] h-[60%] bottom-0">
      <View className="mx-[10px] mt-[10px] mb-[10px]">
        <Label
          font="Raleway-Bold"
          class={'text-[24px] mt-[10px] mb-[30px]'}
          label={I18n.t('loginscreen_title', {locale: language})}
        />
        <LoginInput
          autoCapitalize="none"
          value="example@hotmail.com"
          autoCorrect={false}
          svg={<EmailSvg />}
          classname="mb-[30px]"
          title={I18n.t('loginscreen_email', {locale: language})}
        />
        <LoginInput
          value="123456"
          secureTextEntry={true}
          svg={<PasswordSvg />}
          title={I18n.t('loginscreen_password', {locale: language})}
        />
        <TouchableOpacity
          onPress={() => {
            goNavigate(navigation, RouteTypes.FORGOT_PASSWORD_SCREEN);
          }}
          className="mt-[10px]">
          <Label
            font="Raleway-SemiBold"
            class="text-[15px] text-[#D8B267]"
            label={I18n.t('loginscreen_forgotpassword', {locale: language})}
          />
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Button
            onPress={() => {
              dispatch(
                AuthActions.setUser({
                  name: 'ozkankocakaplan07@gmail.com',
                  password: '123456',
                }),
              );
            }}
            activeOpacity={0.8}
            class="mt-[30px] w-[50%]">
            <Label
              font="Raleway-SemiBold"
              class="text-[15px] text-white"
              label={I18n.t('loginscreen_button', {locale: language})}
            />
          </Button>
        </View>
      </View>
    </View>
  );
}
