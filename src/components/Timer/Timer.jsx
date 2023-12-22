import { Component } from 'react';

import { TimerModal } from './TimerModal';

import { GiClockwork } from 'react-icons/gi';
import { Container, OpenTimer } from './Timer.styled';
import { ModalStyled } from './Modal.styled';

export class Timer extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    return (
      <Container>
        {isOpen && (
          <ModalStyled handleClick={this.toggle}>
            <TimerModal />
          </ModalStyled>
        )}
        <OpenTimer type="button" onClick={this.toggle}>
          <GiClockwork size={64} color="#ff00e5" />
        </OpenTimer>
      </Container>
    );
  }
}
