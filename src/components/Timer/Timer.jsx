import { Component } from 'react';

import { Modal } from '../Modal/Modal';

import { TimerModal } from './TimerModal';

import { GiClockwork } from 'react-icons/gi';
import { OpenTimer } from './Timer.styled';

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
      <div className="d-flex my-5">
        <OpenTimer
          type="button"
          className="btn btn-primary my-5"
          onClick={this.toggle}
        >
          <GiClockwork size={64} color="#ff00e5" />
        </OpenTimer>

        {isOpen && (
          <Modal handleClick={this.toggle}>
            <TimerModal />
          </Modal>
        )}
      </div>
    );
  }
}
