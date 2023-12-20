import NavDesktopItem from './NavDesktopItem';

export default function NavDesktop() {
    return (
        <nav id="nav-desktop">
            <ul id="primary">
                <NavDesktopItem url="/" name="home" />
                <NavDesktopItem url="/shows" name="shows" />
            </ul>
        </nav>
    );
}
