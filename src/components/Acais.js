import useAxios from '../axiosHook' 

export default function Acais () {
    const { response, loading, error } = useAxios( { 
        method: 'get',
        url: '/acai',
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

            {response.map( (acai) => {
                return(
                    <div className='card text-center' key={acai.id} >
                        <img src={acai.imagem} alt="Açaí" />
                        <div className='card-body'>
                            <h4 className='card-title'>Açaí</h4>
                            <p className='card-text text-secondary'>Sabor: {acai.sabor}</p>
                            <p className='card-text text-secondary'>Tamanho: {acai.tamanho}</p>
                            <p className='card-text text-secondary'>Preço: R$ {acai.preco}</p>
                        </div>
                    </div>
                )
            } ) }
        </div>
    </>
    )
}