import { StyleSheet, Text, View } from 'react-native';

export default function Empresa() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Dados do funcionário</Text>
      <Text>Funcionário: Empresa X</Text>
      <Text>Idade: 16</Text>
      <Text>Setor: TI</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 12, justifyContent: 'center' },
  titulo: { fontSize: 24, fontWeight: '700', marginBottom: 8 },
});
