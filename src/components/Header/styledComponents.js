import styled from 'styled-components/macro'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 30px;
  padding-left: 50px;
  padding-right: 50px;
`
export const HeaderLogoImg = styled.img`
  height: 30px;
  width: 150px;
`
export const HeaderContentContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0 0 0 20px;
  padding: 0;
`
export const ProfileButton = styled(ThemeButton)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  @media (max-width: 767px) {
    display: none;
  }
`
export const ProfileImage = styled.img`
  height: 25px;
  width: 25px;
`
export const LogoutButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #3b82f6;
  padding: 5px 20px 5px 20px;
  outline: none;
  border-radius: 3px;
  margin-left: 20px;
  font-size: 15px;
  font-family: 'Roboto';
  color: #3b82f6;
  font-weight: bold;
`
