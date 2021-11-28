import React from 'react'
import type { Item } from '../../../types/Items'

const ItemListContainer = ({title} : Item) => {
    return (
        <div className='w-100 text-center my-5'>
            <h1>{title}</h1>
        </div>
    )
}

export default ItemListContainer