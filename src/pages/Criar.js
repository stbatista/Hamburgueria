export default function Criar(){
    return(
        <>
        <h1>Crie seu lanche</h1>
        <div className="criarCombo">
            <h3>Crie Seu Combo</h3>
            <div>
                <label>Hambúrgueres:</label>
                <input type="text" placeholder="Unid."></input>
                <input type="number" placeholder="Unid."></input>
            </div>
            <div>
                <label>Refrigerantes:</label>
                <input type="number" placeholder="Unid."></input>
            </div>
            <div>
                <label>Açaí:</label>
                <input type="number" placeholder="Unid."></input>
            </div>
            <button className="postCombo" onClick={handlePostCombo}>Criar Combo</button>
        </div>
        </>
    )
}