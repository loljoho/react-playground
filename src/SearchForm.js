import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      driverRef: ''
    };

    this.handleDriverRefChange = this.handleDriverRefChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleDriverRefChange(e) {
    e.preventDefault();

    this.setState({ driverRef: e.target.value });
  }

  handleSearchClick(e) {
    const { onSearch } = this.props;
    const { driverRef } = this.state;

    e.preventDefault();
    onSearch && onSearch(driverRef);
  }

  render() {
    const { driverRef } = this.state;

    return (
      <form className="search-form" onSubmit={this.handleSearchClick}>
        <input className="search-form__input" id="driverRef" type="text" value={driverRef} onChange={this.handleDriverRefChange} />

        <button type="submit">Lookup</button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchForm;
