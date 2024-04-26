import { ScrollView, View } from "react-native"
import { Card, Text } from '@gluestack-ui/themed'
import Loading from "../components/Loading"
import useGetUsers from "../hooks/useGetUsers"

export default function Home({ navigation }) {
  const { isPending, data: users } = useGetUsers()

  console.log(users)

  if (isPending) { return <Loading/> }

  return (
    <ScrollView>
      <View style={{flex: 1}}>
        {users.data.map((user, index) => (
          <Card m="$3" gap="$2" my="$1.5" variant="outline" borderWidth={3}>
            <Text>{user.full_name}</Text>
          </Card>
        ))}
      </View>
    </ScrollView>
  )
}