import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const Titulo = styled.Text`
  font-size: 23px;
  margin-bottom: 10px;
  color: #a35bb6;
`;

export const ViewInput = styled.View`
  border-width: 0.7px;
  border-color: black;
  margin: 5px;
  width: 60%;
  padding: 3px;
  border-radius: 5px;
`;

export const ViewCheckBox = styled.View``;

export const Linha = styled.View`
  flex-direction: row;
`;

export const Coluna = styled.View`
  flex: 1;
  margin-left: 5px;
`;

export const Botao = styled.TouchableOpacity`
  height: 40px;
  background-color: #a35bb6;
  border-radius: 5px;
  margin: 4px;
  align-items: center;
  justify-content: center;
`;

export const Texto = styled.Text`
  color: #fff;
  font-size: 18px;
  text-align: center;
`;
