import { MD3DarkTheme as DefaultTheme, } from 'react-native-paper';

import {
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

const ltcodetheme = {
  ...DefaultTheme,
  ...NavigationDarkTheme,
  roundness: 6,
  colors: {
    ...DefaultTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: 'tomato',
    onPrimary: 'red',
    primaryContainer: 'tomato',
    onPrimaryContainer: '#fff',
    secondary: 'yellow',
  },
};

export default ltcodetheme;