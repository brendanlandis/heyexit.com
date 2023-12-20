import NavDesktopItem from './NavDesktopItem';

export default function NavDesktop() {
    return (
        <nav id="nav-desktop">
            <ul id="primary">
                <NavDesktopItem url="/" name="home" />
                <NavDesktopItem url="/about" name="about" />
                <NavDesktopItem url="/discography" name="discography" />
                <NavDesktopItem url="/live" name="live" />
                <NavDesktopItem url="/contact" name="contact" />
            </ul>
        </nav>
    );
}
