import './shim'
import Bitcoin from 'react-native-bitcoinjs-lib'
import bip39 from 'react-native-bip39'
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
} from 'react-native'

const { width } = Dimensions.get('window');

export default class DotAlpa extends Component {

  componentDidMount() {
  setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
}

  constructor(props) {
    super(props)

    this.state = {
      address: 'Your address will appear here',
      mnemonic: 'Your mnemonics will appear here',
      seed: 'Your seed ',
      seedHex: 'Your seed in hex',
      passphrase: "Enter passphrase",
    }
  }


///generates mnemonics and convert them to seed
  generateMnemonic = async () => {
    let mnemonic = await bip39.generateMnemonic() // default 128
    let value = this.state.passphrase
    console.log(value)
    if (value == "Enter passphrase"){
       seed = bip39.mnemonicToSeed(mnemonic)
       seedHex = bip39.mnemonicToSeedHex(mnemonic)
    }
    else{
       seed = bip39.mnemonicToSeed(mnemonic,value)
       seedHex = bip39.mnemonicToSeedHex(mnemonic,value)
    }
    this.setState({mnemonic:mnemonic})
    this.setState({seed:seed})
    this.setState({seedHex:seedHex})
}


// generates address
  generateNewAddress = () => {
    const keypair = Bitcoin.ECPair.makeRandom()
    this.setState({address: keypair.getAddress()})
  }

  render() {
    return(
      <View style={styles.container}>

      <Text style={styles.title}>DotAlpha Bitcoin Wallet</Text>

      <ScrollView
     ref={(scrollView) => { this.scrollView = scrollView; }}
     //style={styles.container}
     //pagingEnabled={true}
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
     <ImageBackground source={require('./btc-shape.png')} style={styles.view} />
     <ImageBackground source={require('./btc-shape.png')} style={styles.view2} />
     <ImageBackground source={require('./btc-shape.png')} style={styles.view3} />
     <ImageBackground source={require('./btc-shape.png')} style={styles.view} />
     <ImageBackground source={require('./btc-shape.png')} style={styles.view2} />
     <ImageBackground source={require('./btc-shape.png')} style={styles.view3} />
   </ScrollView>

        <TouchableOpacity onPress={this.generateNewAddress} style={styles.button}>
          <Text style={styles.buttonText}>Generate new address</Text>
        </TouchableOpacity>
          <Text style={styles.address}>{this.state.address}</Text>
        <TouchableOpacity onPress={this.generateMnemonic} style={styles.button}>
          <Text style={styles.buttonText}>Generate mnemonic</Text>
        </TouchableOpacity>
        <TextInput
          style={{height: 40, borderColor: '#b5b5b5', borderWidth: 1,marginBottom: 5}}
          onChangeText={(passphrase) => this.setState({passphrase})}
          value={this.state.passphrase}
        />
        <Text style={styles.address}>mnemonics: {this.state.mnemonic}</Text>
        <Text style={styles.address}>{this.state.passphrase}</Text>
        <Text style={styles.address}>seed: {this.state.seed}</Text>
        <Text style={styles.address}>seedHex: {this.state.seedHex}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    padding: 8,
    fontSize: 15,
    fontWeight: '900',
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
