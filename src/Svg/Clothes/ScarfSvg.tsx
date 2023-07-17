import {View, Text} from 'react-native';
import React from 'react';
import {G, Path, Svg} from 'react-native-svg';

export default function ScarfSvg({color = '#C9C9C9'}: SvgProps) {
  return (
    <Svg fill={color} width="31" height="24" viewBox="0 0 512 512">
      <G>
        <G>
          <Path
            d="M375.716,0c-4.428,0-8.017,3.588-8.017,8.017v43.29h-18.171V8.017c0-4.428-3.588-8.017-8.017-8.017
           c-4.428,0-8.017,3.588-8.017,8.017v43.29h-18.171V8.017c0-4.428-3.588-8.017-8.017-8.017c-4.428,0-8.017,3.588-8.017,8.017v43.29
           h-18.171V8.017c0-4.428-3.588-8.017-8.017-8.017c-4.428,0-8.017,3.588-8.017,8.017v43.29h-18.171V8.017
           c0-4.428-3.588-8.017-8.017-8.017s-8.017,3.588-8.017,8.017v43.29H212.71V8.017c0-4.428-3.588-8.017-8.017-8.017
           s-8.017,3.588-8.017,8.017v120.25h-43.29c-13.851,0-25.119,11.268-25.119,25.119v350.597c0,4.428,3.588,8.017,8.017,8.017
           s8.017-3.588,8.017-8.017v-43.29h18.171v43.29c0,4.428,3.588,8.017,8.017,8.017s8.017-3.588,8.017-8.017v-43.29h18.171v43.29
           c0,4.428,3.588,8.017,8.017,8.017s8.017-3.588,8.017-8.017v-43.29h18.171v43.29c0,4.428,3.588,8.017,8.017,8.017
           s8.017-3.588,8.017-8.017v-43.29h18.171v43.29c0,4.428,3.588,8.017,8.017,8.017c4.428,0,8.017-3.588,8.017-8.017v-43.29h18.171
           v43.29c0,4.428,3.588,8.017,8.017,8.017c4.428,0,8.017-3.588,8.017-8.017V383.733h43.29c13.851,0,25.119-11.268,25.119-25.119
           V8.017C383.733,3.588,380.145,0,375.716,0z M162.472,358.614v86.046h-18.171V153.386c0-5.01,4.076-9.086,9.086-9.086
           s9.086,4.076,9.086,9.086V358.614z M212.71,358.614V67.34h18.171v291.273c0,5.01-4.076,9.086-9.086,9.086H211.01
           C212.107,364.881,212.71,361.816,212.71,358.614z M176.798,144.301h19.878v214.313c0,5.01-4.076,9.086-9.086,9.086
           s-9.086-4.076-9.086-9.086V153.386C178.505,150.183,177.896,147.12,176.798,144.301z M265.086,444.66h-86.58v-62.634
           c2.82,1.098,5.882,1.707,9.086,1.707h77.495V444.66z M299.29,444.66h-18.171v-60.927h18.171V444.66z M333.495,358.614
           c0,5.01-4.076,9.086-9.086,9.086h-79.202c1.098-2.82,1.707-5.882,1.707-9.086V67.34h86.58V358.614z M367.699,358.614
           c0,5.01-4.076,9.086-9.086,9.086h-10.793c1.098-2.82,1.707-5.882,1.707-9.086V67.34h18.171V358.614z"
          />
        </G>
      </G>
    </Svg>
  );
}