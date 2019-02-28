import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ReactTable from "react-table";
import "react-table/react-table.css";

class LookupTable extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.fetchDriver = this.fetchDriver.bind(this);
  }

  componentDidMount() {
    this.fetchDriver();
  }

  componentDidUpdate({ driverRef: oldDriverRef }) {
    if (this.props.driverRef !== oldDriverRef) {
      this.fetchDriver();
    }
  }

  fetchDriver() {
    const { driverRef } = this.props;

    fetch(`https://ergast.com/api/f1/drivers/${driverRef}/results.json`)
      .then(res => res.json())
      .then(data => {
        let results = data.MRData.RaceTable.Races;
        console.log(results);
        return this.setState({ data: results });
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <ReactTable
          className="-striped -highlight"
          minRows={0}
          columns={[
            {
              Header: 'Season',
              accessor: 'season'
            },
            {
              Header: 'Round',
              accessor: 'round'
            },
            {
              Header: 'Grand Prix',
              accessor: 'raceName'
            },
            {
              Header: 'Circuit',
              id: 'circuitName',
              accessor: d => d.Circuit.circuitName
            },
            {
              Header: 'Locality',
              id: 'locality',
              accessor: d => d.Circuit.Location.locality
            },
            {
              Header: 'Country',
              id: 'country',
              accessor: d => d.Circuit.Location.country
            },
            {
              Header: 'Date',
              accessor: 'date'
            }
          ]}
          data={data}
        />
      </div>
    );
  }
}

LookupTable.propTypes = {
  driverRef: PropTypes.string.isRequired
};

export default LookupTable;
