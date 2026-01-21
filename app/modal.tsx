import { View, XStack, YStack, Stack, Avatar, Button, Input, } from "tamagui";
import { Pencil, } from "@tamagui/lucide-icons";

export default function ModalScreen() {
  return (
    <View ai="center"
    pt="$4"
    >
      <YStack  m="$4" gap="$2">
        <YStack ai="center">
          <Avatar circular size="$8" m="$-3">
            <Avatar.Image
              accessibilityLabel="Nate Wienert"
              src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80"
            />
            <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
          </Avatar>
          <Button
            size="$1"
            circular
            theme="accent"
            fontWeight="bold"
            icon={Pencil}
          ></Button>
        </YStack>
        <Input placeholder="Nome" size="$4">Leo Leonardi </Input>
      </YStack>
    </View>
  );
}
