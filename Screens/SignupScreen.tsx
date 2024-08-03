import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';

import { NavigationProp } from '@react-navigation/native';

const SignupScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  const [form, setForm] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    businessAddress: '',
    emergencyContact: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.title}>Let's Get Started!</Text>
        </View>
        <Text style={styles.subtitle}>Account Information</Text>

        <KeyboardAwareScrollView>
          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>First Name</Text>
              <TextInput
                clearButtonMode="while-editing"
                onChangeText={(firstName) =>
                  setForm({ ...form, firstName })
                }
                placeholder="John"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.firstName}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>
                Middle Name (abbreviation)
              </Text>
              <TextInput
                clearButtonMode="while-editing"
                onChangeText={(middleName) =>
                  setForm({ ...form, middleName })
                }
                placeholder="A."
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.middleName}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Last Name</Text>
              <TextInput
                clearButtonMode="while-editing"
                onChangeText={(lastName) =>
                  setForm({ ...form, lastName })
                }
                placeholder="Doe"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.lastName}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Emergency Contact</Text>
              <TextInput
                clearButtonMode="while-editing"
                keyboardType='number-pad'
                onChangeText={(emergencyContact) =>
                  setForm({ ...form, emergencyContact })
                }
                placeholder="+233"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.emergencyContact}
              />
            </View>

            <View style={styles.seperatorView}>
      <View
          style={{
            flex: 1,
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <Text style={styles.seperator}>School Information</Text>
        <View
          style={{
            flex: 1,
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </View>


            <View style={styles.input}>
              <Text style={styles.inputLabel}>Email Address</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                keyboardType="email-address"
                onChangeText={(businessAddress) =>
                  setForm({ ...form, businessAddress })
                }
                placeholder="john@st.knust.edu.gh"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.businessAddress}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={(password) =>
                  setForm({ ...form, password })
                }
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={form.password}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Confirm Password</Text>
              <TextInput
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={(confirmPassword) =>
                  setForm({ ...form, confirmPassword })
                }
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={form.confirmPassword}
              />
            </View>
            <View style={styles.checkboxContainer}>
  <TouchableOpacity onPress={() => {
    // Handle checkbox state change
  }}>
    <View style={[styles.checkbox, form.agree ? styles.checked : null]}>
      {form.agree && <Ionicons name="checkmark-outline" size={24} color={Colors.primary} />}
    </View>
  </TouchableOpacity>
   <Text style={styles.checkboxLabel}>Agree to Terms & Conditions</Text>
</View>

            <View style={styles.formAction}>
              
              <TouchableOpacity 
              onPress={() => navigation.navigate('Main')}>
                <View style={defaultStyles.btn}>
                  <Text style={styles.btnText}>Get Started</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 35,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    backgroundColor: '#FFF1DE ',
  },
  title: {
    fontSize: 31,
    textAlign: 'center',
    fontFamily: 'mon-b',
    color: '#1D2A32',
    marginBottom: 6,
    flex: 1,
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'mon-sb',
    color: '#929292',
    marginBottom: 15,
    marginTop: -5
  },
  /** Header */
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    paddingHorizontal: 24,
    flexDirection: 'row',
  },
  headerBack: {
    padding: 8,
    paddingTop: 0,
    position: 'absolute',
    left: 24,
  },
  /** Form */
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  seperatorView:{
    flexDirection:'row',
    gap: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  seperator: {
    fontFamily: 'mon-sb',
    color: '#929292',
    fontSize: 16,
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontFamily: 'mon-sb',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontFamily: 'mon',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#6b7280',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checked: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  checkboxLabel: {
    fontSize: 15,
    textDecorationLine: 'underline',
    color: '#6b7280',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontFamily: 'mon-sb',
    color: '#fff',
  },
});

export default SignupScreen;