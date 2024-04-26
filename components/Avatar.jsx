import { Pressable } from 'react-native'
import { Avatar, AvatarFallbackText, AvatarImage, Icon } from '@gluestack-ui/themed'
import { User } from 'lucide-react-native'

export default ({user, size="md", icon, navigation}) => {

  function getInitials(name) {
    let initials = name.match(/\b\w/g) || []; // Get the first letter of each word
    initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase(); 
    return initials;
  } 

  return (
    <Pressable
      onPress={() => navigation.navigate('Profil', {userId: user.id})}
      disabled={!user || !navigation}
    >
      <Avatar size={size}>
        {user?.avatar_url 
          ? <AvatarImage source={{uri: user.avatar_url}} alt={user.full_name}/> 
          : user?.full_name
          ? <AvatarFallbackText>{getInitials(user.full_name)}</AvatarFallbackText> 
          : <Icon as={icon ? icon : User} color="$white"/>
        }
      </Avatar>
    </Pressable>
  )
}
