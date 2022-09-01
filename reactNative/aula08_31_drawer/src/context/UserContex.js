import { createContext } from 'react'

const userContextTemplate = [{
    nome: 'Joao',
    email: 'joao@gmail.com',
    fone: '123123'
},
{
    nome: 'Maria',
    email: 'maria@gmail.com',
    fone: '321321'
}
]

const UserContext = createContext()

const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={
            {
                list: userContextTemplate,
                setList: () => {}
            }
        }>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
export { UserContext }