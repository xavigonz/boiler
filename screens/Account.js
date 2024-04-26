import { Text, Button, Center, ButtonText } from '@gluestack-ui/themed'
import { useAuth } from '../components/AuthProvider';

export default () => {
  const { signOut } = useAuth();

 return  (
    <Center flex={1} gap="$3">
      <Text>To be done</Text>
      <Button onPress={signOut}>
        <ButtonText>Se déconnecter</ButtonText>
      </Button>
    </Center>
  )
}