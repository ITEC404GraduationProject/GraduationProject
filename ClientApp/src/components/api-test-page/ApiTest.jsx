import {useContext, useEffect, useState} from "react";
import $api from "../../http";
import Header from "../header/Header";
import "./ApiTest.scss"
import {AuthContext} from "../../context/auth.context";

const ApiTest = () => {

    const [data, setData] = useState(null)

    const auth = useContext(AuthContext)

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        auth.isAuthenticated && getData()
    }, [auth.isAuthenticated])

    const getData = async () => {
        const response = await $api.get("/student")
        if (response.data) {
            setData(response.data)
        }
    }


    return (
        <div>
            <Header />
            <div className="container">
                { auth.isAuthenticated ?
                    <table className="atable">
                        <thead>
                        { data && Object.keys(data[0]).map((item) => {
                            return <th>{item}</th>
                        }) }
                        </thead>
                        <tbody>
                        { data && data.map((dataItem) => {
                            return <tr>
                                {
                                    Object.values(dataItem).map((item) => {
                                        return <td>{item}</td>
                                    })
                                }
                            </tr>
                        })}
                        </tbody>
                    </table> : <h1 className="atable">Not Authenticated</h1>
                }
            </div>
        </div>
    )
}

export default ApiTest