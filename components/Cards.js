const Cards = () => (
  <section className="section">
    <div className="columns">
      <div className="column">
        <div className="card has-text-centered is-hoverable">
          <img src="https://colorlib.com/preview/theme/sneaky/img/home/featured1.png" />
          <h4 className="title is-4 has-text-centered">Mountain Mike Pizza</h4>
          <h4 className="subtitle is-6">Whales and darkness moving</h4>
        </div>
        <div className="star">
          <i class="far fa-star" />
          <i class="far fa-star" />
          <i class="far fa-star" />
          <i class="far fa-star" />
          <i class="far fa-star" />
        </div>
      </div>
      <div className="column">
        <div className="card has-text-centered">
          <img src="https://colorlib.com/preview/theme/sneaky/img/home/featured2.png" />
          <h4 className="title is-4 has-text-centered">Patatas Bravas</h4>
          <h4 className="subtitle is-6">Whales and darkness moving</h4>
        </div>
        <div className="star">
          <i class="far fa-star" />
          <i class="far fa-star" />
          <i class="far fa-star" />
          <i class="far fa-star" />
          <i class="far fa-star" />
        </div>
      </div>
      <div className="column">
        {" "}
        <div className="card has-text-centered">
          <img src="https://colorlib.com/preview/theme/sneaky/img/home/featured3.png" />
          <h4 className="title is-4 has-text-centered">Pulled Sandwich</h4>
          <h4 className="subtitle is-6">Whales and darkness moving</h4>
        </div>
        <div className="star">
          <i class="far fa-star" />
          <i class="far fa-star" />
          <i class="far fa-star" />
          <i class="far fa-star" />
          <i class="far fa-star" />
        </div>
      </div>
      <div className="column">
        {" "}
        <div className="card has-text-centered">
          <img src="https://colorlib.com/preview/theme/sneaky/img/home/featured1.png" />
          <h4 className="title is-4 has-text-centered">Mountain Mike Pizza</h4>
          <h4 className="subtitle is-6">Whales and darkness moving</h4>
        </div>
        <div className="star">
          <i class="far fa-star" />
          <i class="far fa-star" />
          <i class="far fa-star" />
          <i class="far fa-star" />
          <i class="far fa-star" />
        </div>
      </div>
    </div>
    <style jsx>{`
      .column {
        box-shadow: 6px 6px 5px powderblue;
        margin-right: 1rem;
      }
      .subtitle {
        font-family: cursive;
      }
      .title {
        font-family: cursive;
      }
    `}</style>
  </section>
);
export default Cards;
