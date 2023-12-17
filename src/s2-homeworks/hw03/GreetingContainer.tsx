import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type SetErrorType = (error: string) => void
type SetNameType = (name: string) => void
type AddUserCallbackType = (name: string) => void

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any - ok
    addUserCallback: AddUserCallbackType // need to fix any - ok
}

export const pureAddUser = (name: string, setError: SetErrorType, setName: SetNameType, addUserCallback: AddUserCallbackType) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут - ok
    if (!name) {
        setError('Name input is required. Please enter name...');
    } else {
        addUserCallback(name);
        setName('');
    }

}

export const pureOnBlur = (name: string, setError: SetErrorType) => { // если имя пустое - показать ошибку - ok
    !name && setError('You didn`t enter name. Name input is required. Please enter name...')
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить addUser() - ok
    if (e.key === 'Enter') {
        addUser();
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any - ok
    const [error, setError] = useState<string>('') // need to fix any - ok

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any - ok
        setName(e.currentTarget.value) // need to fix - ok

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix - ok
    const lastUserName = users.length ? users[users.length - 1].name : ''// need to fix - ok

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
