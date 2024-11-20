import { useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
  Appearance,
  Button,
} from "react-native";

export default function App() {
  const scheme = useColorScheme();
  const [, forceRender] = useState<{}>();

  const schemeOptions = ["light", "dark", null, undefined] as const;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ textAlign: "center", marginBottom: 8 }}>
        Current scheme: {String(scheme)}
      </Text>

      <View style={{ gap: 2 }}>
        {schemeOptions.map((o, index) => (
          <Button
            key={index}
            title={String(o)}
            onPress={() => {
              Appearance.setColorScheme(o);
              forceRender({});
            }}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
