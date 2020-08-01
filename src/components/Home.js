import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h1>Welcome to React Fundamentals at Eleven Fifty</h1>

        <p>
          This app is intended to be a starter/tutorial app for your incoming
          project and a learning sandbox for you in months and years to come
          should you continue to develop software with React. In this
          application wre will work through some ot the basic React concepts,
          build out some small applications, and then unleash you to build your
          own applications.
        </p>
        <hr />
        <h1>Important Notes</h1>
        <ul>
          <li>Being component based, you can move on to the next module.</li>
          <li>
            The styling is intentionally bland in some spots. Just a sandbox.
          </li>
          <li>At this phase, this site is not yet responsive.</li>
          <li>
            Refactor the text on this page and make this your own portfolio
            project.
          </li>
          <li>
            This app simply scratches the surface on what is possible with
            React.
          </li>
          <li>
            We have tried to collect the very best resources for this app, and
            we have cited those <Link to="/Resources">here</Link>.
          </li>
          <li>
            The set up fot this app might be the most confusing part. Hang in
            there..
          </li>
          <li>
                <Link to="/Resources">React Resources</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
