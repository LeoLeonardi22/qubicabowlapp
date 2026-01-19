import { Link, Tabs } from "expo-router";
import { Button, TamaguiProvider,} from "tamagui";
import { Home, AudioWaveform } from "@tamagui/lucide-icons";
import { config } from 'tamagui.config'

export default function TabLayout() {
  return (
    <TamaguiProvider config={config} defaultTheme="accent">
        <Tabs
          screenOptions={{
            headerShown: true,
            tabBarActiveTintColor: "hsla(0, 70%, 53%, 1)",
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Tab One",
              tabBarIcon: ({ color }) => <Home color={color} />,
              headerRight: () => (
                <Link href="/modal" asChild>
                  <Button mr="$4" size="$2.5">
                    Hello!
                  </Button>
                </Link>
              ),
            }}
          />
          <Tabs.Screen
            name="two"
            options={{
              title: "Tab Two",
              tabBarIcon: ({ color }) => <AudioWaveform color={color} />,
            }}
          />
        </Tabs>
    </TamaguiProvider>
  );
}
