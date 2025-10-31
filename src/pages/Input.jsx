import React from 'react'
import { useState } from 'react'

const Input = () => {
    const [inputs, setInputs] = useState([])
    const [singleInput, setSingleInput] = useState('')

    const clickHandler = () => {
        setInputs([...inputs, { id: Date.now(), placeholder:"input your name field", value:""}])
    }

    const deleteHandler = (index) => {
        console.log(index)
        const updatedInput = inputs.filter((input) => input.id !==  index)
        console.log(updatedInput)
        setInputs(updatedInput)
    }

    const changeValue = (id, inputValue) => {
        const updatedInput = inputs.map((input) => input.id === id ? {...input , value: inputValue} : input)
        setInputs(updatedInput)
    }

    return (
        <div className='mt-15 ml-15'>
            <input type="text" placeholder='input your name in the field' className='d-inline border-1 p-1 w-100 px-2 my-5 rounded' onChange={(e) => {setSingleInput(e.target.value)}}/>
            <input type="button" value="+" className='bg-blue-500  text-white py-2 px-4 rounded active:bg-blue-800 ms-3' onClick={clickHandler}/>
            {singleInput === "" ? "" : <h4 className='ms-15 inline'>{singleInput}</h4>}
            
            {inputs.map((inputData) => (
                <div key={inputData.id}>
                    <input type="text" placeholder={inputData.placeholder} className=' border-1 p-1 w-100 px-2 my-5 rounded' onChange={(e)=>changeValue(inputData.id, e.target.value)}/>
                    <input type="button" value="-" className='bg-red-500  text-white py-2 px-4 rounded active:bg-red-800 ms-3' onClick={() => {deleteHandler(inputData.id)}}/>  
                    {inputData.value === "" ? "" : <h4 className='ms-15 inline'>{inputData.value}</h4>}
                </div>
            ))}
        </div>
    )
}

export default Input