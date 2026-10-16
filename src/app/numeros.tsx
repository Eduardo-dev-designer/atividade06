import { Alert, StyleSheet, Text, View, Pressable } from 'react-native';

const opcoes = [{ numero: 3, titulo: 'TERCEIRO' }, { numero: 2, titulo: 'SEGUNDO' }, { numero: 1, titulo: 'PRIMEIRO' }];

export default function Numeros() {
  return (
    <View style={styles.container}>
      <View style={styles.cima}>{opcoes.map(o => <Text key={o.numero} style={styles.texto}>{o.titulo}</Text>)}</View>
      <View style={styles.baixo}>{opcoes.map(o => <Pressable key={o.numero} style={styles.botao} onPress={() => Alert.alert('Opção selecionada', o.titulo)}><Text>{o.numero}</Text></Pressable>)}</View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, margin: 24, borderWidth: 2, borderColor: '#222', borderRadius: 9 },
  cima: { flex: 1, borderBottomWidth: 1.5, borderColor: '#222', justifyContent: 'space-around', paddingHorizontal: 22 },
  baixo: { flex: 1, alignItems: 'center', justifyContent: 'space-evenly' },
  texto: { fontSize: 21, color: '#111' },
  botao: { borderWidth: 1.5, borderColor: '#222', width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
});
