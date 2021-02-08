import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, IconClipBoard, IconFolder, IconMessage } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <IconFolder>
        <Icon name="folder-text" size={30} color="#c57ef5" />
      </IconFolder>
      <IconMessage>
        <Icon name="message-processing" size={30} color="#c9c9c9" />
      </IconMessage>
      <IconClipBoard>
        <Icon name="clipboard" size={30} color="#c9c9c9" />
      </IconClipBoard>
    </Container>
  );
};

export default Footer;
