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
  TypeBadge,
  TypeText,
} from './styles';

export default function PokemonInfo({ navigation }) {
  const pokemonData = navigation.getParam('pokemonData');

  const formatDashedString = string => {
    const formatted = string
      .split('-')
      .map(item => item[0].toUpperCase() + item.substring(1))
      .reduce((holder, currentString) => `${holder} ${currentString}`);

    return formatted;
  };

  return (
    <Container>
      <ScrollView>
        <TitleText>{pokemonData.name.toUpperCase()}</TitleText>
        <ImageContainer>
          <PokemonImage
            source={{
              uri: `https://pokeres.bastionbot.org/images/pokemon/${
                pokemonData.id
              }.png`,
            }}
          />
        </ImageContainer>
        <SectionText>Type</SectionText>
        <BadgeRow>
          {pokemonData.types.map(item => (
            <TypeBadge>
              <TypeText>{item.type.name.toUpperCase()}</TypeText>
            </TypeBadge>
          ))}
        </BadgeRow>
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
