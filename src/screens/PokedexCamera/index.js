import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { RNCamera } from 'react-native-camera';
import axios from 'axios';
import PropTypes from 'prop-types';

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

export default function PokedexCamera({ navigation }) {
  let pokeCam = null;
  const [isLoading, setIsLoading] = useState(false);

  const picPreviewFeedback = () => {
    pokeCam.pausePreview();
    setTimeout(() => pokeCam.resumePreview(), 1500);
  };

  const getPokemonData = async base64 => {
    try {
      setIsLoading(true);

      const { data: pokemonData } = await axios({
        method: 'post',
        baseURL: 'http://192.168.0.107:5000',
        url: '/pokedex/classification',
        data: {
          base64string: base64,
        },
      }).catch(error => console.log(error));

      setIsLoading(false);

      navigation.navigate('PokemonInfo', { pokemonData });
    } catch (error) {
      console.log(error);
    }
  };

  const takePicture = async () => {
    try {
      const picture = await pokeCam.takePictureAsync({
        quality: 0.5,
        base64: true,
        orientation: 'portrait',
        fixOrientation: true,
      });

      // picPreviewFeedback();

      getPokemonData(picture.base64);
    } catch (error) {
      console.log(error);
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
          <ScanButton onPress={() => takePicture()}>
            {isLoading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <ButtonText>SCAN POKÉMON</ButtonText>
            )}
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

PokedexCamera.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
