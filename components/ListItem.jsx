import { HStack, VStack, Text, Divider } from '@gluestack-ui/themed'
import { Platform } from 'react-native';

export default ({left, title, subtitle, right, text}) => (
  <VStack>
    <HStack space="md" p="$4" alignItems="center">
      <VStack>{left}</VStack>
      <VStack flex={1}>
        <Text isTruncated bold>{title}</Text>
        <Text isTruncated numberOfLines={2} color="$textDark500">{subtitle}</Text>
      </VStack>
      <VStack ml="auto" mr={Platform.OS === 'web' && 10} space="xs">
        {right}
      </VStack>
    </HStack>
    {text && 
      <VStack px="$4" mb="$3">
        <Text>{text}</Text>
      </VStack>
    }
    <Divider/>
  </VStack>
)

