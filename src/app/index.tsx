import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, Pressable, View } from 'react-native';

const exercicios = [
  { titulo: 'Exercício 1 — Funcionário', rota: '/empresa' },
  { titulo: 'Exercício 2 — Nome e sobrenome', rota: '/pessoa' },
  { titulo: 'Exercício 3 — Dados do aluno', rota: '/aluno' },
  { titulo: 'Exercício 4 — Multiplicação', rota: '/multiplicacao' },
  { titulo: 'Exercício 5 — Hello World', rota: '/hello-world' },
  { titulo: 'Exercício 6 — Primeiro, segundo e terceiro', rota: '/numeros' },
  { titulo: 'Exercício 7 — Bem-vindo', rota: '/bem-vindo' },
];

export default function Index() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Lista de exercícios</Text>
      <Text style={styles.subtitulo}>Escolha um exercício para abrir sua tela.</Text>
      {exercicios.map((exercicio) => (
        <Pressable
          key={exercicio.rota}
          style={({ pressed }) => [styles.botao, pressed && styles.pressionado]}
          onPress={() => router.push(exercicio.rota as never)}
        >
          <Text style={styles.textoBotao}>{exercicio.titulo}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', padding: 24, backgroundColor: '#f4f6f8' },
  titulo: { fontSize: 28, fontWeight: '700', color: '#172554', marginBottom: 8 },
  subtitulo: { fontSize: 16, color: '#475569', marginBottom: 24 },
  botao: { padding: 16, backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#cbd5e1', borderRadius: 10, marginBottom: 12 },
  pressionado: { backgroundColor: '#dbeafe' },
  textoBotao: { fontSize: 16, color: '#1e293b', fontWeight: '600' },
});
