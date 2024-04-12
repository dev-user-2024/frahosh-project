import { Grid } from '@mui/material'
import * as Styled from './styled'
import { useState } from 'react'
import schools from '../../../../../assets/icons/schools-dashboard.svg'
import consultants from '../../../../../assets/icons/consultants-dashboard.svg'
import parents from '../../../../../assets/icons/parents-dashboard.svg'
import students from '../../../../../assets/icons/students-dashboard.svg'


const Quantity = () => {
    const [quantityItems] = useState([
        { id: 1, title: 'مدارس', quantity: '25', icon: schools },
        { id: 2, title: 'مشاوران', quantity: '36', icon: consultants },
        { id: 3, title: 'اولیه', quantity: '215', icon: parents },
        { id: 4, title: 'دانش آموزش', quantity: '2600', icon: students},
    ])

    return (
        <Styled.QuantityCards container spacing={3} marginTop={0.5}>
            {quantityItems.map(item => (
                <Grid key={item.id} item sm={12} md={3}>
                    <div>
                        {console.log(item.icon)}
                        <img src={item.icon} alt="" />
                        <h4>{item.title}</h4>
                        <p>{item.quantity}</p>
                    </div>
                </Grid>
            ))}
        </Styled.QuantityCards>
    )
}

export default Quantity