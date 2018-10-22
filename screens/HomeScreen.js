import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  StyleSheet,
  AppRegistry,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground,
   Button,
} from 'react-native'

const { width } = Dimensions.get('window');

export default class HomeScreen extends React.Component {


  componentDidMount() {
  setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
}


  render() {
    return (
      <View style={styles.container}>
      <ScrollView
     ref={(scrollView) => { this.scrollView = scrollView; }}
     //style={styles.container}
     //pagingEnabled={true}
     style={styles.scrollView}
     horizontal= {true}
     decelerationRate={0}
     snapToInterval={width - 60}
     snapToAlignment={"center"}
     contentInset={{
       top: 0,
       left: 30,
       bottom: 0,
       right: 30,
     }}>
     <ImageBackground source={require('../btc-shape.png')} style={styles.view} />
     <ImageBackground source={require('../btc-shape.png')} style={styles.view2} />
     <ImageBackground source={require('../btc-shape.png')} style={styles.view3} />
     <ImageBackground source={require('../btc-shape.png')} style={styles.view} />
     <ImageBackground source={require('../btc-shape.png')} style={styles.view2} />
     <ImageBackground source={require('../btc-shape.png')} style={styles.view3} />
   </ScrollView>

        <Text  >Welcome Screen</Text>
        <Button
          title="Generate Wallet"
          onPress={() => this.props.navigation.navigate('AddWallet')}
        />
        <Button
          title="Settings"
          onPress={() => this.props.navigation.navigate('settings')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView:{
    flex: 4,
  },
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    borderRadius: 4,
    marginBottom: 15,
    paddingVertical: 8,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#00cc44',
  },
  buttonText: {
    color: '#fff',
  },
  address: {
    flex: 1,
    fontSize: 10,
    color: '#b5b5b5',
    fontWeight: '600',
    textAlign: 'center',
  },
  view: {
    marginTop: 10,
    backgroundColor: '#64b5f6',
    width: width - 80,
    margin: 10,
    height: 180,
    borderRadius: 10,
    //paddingHorizontal : 30
  },
  view2: {
    marginTop: 10,
    backgroundColor: '#8bc34a',
    width: width - 80,
    margin: 10,
    height: 180,
    borderRadius: 10,
    //paddingHorizontal : 30
  },
  view3: {
    marginTop: 10,
    backgroundColor: '#ffa726',
    width: width - 80,
    margin: 10,
    height: 180,
    borderRadius: 10,
    //paddingHorizontal : 30
  },
})
