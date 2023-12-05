import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";

export default function App() {
  return (
      <NativeBaseProvider>
       <Box flex={1} alignItems="center" justifyContent="center">Hello world</Box>
      </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0708'
  },
});
