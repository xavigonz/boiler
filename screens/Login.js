import { View, Alert } from 'react-native';
import { Text, Button, ButtonText, Input, InputField, Image } from '@gluestack-ui/themed'
import { useState } from 'react';
import { supabase } from '../supabase';
import logo from "../assets/logo.png"
import Loading from "../components/Loading"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Sign in with email and password
  const onSignInPress = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  };

  // Create a new user
  const onSignUpPress = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    else Alert.alert('Check your email for the confirmation link to complete your account!');
    setLoading(false);
  };

  if (loading) return <Loading/>

  return (
    <View style={{
      flex: 1,
      maxWidth: 800,
      minHeight: 250,
      gap: 10,
      padding: 20,
      justifyContent: 'center',
      margin: 'auto'
    }}>
      <Image source={logo} size="2xl" alt="boiler" alignSelf='center'/> 
      <Text size="2xl" bold alignSelf='center'>Co-pilot for entrepeneurs</Text>
      <View style={{marginVertical: 10, gap: 10, padding: 20}}>
        <Input>
          <InputField 
            placeholder="Votre email" 
            value={email} 
            onChangeText={setEmail}
          />
        </Input>
        <Input>
          <InputField 
            type="password" 
            placeholder="Mot de passe" 
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </Input>
        <Button onPress={onSignInPress}>
          <ButtonText>Se connecter</ButtonText>
        </Button>
        <Button onPress={onSignUpPress} variant="link">
          <ButtonText>Créer un compte</ButtonText>
        </Button>
      </View>
    </View>
  );
};

export default Login;
