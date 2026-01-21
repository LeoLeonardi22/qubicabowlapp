import { Button, Card, H3, H4, Input, XStack, YStack, Image } from "tamagui";
import { LinearGradient } from 'tamagui/linear-gradient'


export const BookingCard = () => {
  return (
    <Card
  elevate
  p="$4"
  mx="$4"
  mb="$4"
  pressStyle={{ scale: 0.98 }}
  animation="bouncy"
  height={220}
  overflow="hidden"
  jc="flex-end"
>
  {/* Contenuto in primo piano */}
  <YStack gap="$4" zIndex={2} position="relative">
    <XStack alignItems="center" gap="$2">
      <H4 color="$white2">Book next Session</H4>
    </XStack>
    <Button size="$5" theme="accent" fontWeight="bold">
      PRENOTA PISTA
    </Button>
  </YStack>

  {/* Gradiente sopra l'immagine */}
  <LinearGradient
    position="absolute"
    bottom={0}
    left={0}
    right={0}
    height="100%"
    zIndex={1}
    colors={['$black2', 'transparent']}  // ← da background token a trasparente
    start={[0, 1]}  // ← bottom
    end={[0, 0]}    // ← top
  />

  {/* Immagine di sfondo */}
  <Card.Background>
    <Image
      width="100%"
      height="100%"
      objectFit="cover"
      source={ {
        uri: "https://bowlingfrenz.it/wp-content/uploads/2024/05/bowlingfrenz3-800x533.jpg"
      }} 
    />
  </Card.Background>
</Card>
  );
};
