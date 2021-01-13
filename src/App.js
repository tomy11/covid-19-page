import React from 'react';

import { Cards, CountryPicker, Chart, NewBarChart } from './components';
import { fetchData } from './api/';
import styles from './index.css';
import Container from '@material-ui/core/Container';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
     
        <Container fixed>
          {/* <Cards data={data} /> */}
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} /> 
          <NewBarChart />
        </Container>
      </div>
    );
  }
}

export default App;
