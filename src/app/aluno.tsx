import { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Aluno() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [turma, setTurma] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  function mostrarAluno() {
    const media = (Number(nota1) + Number(nota2)) / 2;
    Alert.alert('Dados do aluno', `Nome: ${nome}\nIdade: ${idade}\nTurma: ${turma}\nNota 1: ${nota1}\nNota 2: ${nota2}\nMédia: ${media.toFixed(1)}\nStatus: ${media >= 7 ? 'Aprovado' : 'Reprovado'}`);
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Dados do aluno</Text>
      <Text>Nome:</Text><TextInput style={styles.input} placeholder="Nome do aluno" value={nome} onChangeText={setNome} />
      <Text>Idade:</Text><TextInput style={styles.input} placeholder="Idade" value={idade} onChangeText={setIdade} keyboardType="numeric" />
      <Text>Turma:</Text><TextInput style={styles.input} placeholder="Turma" value={turma} onChangeText={setTurma} />
      <Text>Nota 1:</Text><TextInput style={styles.input} placeholder="Nota 1" value={nota1} onChangeText={setNota1} keyboardType="numeric" />
      <Text>Nota 2:</Text><TextInput style={styles.input} placeholder="Nota 2" value={nota2} onChangeText={setNota2} keyboardType="numeric" />
      <Button title="Mostrar dados" onPress={mostrarAluno} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { padding: 24, gap: 8 },
  titulo: { fontSize: 24, fontWeight: '700', marginBottom: 12 },
  input: { borderWidth: 1, borderColor: '#94a3b8', borderRadius: 8, padding: 12, marginBottom: 8 },
});
