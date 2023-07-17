import {
  View,
  Text,
  Animated,
  StyleSheet,
  FlatList,
  Dimensions,
  Platform,
} from 'react-native';
import React from 'react';
import Label from '../../components/Text/Label';
import I18n from '../../lang/_i18n';
import ProductionTrackingCard from '../../components/ProductionTrackingCard/ProductionTrackingCard';
import {useSelector} from 'react-redux';
import {AppState} from '../../store';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

interface ProductionTrackingProps {
  AnimatedHeaderValue: any;
}
export default function ProductionTracking(props: ProductionTrackingProps) {
  const {AnimatedHeaderValue} = props;
  const {language} = useSelector((state: AppState) => state.app);
  const Sheight = Dimensions.get('window').height;

  return (
    <View>
      <View style={styles.col}>
        <Label
          font="Raleway-Bold"
          sx={{color: '#5F5E70', fontSize: 15}}
          label={I18n.t('homescreen_trackingtitle', {locale: language})}
        />
        <Label
          font="Raleway-Bold"
          sx={{color: '#D8B267', fontSize: 12}}
          label={I18n.t('global_viewall', {locale: language})}
        />
      </View>
      <AnimatedFlatList
        contentInset={{bottom: 90}}
        style={{zIndex: 3, height: Dimensions.get('window').height - 200}}
        onScroll={e => {
          const scrollY = e.nativeEvent.contentOffset.y;
          if (
            scrollY >
            Sheight - e.nativeEvent.layoutMeasurement.height - 200
          ) {
            AnimatedHeaderValue.setValue(scrollY);
          } else {
            AnimatedHeaderValue.setValue(0);
          }
        }}
        contentContainerStyle={{justifyContent: 'space-between'}}
        scrollEventThrottle={Platform.OS === 'ios' ? 16 : 0}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        ]}
        renderItem={({item}) => <ProductionTrackingCard />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  col: {
    marginTop: 15,
    marginBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
