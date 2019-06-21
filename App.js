import React from 'react';
import ScreenNavigation from './navigation/ScreenNavigation';
import AppContext from './contexts/AppContext';
import FlashMessages from './components/shared/FlashMessages';
import FlashModel from './models/FlashModel';

export default class App extends React.Component {
  state = {
    flashMessages: []
  }

  pushFlashMessage = (message) => {
    const flash = new FlashModel(message);
    const id = flash.id;

    this.setState({
      flashMessages: this.state.flashMessages.concat([flash])
    }, () => {
      setTimeout(() => {
        let messages = this.state.flashMessages.filter((message) => (message.id !== id));
        this.setState({ flashMessages: messages });
      }, 2500)
    })
  }

  render () {
    const contextValues = {
      pushFlashMessage: this.pushFlashMessage
    }
    const { flashMessages } = this.state;

    return (
      <AppContext.Provider value={contextValues}>
        <FlashMessages messages={flashMessages} />
        <ScreenNavigation />
      </AppContext.Provider>
    )
  }
}
