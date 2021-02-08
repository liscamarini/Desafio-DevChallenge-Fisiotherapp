import { useNavigation } from '@react-navigation/native';
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Hand from '../../assets/hand.png';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import {
  ButtonBack,
  Container,
  ContainerExercices,
  ContainerMessage,
  ContainerValues,
  Header,
  ImgHand,
  Repetitions,
  RepetitionValue,
  Rest,
  RestValue,
  Series,
  SeriesValue,
  Title,
} from './styles';

const Home: React.FC = () => {
  const { goBack } = useNavigation();
  return (
    <Container>
      <Header>
        <ButtonBack onPress={() => goBack()}>
          <Icon name="arrow-left-circle" size={30} color="#c57ef5" />
        </ButtonBack>
      </Header>
      <ImgHand source={Hand} />
      <ContainerMessage>
        <Title>Close and Open hands!</Title>
        <Button onPress={() => console.log('Done')}>Done!</Button>
        <ContainerExercices>
          <Series>Series</Series>
          <Repetitions>Repetitions</Repetitions>
          <Rest>Rest</Rest>
        </ContainerExercices>
        <ContainerValues>
          <SeriesValue>3x</SeriesValue>
          <RepetitionValue>10</RepetitionValue>
          <RestValue>20 seg</RestValue>
        </ContainerValues>
      </ContainerMessage>

      <Footer />
    </Container>
  );
};

export default Home;
