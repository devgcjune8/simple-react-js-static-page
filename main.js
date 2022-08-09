const Header = () => {
    return (
    <header>
    <nav>
        <img src="./React-icon.svg.png" width="75px"/>
        </nav>
     </header>
    )
}

const Footer = () => {
    return (
        <footer>
        <small>© 2022 Gregorio All rights reserved.</small>
        </footer>
    )
}

const MainContent = () => {
    return (
        <div>
              <h1>Quick Facts about React JavaScript</h1>
            <ul>
                <li>Released on <strong>May 19, 2013</strong>.</li>
                <li>It is authored by <strong>Jordan Walke</strong>, a <strong>Facebook</strong> employee.</li>
                <li>React is not a JavaScript Framework, but a <strong>JavaScript Library</strong>.</li>
                <li>It follows the practice of <strong>declarative</strong> programming.</li>
                <li>It has over <strong>193,000 stars</strong> on Github.</li>
                <li>React is a tool for <strong>building UI (user interface) components</strong> for games, apps and websites.</li>
            </ul>
        </div>
    )
}

function StaticPage() {
    return (
        <div>
            <Header />
            <MainContent/>
            <Footer />
        </div>
    )
}

ReactDOM.render(<StaticPage />, document.querySelector('#root'))