import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  min-height: 100vh;
  background-color: #152850;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginContainer = styled.div`
  min-height: 550px;
  background-color: #e0eefe;
  border-radius: 30px;
  display: flex;
  align-items: center;
`

export const LoginImage = styled.img`
  width: 50%;
`

export const LoginFormContainer = styled.form`
  align-self: stretch;
  flex-grow: 1;
  background-color: #ffffff;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`

export const LoginGreeting = styled.h1`
  color: #183b56;
  font-size: 36px;
  margin-bottom: 10px;
`

export const FormLabel = styled.label`
  color: #5a7184;
  font-weight: bold;
  margin-block: 15px;
`

export const InputElement = styled.input`
  width: 100%;
  border: 1px solid #c3cad9;
  border-radius: 10px;
  padding: 15px 10px;
  outline: none;
`

export const LoginButton = styled.button`
  width: 100%;
  background-color: #1565d8;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  padding: 15px;
  margin-top: 30px;
  cursor: pointer;
`

export const ErrorText = styled.p`
  align-self: center;
  color: #ff0b37;
  font-size: 14px;
`
