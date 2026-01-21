import { Link, Tabs } from "expo-router";
import { Button, useTheme } from "tamagui";
import { Home, AudioWaveform, Settings2 } from "@tamagui/lucide-icons";


export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: theme.accent10?.get() ?? "#ff0000", // ← optional chaining + fallback
        tabBarStyle: {
          backgroundColor: theme.background?.get() ?? "#ffffff",
          borderTopColor: theme.borderColor?.get() ?? "#cccccc",
        },
        headerStyle: {
          backgroundColor: theme.background?.get() ?? "#ffffff",
          borderBottomColor: theme.borderColor?.get() ?? "#cccccc",
        },
        headerTintColor: theme.color?.get() ?? "#000000",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <AudioWaveform color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Button size="$2.5" m="$4" variant="outlined" icon={Settings2} circular></Button>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}
