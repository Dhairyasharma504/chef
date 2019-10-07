const Menu = () => (
  <div>
    <div className="hero">
      <div className="hero-body">
        <div className="container">
          <h4 className="subtitle is-4 has-text-left">Food Menu____</h4>
          <h1 className="title is-1 is-spaced has-text-left">Delicious food</h1>
        </div>
      </div>
    </div>

    <style jsx>{`
      .subtitle {
        font-family: cursive;
        color: red;
        margin-top: 2rem;
        margin-bottom: 4rem;
        font-weight: bolder;
      }
      .title {
        margin-inline-end: 30rem;
        margin-top: 2rem;
        color: #3e3536f0;
        line-height: 1.2;
        font-size: 4rem;
        font-family: cursive;
        color: #2f2d4e;
        font-weight: bolder;
      }
      .hero {
      }
    `}</style>
  </div>
);
export default Menu;
