import {
  Button,
  TamaguiProvider,
  Text,
  View,
} from "tamagui";
import { config } from "tamagui.config";

export default function TabTwoScreen() {
  return (
    <TamaguiProvider config={config} defaultTheme="dark">
      <View flex={1} items="center" justify="center" bg="$background">
        <Text>This is the two tab</Text>
        <Button theme="accent">yex!!</Button>
      </View>
    </TamaguiProvider>
  );
}
