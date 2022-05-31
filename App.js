import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';

const RootStack = createStackNavigator({
Home: {
  screen: HomeScreen
},

});

const App = createAppContainer(RootStack);

export default App;
