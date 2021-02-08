/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Person from '../../assets/person.png';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import {
  Container,
  ContainerMessage,
  ImgPerson,
  Subtitle,
  Title,
} from './styles';

const Main: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ImgPerson source={Person} />
      <ContainerMessage>
        <Title>Hey, Laís!</Title>
        <Subtitle>Let's start your treatment ? :D</Subtitle>
      </ContainerMessage>
      <Button onPress={() => navigation.navigate('Home')}>Start</Button>

      <Footer />
    </Container>
  );
};

export default Main;
