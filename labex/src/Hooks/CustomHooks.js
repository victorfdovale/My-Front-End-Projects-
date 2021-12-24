import { useState, useEffect } from "react";
import axios, { Axios } from "axios";

export const useRequestData = (url, id) => {
    const [tripsList, setTripsList] = useState([])
    const [isLoading, setIsloading] = useState(false)
    const [error, setError] = useState('')
    useEffect(() => {
        axios.get(url)
        .then((res) => {
            console.log(res)
            setTripsList(res.data.trips)
            setIsloading(true)
        })
        .catch((err) => {
            console.log('deu ruim')
            console.log(err.reponse.data)
            setError(err)
            setIsloading(false)
        })
    }, [url, id])
    return [tripsList, isLoading, error]
}