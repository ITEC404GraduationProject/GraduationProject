import React, {useContext, useEffect, useState} from 'react';
import "./CreateOffer.scss"
import Header from "../header/Header";
import $api from "../../http";
import {AuthContext} from "../../context/auth.context";
import {useHistory} from "react-router-dom";

const CreateOffer = () => {

    const auth = useContext(AuthContext)
    const history = useHistory()

    const [formData, setFormData] = useState({
        title: "", description: "", address: "", amount: 0, furnitureId: "", priceId: "", currency: "dollar"
    })
    const [formFurnitureData, setFormFurnitureData] = useState({
        hasBed: false, hasTV: false, hasInternet: false, hasMicrowave: false,
        hasKitchen: false, hasWashingMachine: false, hasAirConditioner: false, hasIron: false
    })
    const [selectOpt, setSelectOpt] = useState(null)

    const [image, setImage] = useState("")

    const onCreate = async (e) => {
        const a = new FormData()
        a.append("postedFile", image)
        if (formData.title && formData.description && formData.address && formData.housingTypeId && formData.agentId) {
            let imageLink
            if (image) {
                const responseImage = await $api.post('/offer/image', a, {withCredentials: true})
                imageLink = responseImage.data.fileName
            }
            await $api.post('/offer',
                { offer: {...formData, imageLink},
                    furniture: formFurnitureData,
                    price: formData}, {withCredentials: true})
        } else {
            console.log("Form data validation error")
        }
        history.push("/home")
    }

    useEffect( () => {
        async function fetchHousingTypes() {
            const response = await $api.get(`/housingtype`, {withCredentials: true})
            setSelectOpt(response.data)
        }
        fetchHousingTypes()
    }, [])

    useEffect(() => {
        if (auth.user) {
            const user = auth.user
            setFormData(prev => ({...prev, agentId: user.id}))
        }
    }, [auth])

    const onChange = (e, field) => {
        let value = e.target.value
        if (field === "price") {
            value = Number(value)
        }
        setFormData(prev => ({...prev, [field]: value}))
    }

    const onFurnitureChange = (e, field) => {
        setFormFurnitureData(prev => ({...prev, [field]: !formFurnitureData[field]}))
    }

    const onImageChange = (e) => {
        setImage(e.target.files[0])
    }

    return (
        <>
            <Header />
            <div className="container">
                <div className="page__row">
                    <form className="create__form">
                        <div className="row">
                            <div>
                                Title <input onChange={e => onChange(e, "title")} />
                            </div>
                            <div>
                                Address <input onChange={e => onChange(e, "address")} />
                            </div>
                        </div>
                        <div className="row">
                            Description <input onChange={e => onChange(e, "description")} />
                        </div>
                        <div className="row">
                            <div className="a">
                                Price per month <input type="number" onChange={e => onChange(e, "amount")} />
                            </div>
                            <div className="a">
                                Housing type
                                <select onChange={e => onChange(e, "housingTypeId")}>
                                    <option value={-1}>Select housing type</option>
                                    { selectOpt && selectOpt.map((option) => {
                                        return <option value={option.id}>{option.housingTypeName}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <hr className="sep-line__hor"/>
                        <div className="show-more__checkbox-group">
                            <div className="show-more__checkbox-input"><input id={"hasBed"} type={"checkbox"} onChange={e => onFurnitureChange(e, "hasBed")}/><label htmlFor={"hasBed"}>Bed</label></div>
                            <div className="show-more__checkbox-input"><input id={"hasTV"} type={"checkbox"} onChange={e => onFurnitureChange(e, "hasTV")}/><label htmlFor={"hasTV"}>TV</label></div>
                            <div className="show-more__checkbox-input"><input id={"hasInternet"} type={"checkbox"} onChange={e => onFurnitureChange(e, "hasInternet")}/><label htmlFor={"hasInternet"}>Internet</label></div>
                            <div className="show-more__checkbox-input"><input id={"hasMicrowave"} type={"checkbox"} onChange={e => onFurnitureChange(e, "hasMicrowave")}/><label htmlFor={"hasMicrowave"}>Microwave</label></div>
                        </div>
                        <div className="show-more__checkbox-group">
                            <div className="show-more__checkbox-input"><input id={"hasKitchen"} type={"checkbox"} onChange={e => onFurnitureChange(e, "hasKitchen")}/><label htmlFor={"hasKitchen"}>Kitchen</label></div>
                            <div className="show-more__checkbox-input"><input id={"hasWashingMachine"} type={"checkbox"} onChange={e => onFurnitureChange(e, "hasWashingMachine")}/><label htmlFor={"hasWashingMachine"}>Washing Machine</label></div>
                            <div className="show-more__checkbox-input"><input id={"hasAirConditioner"} type={"checkbox"} onChange={e => onFurnitureChange(e, "hasAirConditioner")}/><label htmlFor={"hasAirConditioner"}>Air Conditioner</label></div>
                            <div className="show-more__checkbox-input"><input id={"hasIron"} type={"checkbox"} onChange={e => onFurnitureChange(e, "hasIron")}/><label htmlFor={"hasIron"}>Iron</label></div>
                        </div>
                        <hr className="sep-line__hor"/>
                        <div className="row">
                            Image <input type="file" onChange={onImageChange}/>
                        </div>
                        <hr className="sep-line__hor"/>
                        <button onClick={onCreate} type="button">Create</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateOffer;