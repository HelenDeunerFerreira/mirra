import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
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
  padding: 5px;
`;

export const Dado = styled.Text`
  color: #6f3d7c;

  margin: 10px 60px 10px 60px;

  font-size: 18px;
  font-weight: 700;
`;

export const Linha = styled.View`
  flex-direction: row;
  margin: 3px;
`;