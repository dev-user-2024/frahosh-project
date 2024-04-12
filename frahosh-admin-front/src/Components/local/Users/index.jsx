import React from 'react'
import Frahosh from './Components/Frahosh';
import Students from './Components/Students';
import Teachers from './Components/Teachers';
import * as Styled from './styled'
import Schools from './Components/Schools';
import Parents from './Components/Parents';
import Consultant from './Components/Consultant';
import Special from './Components/Special';

const Users = ({ activeComponent }) => {
  const renderComponent = () => {
    switch (activeComponent) {
      case 'frahosh':
        return <Frahosh />;
      case 'students':
        return <Students />;
      case 'teachers':
        return <Teachers />;
      case 'schools':
        return <Schools />;
      case 'parents':
        return <Parents />;
      case 'consultant':
        return <Consultant />;
        case 'special':
        return <Special />;
      default:
        return <></>;
    }
  };
  return (
    <Styled.UsersContainer>
      {renderComponent()}
    </Styled.UsersContainer>
  )
}

export default Users