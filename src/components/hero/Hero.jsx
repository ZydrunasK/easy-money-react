import './Hero.css'
import './Buttons.css'
import './Trio.css'

export function Hero() {
    return (
        <>
            <main className="main ">
                <section className="container hero">
                <div className="text">
                        <div className="badge">
                            <svg style={{color: "#00D354", height: "20px", width: "20px", stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 512 512", xmlns:"http://www.w3.org/2000/svg"}}>
                                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                </path>
                            </svg>
                        Get money expertise</div>
                        <h1 className="main-title">Easy <span className="crazy">Money
                            <div className="sqr"></div>
                        </span> Capital Invest <span>.</span> </h1>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius facere fugit repudiandae optio assumenda ratione, excepturi explicabo ipsam eos facilis ipsa laboriosam. Aliquam deleniti laboriosam nam corporis fuga sed debitis.</p>
                        <a className="button button-big button-blue" href="#">Get started</a>
                        <a className="button button-big button-white" href="#">Request demo</a>
                    </div>
                <img className="pic-guy" src="./images/person.webp" alt="person" />
                </section>

                <section className="container trio-list">
                    <div className="trio blue">
                        <img className="img " src="./images/trio-1.webp" alt="icon" />
                        <p className="title">View top brokers</p>
                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="trio pink">
                        <img className="img" src="./images/trio-2.webp" alt="icon" />
                        <p className="title">Compair online brokers</p>
                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam.</p>
                    </div>
                    <div className="trio purple">
                        <img className="img" src="./images/trio-3.webp" alt="icon" />
                        <p className="title">Analyze your fees</p>
                        <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </section>
                
                <section className="container brand-list">
                    <img className="logo" src="./images/logo-text.webp" alt="logo" />
                    <img className="logo" src="./images/logo-text.webp" alt="logo" />
                    <img className="logo" src="./images/logo-text.webp" alt="logo" />
                    <img className="logo" src="./images/logo-text.webp" alt="logo" />
                    <img className="logo" src="./images/logo-text.webp" alt="logo" />
                </section>
            </main>

            <footer className="container main-footer">
                <div className="social">
                    <a href="https://example.com" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                    <a href="https://example.com" target="_blank"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
                    <a href="https://example.com" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="https://example.com" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                </div>
                <p>&copy; 2024 - All rights reserverd</p>

             </footer>
        </>
    );
}