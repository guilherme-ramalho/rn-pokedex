import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { Bar } from 'react-native-progress';

import { Container, StatsContainer, StatsBar, StatsText } from './styles';

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
      <StatsContainer>
        {pokemonData.stats.map(item => (
          <>
            <StatsText>
              {`${formatDashedString(item.stat.name)} (${item.base_stat}%)`}
            </StatsText>
            <StatsBar
              progress={item.base_stat / 100}
              boderWidth={1}
              height={15}
              width={null}
              unfilledColor="#ededed"
            />
            {/* <StatsBar
              styleAttr="Horizontal"
              indeterminate={false}
              progress={item.base_stat / 100}
            /> */}
          </>
        ))}
      </StatsContainer>
    </Container>
  );
}

PokemonInfo.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
