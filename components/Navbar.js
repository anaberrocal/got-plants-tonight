import Link from 'next/link';

const Navbar = () => {
return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <img className="logoImage" src='/static/favicon.ico' alt="Digital drawing of a leaf sprouting"/>
                <style jsx>{`
                    .logoImage {
                        width: auto;
                        height: 2em;
                    }
                `}</style>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/" alt="Home">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/myplants">My Plants</a>
            </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
        </div>
    </nav>
)
};

export default Navbar;