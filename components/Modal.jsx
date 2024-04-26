import { useState } from 'react';
import { TouchableHighlight, View, Modal, Platform } from 'react-native';
import GestureRecognizer from "react-native-swipe-gestures"
 
export default ({children, trigger}) => {  
  const [ show, setShow ] = useState(false) 
  const closeModal = () => setShow(false)

  return (
    <GestureRecognizer
      onSwipeDown={ () => setShow(false) }
    >
      <Modal
        animationType={(Platform.OS === 'web') ? 'fade' : 'swipe'}
        transparent={true}
        visible={show}
        onRequestClose={() => setShow(false)}
      >
        <View style={{ backgroundColor: 'rgba(0,0,0,0.2)', flex:1}}>
          <View style={{ 
            flex: (Platform.OS === 'web') ? 'none' : 1,
            margin: 'auto',
            maxWidth: 600, 
            marginTop: 50,
            backgroundColor: 'white',
            borderRadius: 10,
          }}>
            <View style={{flex: 1}}>
              {children(closeModal)}
            </View>
          </View>
        </View>
      </Modal>

      <TouchableHighlight onPress={() => setShow(true)}>
        {trigger}
      </TouchableHighlight>
    </GestureRecognizer>
  );
}
