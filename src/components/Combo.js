import useAxios from '../axiosHook' 

export default function Combo () {
    const { response, loading, error } = useAxios( { 
        method: 'get',
        url: '/combo',
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

            {response.map( (combo) => {
                return(
                    <div className='card text-center' key={combo.id} >
                        <img src={combo.imagem} alt="Combo" />
                        <div className='card-body'>
                            <h4 className='card-title'>{combo.nome}</h4>
                            <p className='card-text text-secondary'>Hambúrgueres: {combo.quantidade_hambúrgue} {combo.hambúrgueres}</p>
                            <p className='card-text text-secondary'>Refrigerante: {combo.refrigerantes}</p>
                            <p className='card-text text-secondary'>Acompanhamentos: {combo.acompanhamentos}</p>
                            <p className='card-text text-secondary'>Preço: R$ {combo.preco}</p>
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