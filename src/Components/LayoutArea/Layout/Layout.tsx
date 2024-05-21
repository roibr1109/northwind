import "./Layout.css";
import {Header} from "../Header/Header";
import {CopyRights} from "../CopyRights/CopyRights";
import {Menu} from "../Menu/Menu";
import {Routing} from "../Routing/Routing";

export function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<header>
                <Header/>
            </header>
            <aside>
                <Menu/>
            </aside>
            <main>
                <Routing/>
            </main>
            <footer>
                <CopyRights/>
            </footer>
        </div>
    );
}
