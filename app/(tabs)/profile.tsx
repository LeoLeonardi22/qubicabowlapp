import { LinearGradient } from "react-native-svg";
import {
  Button,
  Text,
  H3,
  H4,
  H5,
  YStack,
  XStack,
  Avatar,
  ScrollView,
  Card,
  Progress,
} from "tamagui";

import { StatsQuickView } from "components/shared/StatsQuickView";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Plus,
  Share,
  SmilePlus,
  Info,
  Banana,
  Baby,
  Award,
  BicepsFlexed,
  Crown,
} from "@tamagui/lucide-icons";

export default function TabTwoScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      bg="$background"
      gap="$4"
      contentContainerStyle={{
        pb: insets.bottom + 16,
        pt: insets.top + 16,
      }}
    >
      <YStack mb="$4" alignItems="center">
        <YStack ai="center">
          <Avatar circular size="$8" m="$-3">
            <Avatar.Image
              accessibilityLabel="Nate Wienert"
              src="https://lh3.googleusercontent.com/a/ACg8ocLP2Q39Mb5ednSr-XmrAvxdSNa7Z-4CCxzXS7h-w97yiq8SH4N9dw=s576-c-no"
            />
            <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
          </Avatar>
          <Text
            bg="#414bff"
            br="$2"
            color="#fff"
            fontWeight="bold"
            p="$1"
            px="$2"
          >
            Strike Master
          </Text>
        </YStack>
        <H4>Leo Leonardi</H4>
        <H5>UX/UI Engineer</H5>
      </YStack>

      <YStack px="$4" mt="$4" mb="$4" gap="$3">
        <StatsQuickView />
        <Button size="$4" variant="outlined" icon={Share}>
          Condividi
        </Button>
      </YStack>

      <YStack mt="$4" mb="$3" px="$4">
        <XStack jc="space-between" ai="center">
          <H4>Amici</H4>
          <Button size="$5" chromeless p="$0" icon={Plus}>
            Invita
          </Button>
        </XStack>
        <Card
          ai="center"
          jc="center"
          bordered
          borderStyle="dashed"
          borderWidth="$1"
          height="200"
          bg=""
          p="$4"
        >
          <SmilePlus size="$4"></SmilePlus>
          <H4>Nessun Amico</H4>
          <H5 textAlign="center">
            Non hain ancora invitato nessun amico, crea la tua Gang!
          </H5>
        </Card>
      </YStack>

      <YStack mt="$4" mb="$3" px="$4" gap="$2">
        <XStack jc="space-between" ai="center">
          <H4>Badges</H4>
          <Info></Info>
        </XStack>

        <Card p="$4" bg="$green4">
          <XStack gap="$1" ai="center" pb="$1">
            <Baby size="$2" color="$green10"></Baby>
            <Text fontSize="$5" fontWeight="bold" color="$green10">Beginner</Text>
          </XStack>
          <YStack gap="$2">
            <Progress value={100} height={8}>
              <Progress.Indicator animation="bouncy" />
            </Progress>
            <Text fontSize="$4" color="$primarylight" fontWeight="bold">
              {100}/{100} XP
            </Text>
          </YStack>
        </Card>

        <Card p="$4" bg="$green4">
          <XStack gap="$1" ai="center" pb="$1">
            <Banana size="$2" color="$green10"></Banana>
            <Text fontSize="$5" fontWeight="bold" color="$green10">Banana Spare</Text>
          </XStack>
          <YStack gap="$2">
            <Progress value={100} height={8}>
              <Progress.Indicator animation="bouncy" />
            </Progress>
            <Text fontSize="$4" color="$primarylight" fontWeight="bold">
              {100}/{100} XP
            </Text>
          </YStack>
        </Card>

        <Card
          px="$4"
          py="$3"
          bordered
          borderColor="$accent10"
          borderWidth="$1.5"
        >
          <YStack>
            <XStack gap="$1" ai="center" pb="$1">
              <Award size="$2" color="$accent10"></Award>
              <Text fontSize="$5" fontWeight="bold" color="$accent10">Strike Master</Text>
            </XStack>
            <YStack gap="$2">
              <Progress value={70} height={8}>
                <Progress.Indicator animation="bouncy" />
              </Progress>
              <Text fontSize="$4" color="$primarylight" fontWeight="bold">
                {70}/{100} XP
              </Text>
            </YStack>
          </YStack>
        </Card>

        <Card p="$4">
          <XStack gap="$1" ai="center" pb="$1">
            <BicepsFlexed size="$2"></BicepsFlexed>
            <Text fontSize="$5" fontWeight="bold">Pro Bowler</Text>
          </XStack>
          <YStack gap="$2">
            <Progress value={5} height={8}>
              <Progress.Indicator animation="bouncy" />
            </Progress>
            <Text fontSize="$4" color="$primarylight" fontWeight="bold">
              {0}/{100} XP
            </Text>
          </YStack>
        </Card>

        <Card p="$4">
          <XStack gap="$1" ai="center" pb="$1">
            <Crown size="$2"></Crown>
            <Text fontSize="$5" fontWeight="bold">Leggend</Text>
          </XStack>
          <YStack gap="$2">
            <Progress value={5} height={8}>
              <Progress.Indicator animation="bouncy" />
            </Progress>
            <Text fontSize="$4" color="$primarylight" fontWeight="bold">
              {0}/{100} XP
            </Text>
          </YStack>
        </Card>
      </YStack>
    </ScrollView>
  );
}
