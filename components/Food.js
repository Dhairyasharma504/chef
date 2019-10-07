const Food = () => (
  <section className="section">
    <div className="columns ">
      <div className="column">
        <p className="food title is-1 is-spaced">
          Foods the most precious things
        </p>
        <a className="button is-danger is-rounded is-hovered is-focused button is-medium">
          Book Now
        </a>

        <div className="icons columns is-paddingless">
          <div className="column">
            <div className="image is-32x32">
              <img src="https://colorlib.com/preview/theme/sneaky/img/banner/fas-service-icon.png" />
            </div>
            <h4 className="subtitle is-6 has-text-left has-text-weight-semibold is-family-sans-serif">
              Fast Service 4
            </h4>
          </div>
          <div className="column">
            <div className="image is-32x32">
              <img src="https://colorlib.com/preview/theme/sneaky/img/banner/fresh-food-icon.png" />
            </div>
            <h4 className="subtitle is-6 has-text-left has-text-weight-semibold is-family-sans-serif">
              Fresh Food 4
            </h4>
          </div>
          <div className="column">
            <div className="image is-32x32">
              <img src="https://colorlib.com/preview/theme/sneaky/img/banner/support-icon.png" />
            </div>
            <h4 className="subtitle is-6 has-text-left has-text-weight-semibold is-family-sans-serif">
              24/7 Support
            </h4>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="image1">
          <img src="https://colorlib.com/preview/theme/sneaky/img/banner/hero-banner1.png" />
        </div>
      </div>

      <style jsx>{`
        .food {
          margin-top: 3rem;
          font-weight: bolder;
          margin-left: 55px;
          font-size: 5rem;
          font-family: josefin sans, sans-serif;
          color: #2f2d4e;
        }
        .icons {
          margin-left: 3rem;
          margin-top: 2rem;
        }
        .button {
          margin-top: 2rem;
          margin-left: 3rem;
        }
        .image1 {
          box-shadow: 16px 11px 11px powderblue;
        }
        .subtitle {
          margin-top: 1rem;
        }
      `}</style>
    </div>
  </section>
);
export default Food;
