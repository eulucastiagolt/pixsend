import Application from './src';
import { PaperProvider } from 'react-native-paper';

import ltcodetheme from './configs/theme';

export default function App() {
  return (
    <PaperProvider theme={ltcodetheme}>
      <Application />
    </PaperProvider>
  );
}
