import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
class FilterMenu extends PureComponent {
  render() {
    return (
      <div>
        <ul>
          <li>
            <button>All</button>
          </li>
          <li>
            <button>Tracks</button>
          </li>
          <li>
            <button>Artists</button>
          </li>
          <li>
            <button>Albums</button>
          </li>
          <li>
            <button>Label</button>
          </li>
        </ul>
        <div>
          <label>Dates</label>
          <input type="range" />
          <label>Country</label>
          <select />
          <label>City</label>
          <select />
        </div>
        <ul>
          <li>Release Type</li>

          <li>
            <button />
          </li>
          <li>
            <button>Tracks</button>
          </li>
          <li>
            <button>Artists</button>
          </li>
          <li>
            <button>Albums</button>
          </li>
          <li>
            <button>Label</button>
          </li>
        </ul>
      </div>
    );
  }
}

FilterMenu.propTypes = {};

export default FilterMenu;
