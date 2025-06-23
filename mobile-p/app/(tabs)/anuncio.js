import { Text, View } from "react-native";

import styles from "@/styles/ProfileStyles.js";

export default function Anuncio() {
  return (
    <View styles={styles.container}>
      <View className="header" styles={styles.head}>
        <View className="Titulo">
          <Text styles={styles.type}> criar anuncio</Text>
        </View>
        <View className="settings"></View>
      </View>
    </View>
  );
}
