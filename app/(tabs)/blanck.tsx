import { Button, Text, View } from "tamagui";

export default function TabTwoScreen() {
  return (
    <View
      flex={1}
      alignItems="center" // ← items → alignItems
      justifyContent="center" // ← justify → justifyContent
      bg="$background"
      gap="$4"
    >
      <Text>This is the two tab</Text>
      <Button>yex!!</Button>
    </View>
  );
}
