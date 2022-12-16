import useAxios from '../axiosHook' 

export default function Acompanhamento(){
    const { response, loading, error } = useAxios( { 
        method: 'get',
        url: '/acompanhamento_acai',
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

            {response.map( (acompanhamento) => {
                return(
                    <div className='card text-center' key={acompanhamento.id} >
                        <div className='card-body'>
                            <h4 className='card-title'>{acompanhamento.nome}</h4>
                        </div>
                    </div>
                )
            } ) }
        </div>
    </>
    )
}