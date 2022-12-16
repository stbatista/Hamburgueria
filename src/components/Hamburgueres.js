import useAxios from '../axiosHook' 
import { Link } from 'react-router-dom'

export default function Hamburgueres () {
    const { response, loading, error } = useAxios( { 
        method: 'get',
        url: '/hamburguer',
    } )
    
    return(
        <>
        <div>
            {loading ? (
                <p>Carregando...</p>
                ) : (
                    <div>
                        {
                            error && <p>{error.message}</p>
                        }
                    </div>
                )
            }
        </div>
        <div className="containerCard">

            {response.map( (hamburguer) => {
                return(
                    <div className='card text-center' key={hamburguer.id} >
                        <img src={hamburguer.imagem} alt="Hambúrguer" />
                        <div className='card-body'>
                            <h4 className='card-title'>{hamburguer.nome}</h4>
                            <p className='card-text text-secondary'><p>Descrição:</p> {hamburguer.descricao}</p>
                            <p className='card-text text-secondary'><p>Preço:</p> R$ {hamburguer.preco}</p>
                        </div>
                        <div className='buttons'>
                            <Link to="/edit"><button className='buttonEditDelete'>Editar</button></Link>
                            <button className='buttonEditDelete'>Deletar</button>
                        </div>
                    </div>
                )
            } ) }
        </div>
    </>
    )
}