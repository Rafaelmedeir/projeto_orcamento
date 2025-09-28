import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, SafeAreaView, ImageBackground } from 'react-native';

export default function OrcamentoScreen() {
  const [largura, setLargura] = useState('');
  const [comprimento, setComprimento] = useState('');
  const [precoM2, setPrecoM2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularOrcamento = () => {
    const numLargura = parseFloat(largura);
    const numComprimento = parseFloat(comprimento);
    const numPrecoM2 = parseFloat(precoM2);

    if (isNaN(numLargura) || isNaN(numComprimento) || isNaN(numPrecoM2) || numLargura <= 0 || numComprimento <= 0 || numPrecoM2 <= 0) {
      Alert.alert("Erro", "Por favor, insira valores válidos e maiores que zero em todos os campos.");
      return;
    }
    const area = numLargura * numComprimento;
    const valorTotal = area * numPrecoM2;
    const resultadoFormatado = `Área: ${area.toFixed(2)} m²\nValor Total: R$ ${valorTotal.toFixed(2)}`;
    setResultado(resultadoFormatado);
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/images/background.png')}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Orçamento do Serviço</Text>
        <TextInput style={styles.input} placeholder="Largura (metros)" keyboardType="numeric" value={largura} onChangeText={setLargura} />
        <TextInput style={styles.input} placeholder="Comprimento (metros)" keyboardType="numeric" value={comprimento} onChangeText={setComprimento} />
        <TextInput style={styles.input} placeholder="Preço por m² (R$)" keyboardType="numeric" value={precoM2} onChangeText={setPrecoM2} />
        <Button title="CALCULAR ORÇAMENTO" onPress={calcularOrcamento} />
        {resultado ? (
          <View style={styles.resultadoContainer}>
            <Text style={styles.resultadoTitle}>Resultado:</Text>
            <Text style={styles.resultadoText}>{resultado}</Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: { 
    flex: 1, 
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 20 
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    marginBottom: 20,
    color: '#FFFFFF' 
  },
  input: { 
    width: '100%', 
    height: 50, 
    borderColor: '#ccc', 
    borderWidth: 1, 
    borderRadius: 5, 
    paddingHorizontal: 10, 
    marginBottom: 15, 
    backgroundColor: '#fff' 
  },
  resultadoContainer: { 
    marginTop: 30, 
    padding: 15, 
    backgroundColor: '#e3f2fd', 
    borderRadius: 5, 
    width: '100%', 
    alignItems: 'center' 
  },
  resultadoTitle: { 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  resultadoText: { 
    fontSize: 16, 
    marginTop: 10, 
    textAlign: 'center' 
  },
});