import React from 'react'
import "./ button.css"
export default function Button({label}) {
    return (
        <div data-testid="button" className='Button-style'>
           {label} 
        </div>
    )
}
