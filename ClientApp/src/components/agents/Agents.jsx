import Header from "../header/Header";
import "./Agents.scss"
import userIcon from "../../assets/icons/user.png"
import AgentsItem from "./agents-list/AgentsItem";
import $api from "../../http";
import {useEffect, useState} from "react";

const Agents = () => {


    const [data, setData] = useState([])
    const [displayedData, setDisplayedData] = useState([])

    const [nameToSearch, setNameToSearch] = useState("")
    const [surnameToSearch, setSurameToSearch] = useState("")

    useEffect(() => {
        async function fetchData() {
            const response = await $api.get(`/agent`, {withCredentials: true})
            setData(response.data)
            setDisplayedData(response.data)
        }
        fetchData()
    }, [])

    useEffect(() => {
        filter()
    }, [nameToSearch, surnameToSearch])

    const filter = () => {
        let newData = data
        if (nameToSearch || surnameToSearch) {
            newData = newData.filter(item => {
                return item.name.includes(nameToSearch) && item.surname.includes(surnameToSearch)
            })
        }
        setDisplayedData(newData)
    }


    return (
        <div>
            <Header />
            <div className="container">
                <div className="page__row page__row-agents">
                    {/*<ResultsList data={displayedData} />*/}
                    <div className="input-group">
                        <input type="text" placeholder="Search By Name" value={nameToSearch} onChange={e => setNameToSearch(e.target.value)}/>
                        <input type="text" placeholder="Search By Surname" value={surnameToSearch} onChange={e => setSurameToSearch(e.target.value)}/>
                    </div>
                    <div className="list">
                        {
                            displayedData.map(item => (
                                <AgentsItem item={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agents