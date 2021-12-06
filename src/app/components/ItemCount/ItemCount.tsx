import React from 'react'
import { Button, InputGroup } from 'react-bootstrap'

interface ItemCountProps {
    counter : number,
    handleDecrement : () => void,
    handleIncrement : () => void
}

const ItemCount = ({counter,handleDecrement,handleIncrement} : ItemCountProps) => {


    
    return (
        <InputGroup className='my-3'>
            <Button variant="danger" className='me-3' onClick={handleDecrement}>-</Button>
            <InputGroup.Text>{counter}</InputGroup.Text>
            <Button variant="success" className='mx-3' onClick={handleIncrement}>+</Button>
        </InputGroup>
    )
}

export default ItemCount
