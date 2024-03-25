import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "react-native-paper";
import ltcodetheme from '../../configs/theme';

import Home from '../screens/Home';
import NewItem from '../screens/NewItem';
import Settings from '../screens/Settings';
import ItemDetails from '../screens/ItemDetail';
import ItemEdit from '../screens/ItemEdit';

type StackParamsList = {
  Home: undefined;
  NewItem: undefined;
  ItemDetails: undefined;
  ItemEdit: undefined;
}

export type RouterTypes = StackNavigationProp<StackParamsList>;

const Stack = createStackNavigator();

const MyStack = () => {
  const navigation = useNavigation<RouterTypes>();

  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerRight: (props) => <IconButton {...props} icon="cog" onPress={() => navigation.navigate("Setteings")} />,
          }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="NewItem" component={NewItem} />
        <Stack.Screen name="Setteings" component={Settings} />
        <Stack.Screen name="ItemDetails" component={ItemDetails} />
        <Stack.Screen name="ItemEdit" component={ItemEdit} />
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
