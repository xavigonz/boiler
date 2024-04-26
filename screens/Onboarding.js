import Swiper from 'react-native-web-swiper'
import { Text, View } from 'react-native';

const Onboarding = () => {
  return (
    <Swiper showsButtons={true}>
      <View>
        <Text>Hello Swiper</Text>
      </View>
      <View>
        <Text>Beautiful</Text>
      </View>
      <View>
        <Text>And simple</Text>
      </View>
    </Swiper>
  )
}

export default Onboarding;