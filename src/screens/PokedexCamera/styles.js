import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  background-color: #ee5550;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const CameraContainer = styled.View`
  flex: 1;
  justify-content: center;
  margin: 0 10px;
  padding: 10px 10px;
  border: 2px solid black;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #d7d7d7;
`;

export const PokeCamera = styled(RNCamera)`
  justify-content: center;
  align-content: center;
  flex: 1;
  margin: 10px;
`;

export const LedIndicator = styled.View`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50;
  background-color: ${props => props.color};
  border: ${props =>
    `${props.borderSize}px solid ${
      props.borderColor ? props.borderColor : 'white'
    }`};
  margin: 10px;
`;

export const ScanButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #feca1b;
  border: 2px solid #355b9e;
  height: 45px;
  border-radius: 4px;
  width: 150px;
`;

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const SpacedView = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

export const CrackLine = styled.View`
  height: 2px;
  width: 100px;
  background-color: black;
  border-radius: 5px;
  margin: 2px;
`;

export const Col = styled.View`
  flex-direction: column;
`;

export const ControlsView = styled.View`
  margin: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CrossAxisContainer = styled.View`
  margin-right: 35;
`;

export const CrossAxisUpDown = styled.View`
  background-color: black;
  height: 100;
  width: 30;
  border-radius: 5px;
`;

export const CrossAxisLeftRight = styled.View`
  background-color: black;
  height: 30;
  width: 100;
  position: absolute;
  left: -35;
  top: 35;
  border-radius: 5px;
`;

export const ActionButton = styled.View`
  height: 10px;
  margin: 2px;
  width: 60px;
  border-radius: 5px;
  background-color: ${props => props.color};
  justify-content: flex-start;
`;
