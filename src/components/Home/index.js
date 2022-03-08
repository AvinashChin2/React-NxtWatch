import {Component} from 'react'
import {HomeContainer} from './styledComponents'

import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
  noVideos: 'NOVIDEOS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
  }

  render() {
    return (
      <HomeContainer>
        <Header />
      </HomeContainer>
    )
  }
}
export default Home
