import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Multiplicacao() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [valor3, setValor3] = useState('');
  function mostrar() {
    const resultado = Number(valor1) * Number(valor2) * Number(valor3);
    Alert.alert('Multiplicação', `Valor 1: ${valor1}\nValor 2: ${valor2}\nValor 3: ${valor3}\n\nResultado: ${resultado}`);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Multiplicação de três valores</Text>
      <Text>Valor 1:</Text><TextInput style={styles.input} placeholder="Digite o valor 1" value={valor1} onChangeText={setValor1} keyboardType="numeric" />
      <Text>Valor 2:</Text><TextInput style={styles.input} placeholder="Digite o valor 2" value={valor2} onChangeText={setValor2} keyboardType="numeric" />
      <Text>Valor 3:</Text><TextInput style={styles.input} placeholder="Digite o valor 3" value={valor3} onChangeText={setValor3} keyboardType="numeric" />
      <Button title="Multiplicar" onPress={mostrar} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', gap: 8 },
  titulo: { fontSize: 24, fontWeight: '700', marginBottom: 12 },
  input: { borderWidth: 1, borderColor: '#94a3b8', borderRadius: 8, padding: 12, marginBottom: 8 },
});
