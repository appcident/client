import React from 'react';
import { StyleSheet, Text,
        View, Image, TextInput } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
            style={styles.imgWrapper}
            source={require('../assets/images/logo.png')} />
        <TextInput 
            style={styles.inputBox}
            placeholder="Type here..."/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#b9b9b9',
    // marginTop: 25,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  imgWrapper: {
    width: '45%', 
    height: 40,
  },
  inputBox: {
    marginTop: 10,
    width: '80%' ,
    height: 35,
    borderWidth: 1 ,
    borderRadius: 5,
    borderColor: '#f2f2f2',
  }
});