import React from 'react';
import ChatBot from 'react-simple-chatbot';

class CustomChatBot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: true,
      steps: [
        {
          id: '1',
          message: 'Hello, Welcome to our website! Are you ready to play a game?',
          trigger: '2',
        },
        {
          id: '2',
          options: [
            { value: 1, label: 'Offers', trigger: '4' },
            { value: 2, label: 'Packages', trigger: '3' },
            { value: 3, label: 'Daytours', trigger: '5' },
          ],
        },
        {
          id: '3',
          message: 'Navigate to packages',
          end: true,
        },
        {
          id: '4',
          message: 'Navigate to offers',
          end: true,
        },
        {
          id: '5',
          message: 'Navigate to daytours',
          end: true,
        },
      ],
    };
  }

  handleEnd = ({ steps, values }) => {
    this.setState({ opened: false }, () => {
      this.setState({ opened: true });
    });
  };

  render() {
    return (
      <ChatBot
        steps={this.state.steps}
        handleEnd={this.handleEnd}
        floating={true}
        botDelay={1000}
        customDelay={1000}
        userDelay={1000}
        width="300px"
        height="400px"
        opened={this.state.opened}
        toggleFloating={() => this.setState({ opened: !this.state.opened })}
      />
    );
  }
}

export default CustomChatBot;