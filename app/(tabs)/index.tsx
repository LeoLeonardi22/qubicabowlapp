import { Button, View, Text, Card, Paragraph, H2, Image, XStack } from "tamagui";

export default function TabOneScreen() {
  return (
    <View 
      flex={1} 
      alignItems="center"  // ← items → alignItems
      justifyContent="center"  // ← justify → justifyContent
      bg="$background" 
      gap="$4"
    >
      <Text>This is tab one</Text>
      <Button>yex!!</Button>
      <Card elevate size="$4" bordered>
        <Card.Header padded>
          <H2>Sony A7IV</H2>
          <Paragraph>Now available</Paragraph>
        </Card.Header>
        <Card.Footer padded>
          <XStack flex={1} />
          <Button borderRadius="$10" theme="accent"> 
            Purchase
          </Button>
        </Card.Footer>
        <Card.Background>
          <Image
            objectFit="contain"
            alignSelf="center"  
            source={{
              width: 300,
              height: 300,
              uri: "data:image/png;base64,...",
            }}
          />
        </Card.Background>
      </Card>
    </View>
  );
}