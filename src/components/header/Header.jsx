import './Header.css'

export function Header() {
    return (
        <>
            <header className="container main-header">
                <img className="logo" src="./images/logo-text.webp" alt="logo" />
                <nav className="main-nav">
                    <a className="link active" href="#">About</a>
                    <a className="link" href="#">Plans</a>
                    <a className="link" href="#">Blog</a>
                    <a className="link" href="#">Pricing</a>
                </nav>
                <a className="button" href="#">Try for free</a>
            </header>
        </>
    );
}