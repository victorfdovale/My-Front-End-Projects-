import { useState, useEffect } from "react";
import axios from "axios";

export const useRequestData = (url, id) => {
    const [data, setData] = useState([])
    const [isLoading, setIsloading] = useState(false)
    const [error, setError] = useState('')
    useEffect(() => {
        axios.get(url)
        .then((res) => {
            console.log(res)
            setData(res.data.trips)
            setIsloading(true)
        })
        .catch((err) => {
            console.log('deu ruim')
            console.log(err.reponse.data)
            setError(err)
            setIsloading(false)
        })
    }, [url, id])
    return [data, isLoading, error]
}