import { Link, Outlet } from 'react-router-dom'


export default function Layout() {
    return(
        <>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Cardápio</Link></li>
                        <li><Link to="/acais">Açaís</Link></li>
                        <li><Link to="/combos">Combos</Link></li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>
    )
}