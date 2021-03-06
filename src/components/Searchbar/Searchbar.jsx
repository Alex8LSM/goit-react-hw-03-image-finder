import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  onHandleSubmit = evt => {
    evt.preventDefault();
    const formSubmit = this.props.onSubmit;
    formSubmit(this.state.query);
  };

  render() {
    return (
      <header onSubmit={this.onHandleSubmit} className={s.Searchbar}>
        <form className={s.SearchForm}>
          <button type="submit" className={s.SearchForm__button}>
            <span className={s.SearchForm__buttonLabel}>Search</span>
          </button>

          <input
            className={s.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.query}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
