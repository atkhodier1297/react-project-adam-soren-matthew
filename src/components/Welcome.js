import React from "react";

function Welcome() {
  return (
    <div>
      <p>
        Welcome to our Recipe creator application! This web application was <br></br>
        created by Adam Khodier, Soren Sonstein, and Matthew Lui.
      </p>
      <img
        src="https://ca.slack-edge.com/T02MD9XTF-U040NP41CSZ-ef8b80c53d03-512"
        height={150}
        alt=""
      />
      <form action="https://github.com/atkhodier1297">
        <input type="submit" value="Adam's GitHub" />
      </form>
      <form action="https://www.linkedin.com/in/adam-khodier-70336a219/">
        <input type="submit" value="Adam's LinkedIn" />
      </form>
      <img
        src="https://ca.slack-edge.com/T02MD9XTF-U0412QNLKEV-35d483ca213d-512"
        height={150}
        alt=""
      />
      <form action="https://github.com/Sarsur99">
        <input type="submit" value="Soren's GitHub" />
      </form>
      <form action="">
        <input type="submit" value="Soren's LinkedIn" />
      </form>
      <img
        src="https://ca.slack-edge.com/T02MD9XTF-U03J6R93QUF-6c16f9a86af2-512"
        height={150}
        alt=""
      />
      <form action="https://github.com/matthew-lui">
        <input type="submit" value="Matthew's GitHub" />
      </form>
      <form action="https://www.linkedin.com/in/Lui-MatthewM/">
        <input type="submit" value="Matthew's LinkedIn" />
      </form>
    </div>
  );
}

export default Welcome;
