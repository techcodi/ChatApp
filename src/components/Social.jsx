import "./Social.css";

function Social() {
  return (
    <section className="social_app">
      <div className="social_container">
        <h1>Social</h1>
        <ul>
          <li>
            <a href="https://facebook.com">
              <img
                src="https://img.icons8.com/?size=50&id=p62ASPK2Kpqp&format=png&color=000000"
                alt="facebook"
              />
              <b>Facebook</b>
            </a>
          </li>
          <li>
            <a href="https://web.whatsapp.com/">
              <img
                src="https://img.icons8.com/?size=50&id=16713&format=png&color=000000"
                alt="whatsapp"
              />
              <b>WhatsApp</b>
            </a>
          </li>
          <li>
            <a href="https://x.com">
              <img
                src="https://img.icons8.com/?size=50&id=phOKFKYpe00C&format=png&color=000000"
                alt="twiter"
              />
              <b>X</b>
            </a>
          </li>
          <li>
            <a href="https://telegram.org">
              <img
                src="https://img.icons8.com/?size=50&id=63306&format=png&color=000000"
                alt="telegram"
              />
              <b>Telegram</b>
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <img
                src="https://img.icons8.com/?size=50&id=BrU2BBoRXiWq&format=png&color=000000"
                alt="instagram"
              />
              <b> Instagram </b>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Social;
