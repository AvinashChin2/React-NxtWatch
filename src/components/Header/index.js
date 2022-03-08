import {Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {
  HeaderContainer,
  HeaderLogoImg,
  HeaderContentContainer,
  ThemeButton,
  ProfileButton,
  ProfileImage,
  LogoutButton,
} from './styledComponents'

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderLogoImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
      </Link>

      <HeaderContentContainer>
        <ThemeButton data-testid="theme">
          <FaMoon size={20} />
        </ThemeButton>
        {renderPopupMenu()}
        <ProfileButton>
          <ProfileImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
        </ProfileButton>
        <LogoutButton type="button">Logout</LogoutButton>
      </HeaderContentContainer>
    </HeaderContainer>
  )
}
export default Header
