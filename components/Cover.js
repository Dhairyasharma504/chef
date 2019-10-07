const Cover = () => (
  <div>
    <div className="image">
      <p className="text    subtitle is-3 has-text-white has-text-centered">
        Some Trendy And Popular Courses Offerd
      </p>
      <p className="text1 title is-4 has-text-white has-text-centered">
        Under replenish give saying thing
      </p>
      <div className="redbutton">
        <a className="button is-danger is-rounded is-hovered is-focused button is-medium">
          Reservation
        </a>
      </div>
    </div>
    <style jsx>
      {`
        .image {
          background: url(https://colorlib.com/preview/theme/sneaky/img/home/cta-bg.png);
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
        .redbutton {
          text-align: center;
          padding-top: 28px;
          padding-bottom: 39px;
        }
        .button:hover {
          background-color: transparent;
          border: 2px solid red !important;
        }
      `}
    </style>
  </div>
);
export default Cover;
