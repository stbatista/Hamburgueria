import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';


function Put() {
    const {id} = useParams()
    const {rota} = useParams()

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [preco, setPreco] = useState('')

    const data = {  
        nome: nome,
        descricao: descricao,
        preco: preco,
        categoria_id: 1,
    }
    
    useEffect( () => {
        axios.get(`https://db-json-server-project-grupo.vercel.app/hamburguer/${id}`)
        .then( (response) => {
            setNome(response.data.nome)
            setDescricao(response.data.descricao)
            setPreco(response.data.preco)
        })
    }, [id] )
    
        const update = (e) => {
            e.preventDefault()
            axios.put(`https://db-json-server-project-grupo.vercel.app/hamburguer/${id}`, data)
            .then(document.location.href="/")
            .catch((err) => {
                return(<p>{err.message}</p>)
            })
        }

    return(
        <>
        <div>
              <h1>Editar</h1>
              <form>
                <label for="nome">Hambúrguer:</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required/><br></br>

                <label for="nome">Descrição:</label>
                <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} required></input><br></br>

                <label>Preço:</label>
                <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} required></input><br></br>

                <button type='submit' onClick={update}>Atulizar</button>
            </form>

        </div>
        </>
    )
}

export default Put;