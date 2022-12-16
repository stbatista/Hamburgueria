import Hamburgueres from '../components/Hamburgueres'
import Refrigerantes from '../components/Refrigerantes'
import Acais from '../components/Acais'
import Combo from '../components/Combo'

export default function Cardapio() {
    return(
        <main>
            <h1>Cardápio</h1>
            <section className="sectionCardapio">
                <div className="divCardapio">
                    <h2>Hambúrgueres</h2>
                    <hr></hr>
                    <Hamburgueres />
                </div>

                <div className="divCardapio">
                    <h2>Refrigerantes</h2>
                    <hr></hr>
                    <Refrigerantes />
                </div>
                <div className="divCardapio">
                    <h2>Açaís</h2>
                    <hr></hr>
                    <Acais />
                </div>
                <div className="divCardapio">
                    <h2>Combos</h2>
                    <hr></hr>
                    <Combo />
                </div>

            </section>
        </main>
    )
}