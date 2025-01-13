import styled from 'styled-components'

export const ToggleButton = styled.button`
font-size:25px;
border:solid 0px;
color: ${({ toggle }) => (toggle ? '#FFA500' : '#1E90FF')};
background-color:transparent;
`