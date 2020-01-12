import React from 'react';
import { RNCamera } from 'react-native-camera';

import {
  Container,
  PokeCamera,
  LedIndicator,
  CameraContainer,
  Row,
  Col,
  ScanButton,
  ButtonText,
  ControlsView,
  CenteredView,
  SpacedView,
  CrackLine,
  CrossAxisContainer,
  CrossAxisUpDown,
  CrossAxisLeftRight,
  ActionButton,
} from './styles';

export default function PokedexCamera() {
  let pokeCam = null;

  const takePicture = async () => {
    try {
      alert('teste');
      console.log('Taking picture...');

      const picBase64 = await pokeCam.takePictureAsync({
        quality: 0.5,
        base64: true,
      });

      console.log(picBase64);
    } catch (error) {
      console.log(error);
    }
  };

  const getPokemonData = base64 => {
    console.log(base64);
  };

  return (
    <Container>
      <Row>
        <LedIndicator size={60} borderSize="4" color="#01438E" />
        <LedIndicator size={20} borderSize="2" color="#732523" />
        <LedIndicator size={20} borderSize="2" color="#E1D837" />
        <LedIndicator size={20} borderSize="2" color="#5BA96F" />
      </Row>
      <CameraContainer>
        {/* <Row>
          <CenteredView>
            <LedIndicator
              size={15}
              borderSize="2"
              color="red"
              borderColor="#000"
            />
            <LedIndicator
              size={15}
              borderSize="2"
              color="red"
              borderColor="#000"
            />
          </CenteredView>
        </Row> */}
        <PokeCamera
          ref={camera => {
            pokeCam = camera;
          }}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}
          captureAudio
        />
        {/* <Row>
          <SpacedView>
            <LedIndicator
              size={25}
              borderSize="2"
              color="red"
              borderColor="#000"
            />
            <Col style={{ justifyContent: 'center' }}>
              <CrackLine />
              <CrackLine />
              <CrackLine />
            </Col>
          </SpacedView>
        </Row> */}
      </CameraContainer>
      <ControlsView>
        <Col>
          {/* <Row style={{ backgroundColor: 'red' }}>
            <ActionButton color="#76D81D" />
            <ActionButton color="#A95D53" />
          </Row> */}
          <ScanButton>
            <ButtonText onPress={() => takePicture()}>SCAN POKÉMON</ButtonText>
          </ScanButton>
        </Col>
        <CrossAxisContainer>
          <CrossAxisUpDown />
          <CrossAxisLeftRight />
        </CrossAxisContainer>
      </ControlsView>
    </Container>
  );
}
