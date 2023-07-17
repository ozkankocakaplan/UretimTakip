import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';
import React, {memo} from 'react';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import Label from '../../components/Text/Label';
import UsersSvg from '../../Svg/UsersSvg';
import OrderSvg from '../../Svg/OrderSvg';
import MaterialSvg from '../../Svg/MaterialSvg';
import ReportSvg from '../../Svg/ReportSvg';
import SettingsSvg from '../../Svg/SettingsSvg';
import UserSvg from '../../Svg/UserSvg';
import LogoutSvg from '../../Svg/LogoutSvg';
import I18n from '../../lang/_i18n';
import RouteTypes from '../../types/RouteTypes';
import ConfirmationSvg from '../../Svg/ConfirmationSvg';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../store';
import {AuthActions} from '../../store/slice/authSlice';
import TransportSvg from '../../Svg/TransportSvg';
interface DrawerButtonProps extends TouchableOpacityProps {
  label: string;
  icon: React.ReactNode;
}
const DrawerButton = memo(function MyDrawerButton(props: DrawerButtonProps) {
  return (
    <TouchableOpacity {...props} style={styles.buttonContainer}>
      {props.icon}
      <Label
        label={props.label}
        font="Raleway-Bold"
        sx={{
          fontSize: 16,
          marginLeft: 14,
          color: '#594E3C',
          textTransform: 'uppercase',
        }}
      />
    </TouchableOpacity>
  );
});
const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 15,
    marginHorizontal: 20,
    paddingVertical: 6,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
});

const DrawerContent = memo(function MyDrawerContent(
  props: DrawerContentComponentProps,
) {
  const {language} = useSelector((state: AppState) => state.app);
  const dispatch = useDispatch();
  return (
    <View style={drawerContentStyles.container}>
      <View
        style={[
          {
            flex: 0.4,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#D8B267',
          },
          drawerContentStyles.shadown,
        ]}></View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#D8B267',
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}>
        <ScrollView
          contentContainerStyle={{marginTop: 40}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentInset={{bottom: 50}}>
          <DrawerButton
            onPress={() => props.navigation.navigate(RouteTypes.USERS_SCREEN)}
            label={I18n.t('drawercontentscreen_users', {locale: language})}
            icon={<UsersSvg />}
          />
          <DrawerButton
            onPress={() => props.navigation.navigate(RouteTypes.ORDERS_SCREEN)}
            label={I18n.t('drawercontentscreen_orders', {locale: language})}
            icon={<OrderSvg />}
          />
          <DrawerButton
            onPress={() => props.navigation.navigate(RouteTypes.ORDERS_SCREEN)}
            label={I18n.t('drawercontentscreen_shipment', {locale: language})}
            icon={<TransportSvg />}
          />
          <DrawerButton
            onPress={() =>
              props.navigation.navigate(RouteTypes.CONFIRMATION_SCREEN)
            }
            label={I18n.t('drawercontentscreen_confirmation', {
              locale: language,
            })}
            icon={<ConfirmationSvg />}
          />
          <DrawerButton
            onPress={() =>
              props.navigation.navigate(RouteTypes.MATERIALS_SCREEN)
            }
            label={I18n.t('drawercontentscreen_materials', {locale: language})}
            icon={<MaterialSvg />}
          />
          <DrawerButton
            onPress={() => props.navigation.navigate(RouteTypes.REPORT_SCREEN)}
            label={I18n.t('drawercontentscreen_report', {locale: language})}
            icon={<ReportSvg />}
          />
          <DrawerButton
            onPress={() =>
              props.navigation.navigate(RouteTypes.SETTINGS_SCREEN)
            }
            label={I18n.t('drawercontentscreen_settings', {locale: language})}
            icon={<SettingsSvg />}
          />
        </ScrollView>
        <View style={drawerContentStyles.bottom}>
          <DrawerButton
            onPress={() => props.navigation.navigate(RouteTypes.PROFILE_SCREEN)}
            label={I18n.t('drawercontentscreen_profile', {locale: language})}
            icon={<UserSvg />}
          />
          <DrawerButton
            onPress={() => {
              dispatch(AuthActions.setUser(null));
            }}
            label={I18n.t('drawercontentscreen_logout', {locale: language})}
            icon={<LogoutSvg />}
          />
        </View>
      </View>
    </View>
  );
});
export default DrawerContent;

const drawerContentStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2efea',
  },
  shadown: {
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3.84,
    shadowOpacity: 0.24,
    elevation: 5,
  },
  bottom: {
    marginBottom: 10,
  },
});
