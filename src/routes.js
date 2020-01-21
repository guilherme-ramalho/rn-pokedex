import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import PokedexCamera from './screens/PokedexCamera';
import PokemonInfo from './screens/PokemonInfo';

const Routes = createAppContainer(
  createSwitchNavigator({
    PokedexCamera: {
      screen: PokedexCamera,
    },
    PokemonInfo: {
      screen: PokemonInfo,
    },
  })
);

export default Routes;
