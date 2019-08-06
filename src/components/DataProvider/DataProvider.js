import React, { Component, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import io from 'socket.io-client';
import 'react-toastify/dist/ReactToastify.css';

import { URL } from '../../config';

const DataContext = createContext([]);

class DataProvider extends Component {
  state = {
    threshold: '',
    data: [],
  };

  componentDidMount() {
    this.socket = io(URL);
    this.socket.on('data', this.setData);
  }

  componentWillUnmount() {
    if (this.socket) {
      this.socket.close();
    }
  }

  setData = value => {
    const { threshold } = this.state;
    if (threshold && +threshold < value.value) {
      toast(value.value);
    }
    this.setState(({ data }) => ({ data: [...data, value] }));
  };

  setThreshold = threshold => {
    this.setState({ threshold });
  };

  render() {
    const { data, threshold } = this.state;
    const { children } = this.props;
    return (
      <DataContext.Provider value={{ data, threshold, setThreshold: this.setThreshold }}>
        {children}
        <ToastContainer />
      </DataContext.Provider>
    );
  }
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useDataContext = () => useContext(DataContext);

export default DataProvider;
