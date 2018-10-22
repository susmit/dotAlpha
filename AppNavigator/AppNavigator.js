import { StackNavigator } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import AddWallet  from '../screens/AddWallet'
import settings from '../screens/settings'

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    AddWallet : {
      screen: AddWallet ,
    },
    settings : {
      screen: settings ,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default RootStack;
