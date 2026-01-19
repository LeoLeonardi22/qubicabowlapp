import {
  Button,
  TamaguiProvider,
  Text,
  View,
} from "tamagui";
import { config } from "tamagui.config";

export default function TabTwoScreen() {
  return (
    <TamaguiProvider config={config}>
        <Text>This is the two tab</Text>
        <Button>yex!!</Button>
    </TamaguiProvider>
  );
}