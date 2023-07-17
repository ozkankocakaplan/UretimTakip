import {SafeAreaView} from 'react-native';
import React from 'react';
import LoginForm from '../sections/Auth/LoginForm';

export default function Login() {
  return (
    <SafeAreaView className="flex-1 bg-[#D8B267]">
      <LoginForm />
    </SafeAreaView>
  );
}
