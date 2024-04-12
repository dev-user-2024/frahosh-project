import React from 'react'
import * as Styled from './styled'

const Button = ({ variant = "contained", children, ...props }) => {
    return (
        <div>
            <Styled.Button variant={variant} {...props}>
                {children}
            </Styled.Button>
        </div>
    )
}

export default Button