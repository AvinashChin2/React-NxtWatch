import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f1f5f9;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f9f9f9;
`
export const NxtImage = styled.img`
  height: 40px;
  width: 150px;
  margin-bottom: 25px;
`
export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
`
export const InputFieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
  background-color: transparent;
`
export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #1e293b;
  margin-bottom: 8px;
`
export const InputBox = styled.input`
  padding: 10px;
  border: #475569 1px solid;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  color: #475569;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 15px;
  font-family: 'Roboto';
`
export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Checkbox = styled.input`
  height: 15px;
  width: 15px;
  cursor: pointer;
  margin-right: 8px;
`
export const CheckboxLabel = styled.label`
  color: #212121;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`
export const LoginBtn = styled.button`
  background-color: #3b82f6;
  color: #f9f9f9;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  border: none;
  outline: none;
  padding: 12px;
  margin-top: 20px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 13px;
  font-family: 'Roboto';
  align-self: flex-start;
`
