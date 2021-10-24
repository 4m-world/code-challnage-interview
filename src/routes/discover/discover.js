import  React from 'react'
import DiscoverBlock from './components/block'

class Discover extends React.Component {
  constructor() {
    super()

    this.state = {
      newReleases: [],
      playlists: [],
      categories: []
    }
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}

export default Discover