import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const Imagem = styled.Image`
  width: 150px;
  height: 150px;

  margin-bottom: 20px;

  border-radius: 75px;
  border-width: 5px;
  border-color: #a35bb6;
`;

export const Texto = styled.Text`
  color: #000;
  font-size: 20px;
  text-align: justify;
  margin: 10px;
`;

export const Linha = styled.View`
  flex-direction: row;
  margin: 10px;
`;

export const Botao = styled.TouchableOpacity`
  height: 40px;
  background-color: #a35bb6;
  border-radius: 5px;
  margin: 5px;
  padding: 6px;
`;

export const TextoBotao = styled.Text`
  color: #fff;
  font-size: 20px;
  text-align: justify;
`;
