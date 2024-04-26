import { Alert, AlertIcon, AlertText, VStack } from '@gluestack-ui/themed'
import { Info } from "lucide-react-native"

export default ({action, title, subtitle}) => (
  <Alert action="info">
    <AlertIcon as={Info} size="xl" mr="$3" />
    <VStack space="xs" flex={1}>
      <AlertText fontWeight="$bold">{title}</AlertText>
      <AlertText >{subtitle}</AlertText>
    </VStack>
  </Alert>
)