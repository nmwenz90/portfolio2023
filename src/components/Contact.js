import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [mailData, setMailData] = useState({
    to_name: "Nate",
    from_name: "",
    reply_to: "",
    message: "",
  });
  const { from_name, reply_to, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      from_name.length === 0 ||
      reply_to.length === 0 ||
      message.length === 0
    ) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID, // service id
          process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID, // template id
          mailData,
          process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_API // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ from_name: "", reply_to: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <div className="edrea_tm_section hidden animated" id="contact">
      <div className="section_inner">
        <div className="edrea_tm_contact">
          <div className="edrea_tm_main_title">
            <h3>
              Get in <span className="coloring">Touch</span>
            </h3>
          </div>
          <div className="wrapper">
            <div className="left">
              <ul>
                {/* <li>
                  <div className="list_inner">
                    <i className="icon-location" />
                    <span>
                      <a href="#" className="href_location">
                        Avon str. 22, NYC, USA
                      </a>
                    </span>
                  </div>
                </li> */}
                {/* <li>
                  <div className="list_inner">
                    <i className="icon-phone" />
                    <span>
                      <a href="#">+77 022 155 02 02</a>
                    </span>
                  </div>
                </li> */}
                {/* <li>
                  <div className="list_inner">
                    <i className="icon-mail-1" />
                    <span>
                      <a href="mailto:example@gmail.com">example@gmail.com</a>
                    </span>
                  </div>
                </li> */}
                <li>
                  <div className="list_inner">
                    <i className="icon-twitter-bird-1" />
                    <span>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.twitter.com/natekodi"
                      >
                        Twitter
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-instagram-1" />
                    <span>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://instagram.com/natekodi"
                      >
                        Instagram
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-bandcamp-1" />
                    <span>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://natekodi.bandcamp.com"
                      >
                        Bandcamp
                      </a>
                    </span>
                  </div>
                </li>

                <li>
                  <div className="list_inner">
                    <i className="icon-spotify-1" />
                    <span>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://open.spotify.com/artist/7M7UJrBfcvJamNJUfFb6fu"
                      >
                        Spotify
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="fields">
                <form
                  className="contact_form"
                  id="contact_form"
                  onSubmit={(e) => onSubmit(e)}
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div
                    className={error ? "empty_notice" : "returnmessage"}
                    style={{ display: error == null ? "none" : "block" }}
                  >
                    <span>
                      {error
                        ? "Please Fill Required Fields"
                        : "Your message has been received, We will contact you soon."}
                    </span>
                  </div>
                  <div className="first">
                    <ul>
                      <li>
                        <div className="list_inner">
                          <input
                            id="name"
                            type="text"
                            placeholder="Name"
                            name="from_name"
                            onChange={(e) => onChange(e)}
                            value={from_name}
                          />
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <input
                            id="email"
                            type="email"
                            name="reply_to"
                            onChange={(e) => onChange(e)}
                            value={reply_to}
                            placeholder="Email"
                            autoComplete="off"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="last">
                    <textarea
                      id="message"
                      placeholder="Message"
                      name="message"
                      onChange={(e) => onChange(e)}
                      value={message}
                    />
                  </div>
                  <div className="edrea_tm_button">
                    <input className="a" type="submit" value="Submit Message" />
                  </div>
                  {/* If you want change mail address to yours, just open "modal" folder >> contact.php and go to line 4 and change detail to yours.  */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
