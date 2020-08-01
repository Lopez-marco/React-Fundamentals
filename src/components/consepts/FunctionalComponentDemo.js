import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

const FunctionalComponentDemo = () => {
  return (
    <Container className="main">
      <Row>
        <Col xs="12">
          <h1>Functional component</h1>
          <p>
            Functional components allow you to render information to the web
            page without having to use a change state
          </p>
          <dl>
            <dt>Presentational</dt>
            <dd>
              Often used for simply rendering small chunk of code to the dom.
            </dd>
            <dt>No 'this' keyword</dt>
            <dd>Unlike class components, functional ones don't use 'this'.</dd>
            <dt>No state</dt>
            <dd>These are 'dumb" components for UI.</dd>
            <dt>return()</dt>
            <dd>
              Must return a single element, but this element may have nested
              elements inside.
            </dd>
          </dl>
          <h3>Functional Syntax Versus Arrow Function</h3>
        </Col>
      </Row>
      <hr />
      <h1>Challenge</h1>
      <Row>
        <Col md="6">
          <HelloWorldFatArrow className="logo" />
        </Col>
        <Col md="6">
          <HelloWorld />
        </Col>
      </Row>
    </Container>
  );
};

export default FunctionalComponentDemo;

const HelloWorld = function () {
  return (
    <div>
      <Card>
        <img
          width="100%"
          height="280px"
          src="https://i.ytimg.com/vi/BwAakF_VUV8/maxresdefault.jpg"
          alt="Card cap"
        />
        <CardBody>
          <CardTitle>Regular Ole Function</CardTitle>
          <CardSubtitle>A JS library</CardSubtitle>
          <CardText>
            <pre>const HelloWorld = function()</pre>
          </CardText>
          <Button>Go somewhere, yo</Button>
        </CardBody>
      </Card>
    </div>
  );
};

//Fat arrow functional component - 3 lines. Common in react....
const HelloWorldFatArrow = () => {
  return (
    <div>
      <Card>
        <img
          width="100%"
          height="280px"
          src="https://i.ytimg.com/vi/_pfXEv9cFGE/maxresdefault.jpg"
          alt="Card cap"
        />
        <CardBody>
          <CardTitle>Fat Arrow</CardTitle>
          <CardSubtitle>A JS Library</CardSubtitle>
          <CardText>
            <pre>const HelloWorld = () => </pre>
          </CardText>
          <Button>Go somewhere man</Button>
        </CardBody>
      </Card>
    </div>
  );
};
