import useAxios from '../axiosHook' 


export default function Refrigerantes () {
    const { response, loading, error } = useAxios( { 
        method: 'get',
        url: '/refrigerante',
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

            {response.map( (refrigerante) => {
                return(
                    <div className='card text-center' key={refrigerante.id} >
                        <img src={refrigerante.imagem} alt="Refrigerante" />
                        <div className='card-body'>
                            <h4 className='card-title'>{refrigerante.nome}</h4>
                            <p className='card-text text-secondary'>Tamanho: {refrigerante.descricao}</p>
                            <p className='card-text text-secondary'>Preço: R$ {refrigerante.preco}</p>
                        </div>
                        <div className='buttons'>
                            <button className='buttonEditDelete'>Editar</button>
                            <button className='buttonEditDelete'>Deletar</button>
                        </div>
                    </div>
                )
            } ) }
        </div>
    </>
    )
}