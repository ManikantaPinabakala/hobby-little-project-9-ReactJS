import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  HomeContainer,
  HeaderContainer,
  WebsiteLogo,
  LogoutButton,
  HomeContentContainer,
  HomeText,
  HomeCard,
} from './styledComponents'

const Home = props => {
  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }

  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')

    history.replace('/ebank/login')
  }

  return (
    <HomeContainer>
      <HeaderContainer>
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <LogoutButton type="button" onClick={onLogout}>
          Logout
        </LogoutButton>
      </HeaderContainer>
      <HomeContentContainer>
        <HomeText>Your Flexibility, Our Excellence</HomeText>
        <HomeCard
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </HomeContentContainer>
    </HomeContainer>
  )
}

export default Home
