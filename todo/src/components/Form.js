import React, { useReducer } from 'react'
import styled from 'styled-components'
import { initialState, reducer } from '../reducers/Reducer'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: grey;
    height: 100vh;
`

const Name = styled.h4`
    text-align: center;
    color: black;
`

const Input = styled.input`
    margin-bottom: 1rem;
`

const Button = styled.button`
    margin-bottom: 1rem;
`

const Complete = styled.button`
    padding: 0 1rem;
`

const ToDoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 10rem;
    background: #e7e7e7;
    margin-bottom: 1rem;
`

const Clear = styled.button`
    
`

const AddForm = styled.form`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
`

const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    let newPayload = {
        item: '',
        completed: false,
        id: Date.now()
    }

    const payloadAdd = (event) => {
        newPayload = {
            item: event.target.value,
            completed: false,
            id: Date.now()
        }

        return newPayload
    }

    const handleClick = (event) => {
        event.preventDefault()
        dispatch({ type: 'ADD', payload: newPayload })
    }

    const handleClear = (event) => {
        event.preventDefault()
        dispatch({ type: 'CLEAR' })
    }

    console.log(state)

    return (
        <Wrapper>
            {state.map((item) => {
                return (<ToDoWrapper>
                            <Name style={{
                                textDecoration: item.completed === true ? 'line-through' : 'none'
                            }}>
                                {item.item}
                            </Name>
                            <Complete onClick={() => dispatch({ type: 'TOGGLE', payload: item })}>
                                Complete
                            </Complete>
                        </ToDoWrapper>)
            })}
            <AddForm>
                <Input type='text' onChange={payloadAdd} placeholder='to-do' />
                <Button onClick={handleClick}>Add Todo</Button>
                <Clear onClick={handleClear}>Clear Completed</Clear>
            </AddForm>
        </Wrapper>
    )
}

export default Form