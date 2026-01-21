import {
  Button,
  H3,
  H4,
  YStack,
  XStack,
  ScrollView,
} from "tamagui";

import { ChevronRight } from "@tamagui/lucide-icons";

import { UserGreeting } from "components/dashboard/UserGreeting";
import { BookingCard } from "components/dashboard/BookingCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CenterCard } from "components/dashboard/CenterCard";
import { ChallengeCard } from "components/dashboard/ChallengeCard";
import { HighlightCard } from "components/dashboard/RentHighlights";
import { VisitCard } from "components/dashboard/VisitCard";
import { StatsQuickView } from "components/shared/StatsQuickView";

import {
  challenges,
  nearbyCenters,
  recentHighlights,
  upcomingVisits,
} from "data/mockData";

export default function TabOneScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      bg="$background"
      gap="$4"
      contentContainerStyle={{
        pb: insets.bottom + 16,
        pt: insets.top - 64,
      }}
    >
      <UserGreeting />
      <BookingCard />
      <YStack gap="$3" mx="$4" mb="$2">
        <H4>Challenge in atto</H4>
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </YStack>

      <YStack px="$4" mt="$4" mb="$4" gap="$3">
        <H3>Statistiche</H3>
        <StatsQuickView />
        <Button size="$4" variant="outlined" iconAfter={ChevronRight}>
          See Details
        </Button>
      </YStack>

      <YStack mt="$4" gap="$2" mb="$3">
        <XStack jc="space-between" ai="center" px="$4">
          <H4>Ultimi risultati</H4>
          <Button size="$4" chromeless iconAfter={ChevronRight}>
            View All
          </Button>
        </XStack>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <XStack gap="$2" px="$4">
            {recentHighlights.map((highlight) => (
              <HighlightCard key={highlight.id} highlight={highlight} />
            ))}
          </XStack>
        </ScrollView>
      </YStack>

      <YStack mt="$4" gap="$3" mb="$3">
        <XStack jc="space-between" ai="center" px="$4">
          <H4>Prenotazioni attive</H4>
        </XStack>
        {upcomingVisits.map((visit) => (
          <VisitCard key={visit.id} visit={visit} />
        ))}
      </YStack>

      <YStack mt="$4" gap="$3" mb="$3">
        <XStack jc="space-between" ai="center" px="$4">
          <H4>📍 NEARBY CENTERS</H4>
        </XStack>
        {nearbyCenters.map((center) => (
          <CenterCard key={center.id} center={center} />
        ))}
      </YStack>
    </ScrollView>
  );
}
