import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
//-----------------------

function APP2(props) {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
    />
  );
}


export default function App() {

  const [value, onChangeText] = React.useState('App');

  

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app?!</Text>
      <Button
        title="press me"
        onPress={()=>Alert.alert('simple button pressed')}
        color ="green"/>

      <APP2
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
        backgroundColor="gray"
      />      
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});