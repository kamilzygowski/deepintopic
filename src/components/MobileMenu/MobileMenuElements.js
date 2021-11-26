import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
position: fixed;
z-index:999;
width: 100%;
height:100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left:0;
transition: 0.3 ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

/*
*/

export const CloseIcon = styled(FaTimes)`
color:#fff;
`;

export const Icon = styled.div`
position: absolute;
top: 19px;
right:24px;
font-size:32px;
cursor: pointer;
outline: none;
`;

export const SidebarWrapper = styled.div`
color:#fff;
`

export const SidebarMenu = styled.ul`
display:grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(7, 105px);
text-align: center;
margin:auto auto;
@media screen and (max-width: 480px){
    grid-template-rows: repeat (6, 80px);
}
`
// grid template rows, druga zmienna po repeat zmienia rozstawienie

export const SidebarRoute = styled(LinkR)`
border-radius: 50px;

white-space: nowrap;
padding: 16px 64px;
color: #fff;
margin:20px 0;
font-size:24px;
outline:none;
border:none;
cursor: pointer;
transition: 0.8s all ease;
text-decoration:none;
&:hover {
    transition: all 0.2 ease-in-out;
    
    color:#010606;
}
`