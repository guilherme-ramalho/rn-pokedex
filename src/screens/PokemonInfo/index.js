import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';

import {
  Container,
  StatsContainer,
  StatsBar,
  StatsText,
  PokemonImage,
  ImageContainer,
  TitleText,
  SectionText,
  BadgeRow,
  TitleRow,
  TypeBadge,
  TypeText,
  Col,
  AttributeText,
  AttributesContainer,
} from './styles';

export default function PokemonInfo({ navigation }) {
  const pokemonData = navigation.getParam('pokemonData');

  const upperCaseFirstChar = string =>
    string[0].toUpperCase() + string.substring(1);

  const randonHexColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  const formatDashedString = string => {
    const formatted = string
      .split('-')
      .map(item => upperCaseFirstChar(item))
      .reduce((holder, currentString) => `${holder} ${currentString}`);

    return formatted;
  };

  return (
    <Container>
      <TitleRow>
        <TitleText>{upperCaseFirstChar(pokemonData.name)}</TitleText>
      </TitleRow>
      <ImageContainer>
        <PokemonImage
          source={{
            uri: `https://pokeres.bastionbot.org/images/pokemon/${
              pokemonData.id
            }.png`,
          }}
        />
      </ImageContainer>
      <ScrollView>
        <SectionText>Type</SectionText>
        <BadgeRow>
          {pokemonData.types.map(item => (
            <TypeBadge color={randonHexColor()}>
              <TypeText>{item.type.name.toUpperCase()}</TypeText>
            </TypeBadge>
          ))}
        </BadgeRow>
        <SectionText>Attributes</SectionText>
        <AttributesContainer>
          <Col>
            <AttributeText color="#000">Weight</AttributeText>
            <AttributeText color="#000">{`${pokemonData.weight /
              10}kg`}</AttributeText>
          </Col>
          <Col>
            <AttributeText color="#000">Height</AttributeText>
            <AttributeText color="#000">{`${pokemonData.height /
              10}m`}</AttributeText>
          </Col>
          <Col>
            <AttributeText color="#000">Base XP</AttributeText>
            <AttributeText color="#000">
              {pokemonData.base_experience}
            </AttributeText>
          </Col>
        </AttributesContainer>
        <SectionText>Stats</SectionText>
        <StatsContainer>
          {pokemonData.stats.map(item => {
            const formattedStat = formatDashedString(item.stat.name);

            return (
              <View key={formattedStat}>
                <StatsText>{`${formattedStat} (${item.base_stat}%)`}</StatsText>
                <StatsBar
                  progress={item.base_stat / 100}
                  boderWidth={1}
                  height={15}
                  width={null}
                  unfilledColor="#ededed"
                />
              </View>
            );
          })}
        </StatsContainer>
      </ScrollView>
    </Container>
  );
}

PokemonInfo.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
