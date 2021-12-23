import axios from 'axios'
import { useEffect, useState } from 'react'

const useRequestData = (initialData, url) => {
    const [data, setData] = useState (initialData)

    useEffect (()=> {
        axios.get(url, {
            headers: {
                contentType: 'Application/json',
                Authorization: localStorage.getItem('token')
            }
        })
        .then((res)=> {
            console.log(res)
            setData(res.data)
        })
        .catch ((err)=> {
            console.log(err.response)
        })
    }, [url])
    return (data)
}

export default useRequestData