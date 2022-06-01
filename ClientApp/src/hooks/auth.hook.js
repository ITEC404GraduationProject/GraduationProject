import {useState, useCallback, useEffect} from 'react'


export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)
    const [ready, setReady] = useState(null)

    const login = useCallback(async (jwtToken, user) => {
        setToken(jwtToken)
        setUser(user)
        localStorage.setItem("token", jwtToken)
        localStorage.setItem("user", JSON.stringify(user))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUser(null)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
    }, [])

    useEffect(async () => {
        const token = localStorage.getItem("token")
        const user = localStorage.getItem("user")

        if (token && user) {
            await login(token, JSON.parse(user))
        }
        setReady(true)
    }, [login])

    return { login, logout, token, user, ready }
}