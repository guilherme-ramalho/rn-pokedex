import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { RNCamera } from 'react-native-camera';
import axios from 'axios';

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

  const getPokemonData = async base64 => {
    const { data: response } = await axios({
      method: 'get',
      url: `http://localhost:3333/pokemon`,
      params: {
        base64,
      },
    });

    console.log(response);
  };

  const takePicture = async () => {
    try {
      const picture = await pokeCam.takePictureAsync({
        quality: 0.5,
        base64: true,
      });

      picPreviewFeedback();

      getPokemonData(picture.base64);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
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
