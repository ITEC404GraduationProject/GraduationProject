import React, {useContext, useEffect, useRef, useState} from 'react';
import "./CreateOffer.scss"
import Header from "../header/Header";
import $api from "../../http";
import {AuthContext} from "../../context/auth.context";

const CreateOffer = () => {

    const auth = useContext(AuthContext)

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
            const responseOffer = await $api.post('/offer', {offer: {...formData, imageLink}, furniture: formFurnitureData, price: formData}, {withCredentials: true})
        } else {
            console.log("Form data validation error")
        }
    }

    useEffect(async () => {
        const response = await $api.get(`/housingtype`, {withCredentials: true})
        setSelectOpt(response.data)
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
                    <form>
                        Title <input onChange={e => onChange(e, "title")} /> <br/>
                        Description <input onChange={e => onChange(e, "description")} /> <br/>
                        Address <input onChange={e => onChange(e, "address")} /> <br/>
                        Price per month <input type="number" onChange={e => onChange(e, "amount")} /> <br/>
                        <select onChange={e => onChange(e, "housingTypeId")} style={{width: "200px", marginBottom: "50px"}}>
                            <option value={-1}>Select housing type</option>
                            { selectOpt && selectOpt.map((option) => {
                                return <option value={option.id}>{option.housingTypeName}</option>
                            })}
                        </select><br/>
                        Bed <input type={"checkbox"} onChange={e => onFurnitureChange(e, "hasBed")}/>
                        TV <input type={"checkbox"} onChange={e => onFurnitureChange(e, "hasTV")}/>
                        Internet <input type={"checkbox"} onChange={e => onFurnitureChange(e, "hasInternet")}/>
                        Microwave <input type={"checkbox"} onChange={e => onFurnitureChange(e, "hasMicrowave")}/>
                        Kitchen <input type={"checkbox"} onChange={e => onFurnitureChange(e, "hasKitchen")}/>
                        Washing Machine <input type={"checkbox"} onChange={e => onFurnitureChange(e, "hasWashingMachine")}/>
                        Air Conditioner <input type={"checkbox"} onChange={e => onFurnitureChange(e, "hasAirConditioner")}/>
                        Iron <input type={"checkbox"} onChange={e => onFurnitureChange(e, "hasIron")}/>
                        <input type="file" onChange={onImageChange}/>
                        <button onClick={onCreate} type="button">Create</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateOffer;