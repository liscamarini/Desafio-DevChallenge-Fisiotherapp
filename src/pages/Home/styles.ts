import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 16px 32px;
  background: #fff;
`;

export const Header = styled.View`
  width: 100%;
`;

export const ButtonBack = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #c9c9c9;
`;

export const ImgHand = styled.Image`
  width: 380px;
  height: 250px;
  margin-top: 36px;
`;

export const ContainerMessage = styled.View`
  justify-content: center;
  padding: 20px 40px;
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
`;

export const ContainerExercices = styled.View`
  justify-content: space-around;
  flex-direction: row;
  margin-top: 36px;
`;

export const Series = styled.Text`
  color: #c9c9c9;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const Repetitions = styled.Text`
  color: #c9c9c9;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const Rest = styled.Text`
  color: #c9c9c9;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const ContainerValues = styled.View`
  justify-content: space-around;

  flex-direction: row;
  margin-top: 24px;
`;

export const SeriesValue = styled.Text`
  color: #9e2d8c;
  font-size: 20px;
  font-weight: bold;
`;
export const RepetitionValue = styled.Text`
  color: #9e2d8c;
  font-size: 20px;
  font-weight: bold;
`;
export const RestValue = styled.Text`
  color: #9e2d8c;
  font-size: 20px;
  font-weight: bold;
`;
