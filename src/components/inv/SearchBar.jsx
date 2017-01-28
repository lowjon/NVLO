import React from 'react'


class SearchBar extends React.Component {
  render () {
    return (
      <form>
        <input value={this.filterText} type="text" placeholder="Search..." />
        {/* <p>
          <input type="checkbox" />
          {' '}
          Show inactive items
        </p> */}
      </form>
    )
  }
}

export default SearchBar
