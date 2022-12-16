import useAxios from '../axiosHook' 
import Acompanhamento from '../components/Acompanhamento'
import Caldas from '../components/Caldas'

export default function Acais () {
    const { response, loading, error } = useAxios( { 
        method: 'get',
        url: '/acai',
    } )
    
    return(
        <main >
            <div className="divAcai">
            <h1>Açaís</h1>
            <hr></hr>
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

                <div className=" containerCard">

                    {response.map( (acai) => {
                        return(
                            <div className='card text-center' key={acai.id} >
                                <img src={acai.imagem} alt="Hambúrguer" />
                                <div className='card-body'>
                                    <h4 className='card-title'>{acai.sabor}</h4>
                                    <p className='card-text text-secondary'><p>Tamanho:</p> {acai.tamanho}</p>
                                    <p className='card-text text-secondary'><p>Preço:</p> R$ {acai.preco}</p>
                                </div>
                            </div>
                        )
                    } ) }
                </div>
                <div className="divCardapio">
                    <h2>Acompanhamentos para Açaí</h2>
                    <hr></hr>
                    <Acompanhamento />
                </div>
                <div className="divCardapio">
                    <h2>Caldas para Açaí</h2>
                    <hr></hr>
                    <Caldas />
                </div>
            </div>
        </main>
    )
}