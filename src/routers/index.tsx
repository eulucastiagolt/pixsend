import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import ltcodetheme from '../../configs/theme';


import Home from '../screens/Home';
import NewItem from '../screens/NewItem';
import Settings from '../screens/Settings';
import { IconButton } from 'react-native-paper';

type StackParamsList = {
  Home: undefined;
  NewItem: undefined;
}

export type RouterTypes = StackNavigationProp<StackParamsList>;

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerRight: (props) => <IconButton {...props} icon="cog" onPress={() => alert("This is a button!")} />,
          }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="NewItem" component={NewItem} />
        <Stack.Screen name="Setteings" component={Settings} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer theme={ltcodetheme}>
      <MyStack />
    </NavigationContainer>
  );
};

export default Router;
