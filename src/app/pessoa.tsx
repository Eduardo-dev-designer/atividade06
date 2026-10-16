import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Pessoa() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nome e sobrenome</Text>
      <Text>Nome:</Text>
      <TextInput style={styles.input} placeholder="Digite seu nome" value={nome} onChangeText={setNome} />
      <Text>Sobrenome:</Text>
      <TextInput style={styles.input} placeholder="Digite seu sobrenome" value={sobrenome} onChangeText={setSobrenome} />
      <Button title="Mostrar nome" onPress={() => Alert.alert('Nome completo', `${nome} ${sobrenome}`.trim())} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', gap: 10 },
  titulo: { fontSize: 24, fontWeight: '700', marginBottom: 12 },
  input: { borderWidth: 1, borderColor: '#94a3b8', borderRadius: 8, padding: 12, marginBottom: 8 },
});
