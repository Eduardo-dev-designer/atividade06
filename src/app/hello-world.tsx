import { Alert, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function HelloWorld() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        {[1, 2, 3].map(n => <Text key={n} onPress={() => Alert.alert('Hello World', `Botão ${n} pressionado.`)} style={styles.botao}>{n}</Text>)}
      </View>
      <Text style={styles.texto}>HELLO{'\n'}WORLD</Text>
      <Text style={styles.voltar} onPress={() => router.back()}>Voltar</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, margin: 24, borderWidth: 2, borderColor: '#222', borderRadius: 9, padding: 20 },
  menu: { flexDirection: 'row', justifyContent: 'flex-end', gap: 8 },
  botao: { borderWidth: 1, borderColor: '#222', padding: 10, minWidth: 38, textAlign: 'center', fontSize: 17 },
  texto: { flex: 1, textAlignVertical: 'center', fontSize: 32, lineHeight: 40, color: '#111' },
  voltar: { padding: 10, textAlign: 'center' },
});
