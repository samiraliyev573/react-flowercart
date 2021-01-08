
import './CustomForm.css';

// a basic form
export const CustomForm = ({ status, message, onValidated }) => {
    let email, name;
    const submit = () =>
      email &&
      name &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        NAME: name.value
      });
  
    return (
      <div
        style={{
          
          borderRadius: 2,
          padding: 10,
          display: "inline-block"

          
        }}
      >
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <input className= "footer-input"
          
          ref={node => (name = node)}
          type="text"
          placeholder="Your name"
        />
        <br />
        <input
          className="footer-input"
          ref={node => (email = node)}
          type="email"
          placeholder="Your email"
        />
        <br />
        <button className="btn-medium" onClick={submit}>
          Submit
        </button>
      </div>
    );
  };

   