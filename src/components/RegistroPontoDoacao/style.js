import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;

  justify-content: center;
  align-items: center;
  padding: 3px;
`;

export const Campo = styled.View`
  width: 100%;

  border-width: 0.7px;
  border-color: black;
  
  margin: 5px;
  padding: 3px;
  border-radius: 5px;
`;

export const Linha = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Coluna = styled.View`
  flex: 1;
  margin-left: 5px;
`;

export const Botao = styled.TouchableOpacity`
  height: 40px;
  width: 80px;

  background-color: #b90000;
  border-radius: 5px;
  margin: 4px;
  padding-right: 3px;

  align-items: center;
  justify-content: center;
`;

export const TextoBotao = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;

export const Texto = styled.Text`
  color: #000;
  font-size: 16px;
  text-align: center;
`;
