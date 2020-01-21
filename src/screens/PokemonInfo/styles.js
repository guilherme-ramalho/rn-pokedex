import styled from 'styled-components/native';

import { Bar } from 'react-native-progress';

export const Container = styled.View`
  margin: 10px;
  flex: 1;
  background-color: red;
`;

export const StatsContainer = styled.View`
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  background-color: white;
`;

export const StatsBar = styled(Bar)`
  /* width: 100%; */
`;

export const StatsText = styled.Text``
