import styled from 'styled-components';


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, #383838 0%, #000 81.25%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px){
      padding: 10px;
    }
`;

export const TodoList = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;

    @media (max-width: 600px){
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

    }
`;


export const List = styled.ul`
  padding: 0;
  margin-top: 1px;
  
`;

export const Item = styled.li`
    color: #000;
    font-size: 15px;
    font-weight: 400;
    background-color: #e4e4e4;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 60px;
    list-style-type: none;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer; 

    &::first-letter {
        text-transform: uppercase;
    }

    &:hover{
    opacity: 0.8;
    }
`;



export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    height: 40px; 
    font-weight: 400;
    font-size: 15px;
    outline: none;
    padding-left: 10px;
`;

export const Button = styled.button`
  background-color: #8052ec;
  border-radius: 5px;
  height: 40px; 
  border: none;
  color: #fff;
  cursor: pointer;
  margin-left: 20px;

  &:hover{
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  @media (max-width: 600px){
    width: 100%;
    margin: 0px;
    
    }
`;

export const ListContainer = styled.div`
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
  margin-top: 20px;

  @media (max-width: 600px){
    margin-top: 0;
    
    }

`


