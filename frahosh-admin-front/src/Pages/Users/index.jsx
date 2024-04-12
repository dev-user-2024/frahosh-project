import { useState } from 'react'
import Button from './../../Components/general/Button'
import * as Styled from './styled'
import UsersComponets from '../../Components/local/Users'

const Users = () => {
  const [roles] = useState([
    { id: 'frahosh', name: 'فراهوش' },
    { id: 'students', name: 'دانش آموزان' },
    { id: 'teachers', name: 'معلمان' },
    { id: 'schools', name: 'مدارس' },
    { id: 'parents', name: 'اولیا' },
    { id: 'consultant', name: 'مشاور' },
    { id: 'special', name: 'قرار دادهای خاص' },
  ])

  const [activeComponent, setActiveComponent] = useState('students')

  return (
    <Styled.UsersContainer container>
      <Styled.UsersButton item xs={12}>
        {roles.map(role => (
          <Button key={role.id} variant={activeComponent === role.id ? 'contained' : 'outlined'} onClick={() => setActiveComponent(role.id)}>{role.name}</Button>
        ))}
      </Styled.UsersButton>
      <UsersComponets activeComponent={activeComponent}/>
    </Styled.UsersContainer>
  )
}

export default Users