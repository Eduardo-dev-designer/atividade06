import { Alert, BackHandler, Platform, StyleSheet, Text, View, Pressable } from 'react-native';

export default function BemVindo() {
  function sair() {
    if (Platform.OS === 'android') BackHandler.exitApp();
    else Alert.alert('Sair', 'O botão SAIR foi pressionado.');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>BEM VINDO</Text>
      <Text style={styles.nome}>FULANO</Text>
      <Pressable style={styles.botao} onPress={() => Alert.alert('Comprar', 'Botão COMPRAR pressionado!')}><Text>COMPRAR</Text></Pressable>
      <Pressable style={[styles.botao, styles.sair]} onPress={sair}><Text>SAIR</Text></Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, margin: 24, borderWidth: 2, borderColor: '#222', borderRadius: 9, alignItems: 'center', paddingTop: 42 },
  titulo: { fontSize: 27, fontWeight: '600', color: '#111' },
  nome: { fontSize: 17, marginTop: 12, color: '#111' },
  botao: { marginTop: 55, borderWidth: 1.5, borderColor: '#222', paddingHorizontal: 18, paddingVertical: 10 },
  sair: { position: 'absolute', bottom: 16, marginTop: 0 },
});
