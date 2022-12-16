import { useState, useEffect } from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'https://db-json-server-project-grupo.vercel.app'

export default function useAxios (axiosParams) {
    const [ response, setResponse ] = useState( [] )
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState( true )

    const fetchData = async ( params ) => {
        try {
           const result = await axios.request( params )
           setResponse( result.data )

        } catch( error ) {
            setError( error )

        } finally {
            setLoading( false )
        }
    }
    
    useEffect(() => {
        fetchData(axiosParams)
    })
    
    return { response, loading, error }
}