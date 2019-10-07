const Navbar = () => (
  <section className="section">
    <div className="container">
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className="navbar">
          <a className="logo">
            <img
              src="https://colorlib.com/preview/theme/sneaky/img/logo.png"
              width="120"
              height="19"
            />
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="items">
            <div className="navbar-end">
              <div className="navbar-item is-hoverable">
                <a className="navbar-item">Home</a>
                <a className="navbar-item ">About</a>
                <a className="navbar-item">Menu</a>
                <a className="navbar-item">Chef</a>
                <a className="navbar-item">Blog</a>
                <a className="navbar-item">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .logo {
          margin-top: 2rem;
          margin-left: 6rem;
          box-shadow: 0px 1px #f30909;
        }
        .items {
          margin-top: 2rem;
          margin-left: 40rem;
          font-size: 17px;
          font-family: cursive;
        }
      `}</style>
    </div>
  </section>
);
export default Navbar;
