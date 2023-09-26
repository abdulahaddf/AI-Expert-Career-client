import { useState } from 'react'
import { FiCheck } from 'react-icons/fi'
const ListItem = ({ text, handleClick, isSelected }) => {
    const [isChecked, setIsChecked] = useState(false)
    return (
        <li
            onClick={() => {
                handleClick(text)
                setIsChecked(!isChecked)
            }}
            className='relative item flex items-center px-2 cursor-pointer h-10 hover:bg-[#EFEFEF] transition-all duration-200 ease-in-out '
        >
            <span className='checkbox border border-[#B6B6B6]  mr-3 h-[19px] w-[21px] flex justify-center items-center'>

            </span>
            {isChecked && (
                <span className='absolute bg-blue-500 h-[19px] w-[21px] flex justify-center items-center text-white'>
                    <FiCheck />
                </span>
            )}
            <span className='item-text'>{text}</span>
        </li>
    )
}

export default ListItem