import useAxios from "../axiosHook"

export default function Caldas() {
    const { response, loading, error } = useAxios( { 
        method: 'get',
        url: '/caldas_acai',
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

            {response.map( (calda) => {
                return(
                    <div className='card text-center' key={calda.id} >
                        <div className='card-body'>
                            <h4 className='card-title'>{calda.nome}</h4>
                        </div>
                    </div>
                )
            } ) }
        </div>
    </>
    )
}