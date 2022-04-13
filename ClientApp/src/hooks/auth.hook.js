import {useState, useCallback, useEffect} from 'react'

const storageName = 'token'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [ready, setReady] = useState(null)

    const login = useCallback(async (jwtToken) => {
        setToken(jwtToken)
        localStorage.setItem(storageName, jwtToken)
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(async () => {
        const data = localStorage.getItem(storageName)
        if (data) {
            await login(data)
        }
        setReady(true)
    }, [login])

    return { login, logout, token, ready }
}