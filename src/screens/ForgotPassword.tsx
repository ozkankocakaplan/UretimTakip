import React from 'react';
import {SafeAreaView} from 'react-native';
import ForgotPasswordForm from '../sections/Auth/ForgotPasswordForm';

export default function ForgotPassword() {
  return (
    <SafeAreaView className="flex-1 bg-[#D8B267]">
      <ForgotPasswordForm />
    </SafeAreaView>
  );
}
