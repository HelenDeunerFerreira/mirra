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
  width: 60%;

  border-width: 0.7px;
  border-color: black;
  border-radius: 5px;

  margin: 5px;
  padding: 3px;
`;

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
  margin: 15px;

  align-items: center;
  justify-content: center;
`;

export const Texto = styled.Text`
  color: #fff;
  font-size: 18px;
  text-align: center;
`;
