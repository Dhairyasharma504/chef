const Chef = () => (
  <section className="section">
    <div className="columns is-desktop">
      <div className="column">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                className="myimage"
                src="https://colorlib.com/preview/theme/sneaky/img/home/chef-1.png"
              />
            </figure>
            <div className="text2">
              <p className="title is-4 has-text-centered">Daniesl Laran</p>
              <p className="subtitle is-6 has-text-centered">Executive Chef</p>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                className="myimage"
                src="https://colorlib.com/preview/theme/sneaky/img/home/chef-2.png"
              />
            </figure>
            <div className="text2">
              <p className="title is-4 has-text-centered">Daniesl Laran</p>
              <p className="subtitle is-6 has-text-centered">Executive Chef</p>
            </div>{" "}
          </div>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                className="myimage"
                src="https://colorlib.com/preview/theme/sneaky/img/home/chef-3.png"
              />
            </figure>
            <div className="text2">
              <p className="title is-4 has-text-centered">Daniesl Laran</p>
              <p className="subtitle is-6 has-text-centered">Executive Chef</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .myimage {
        transition: transform 2s;
        width: 0rem;
        height: 0rem;
        margin: 0 auto;
      }
      .myimage:hover {
        transform: scale(0.9);
      }
      .card {
        box-shadow: 0 2px 14px 5px rgba(20, 20, 20, 0.05);
      }
      .column {
        box-shadow: 3px 3px 6px -2px lightpink;
      }
      .text2 {
        box-shadow: 1px 2px 5px 2px deepskyblue;
      }
    `}</style>
  </section>
);
export default Chef;
