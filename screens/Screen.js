import React from 'react';
import AppContext from '../contexts/AppContext';

class Screen extends React.Component {
  static contextType = AppContext;

  noApiResponse = (e = {}) => {
    this.context.pushFlashMessage({
      description: e.message || 'Can\'t connect to the server',
      type: 'danger'
    })
  }
}

export default Screen;
