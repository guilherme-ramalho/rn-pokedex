import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { RNCamera } from 'react-native-camera';
import RNFS from 'react-native-fs';

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
  CrossAxisContainer,
  CrossAxisUpDown,
  CrossAxisLeftRight,
} from './styles';

export default function PokedexCamera() {
  let pokeCam = null;
  const [isLoading, setIsLoading] = useState(false);

  const picPreviewFeedback = () => {
    pokeCam.pausePreview();
    setTimeout(() => pokeCam.resumePreview(), 1500);
  };

  const getBase64 = async picture => {
    const imagePath = picture.uri.substring(7);
    const base64 = await RNFS.readFile(imagePath, 'base64');
    console.log(base64);
  };

  const takePicture = async () => {
    try {
      console.log('Taking picture');

      const picture = await pokeCam.takePictureAsync({
        quality: 0.5,
        base64: true,
      });

      picPreviewFeedback();

      getBase64(picture);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
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
        {isLoading ? (
          <ActivityIndicator size="large" color="#ee5550" />
        ) : (
          <PokeCamera
            ref={camera => {
              pokeCam = camera;
            }}
            type={RNCamera.Constants.Type.back}
            autoFocus={RNCamera.Constants.AutoFocus.on}
            flashMode={RNCamera.Constants.FlashMode.off}
            captureAudio
          />
        )}
      </CameraContainer>
      <ControlsView>
        <Col>
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
