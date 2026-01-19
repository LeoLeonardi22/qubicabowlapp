import { Link, Tabs } from "expo-router";
import { Button, useTheme } from "tamagui";
import { Home, AudioWaveform } from "@tamagui/lucide-icons";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: theme.accent10?.get() ?? '#ff0000', // ← optional chaining + fallback
        tabBarStyle: {
          backgroundColor: theme.background?.get() ?? '#ffffff',
          borderTopColor: theme.borderColor?.get() ?? '#cccccc',
        },
        headerStyle: {
          backgroundColor: theme.background?.get() ?? '#ffffff',
          borderBottomColor: theme.borderColor?.get() ?? '#cccccc',
        },
        headerTintColor: theme.color?.get() ?? '#000000',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab One",
          tabBarIcon: ({ color }) => <Home color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Button marginRight="$4" size="$2.5"> {/* ← usa marginRight invece di mr */}
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
  );
}