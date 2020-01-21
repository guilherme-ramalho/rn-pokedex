import styled from 'styled-components/native';

import { Bar } from 'react-native-progress';

export const Container = styled.View`
  padding: 10px;
  flex: 1;
  background-color: #ededed;
`;

export const StatsContainer = styled.View`
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  border: 1px solid #cccccc;
`;

export const AttributesContainer = styled.View`
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  border: 1px solid #cccccc;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const StatsBar = styled(Bar)`
  /* width: 100%; */
`;

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const PokemonImage = styled.Image`
  height: 250px;
  width: 250px;
`;

export const TitleText = styled.Text`
  font-size: 28px;
`;

export const TitleRow = styled.View`
  flex-direction: row;
  width: 100%;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
`;

export const SectionText = styled.Text`
  font-size: 20px;
  margin-top: 10px;
`;

export const Separator = styled.View`
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 5px 0 10px 0;
`;

export const BadgeRow = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

export const Col = styled.View`
  flex-direction: column;
`;

export const AttributeText = styled.Text`
  color: ${props => (props.color ? props.color : 'black')};
`;

export const TypeBadge = styled.View`
  height: 25px;
  width: 70px;
  padding: 5px;
  border-radius: 5px;
  background-color: ${props => (props.color ? props.color : 'red')};
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const TypeText = styled.Text`
  color: white;
  font-weight: bold;
`;

export const StatsText = styled.Text``;
