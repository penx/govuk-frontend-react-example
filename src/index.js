import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter, Link, Switch, Route,
} from 'react-router-dom';
import { Header } from "govuk-frontend-react";

import "./styles.css";

const LazySection = React.lazy(() => import('./lazy'));

class App extends React.Component {
  state = {
    showSubSection: false
  }

  handleClick = () => {
    this.setState({showSubSection: true});
  }
  render() {
    const { showSubSection } = this.state;

    return (
      <div className="App">
      <BrowserRouter basename="govuk-frontend-react-example">
        <React.Fragment>
          <Header
            productName="React"
            homepage={{ to: '/', as: Link }}
            navigation={(
              <Header.Navigation>
                <Header.NavigationItem as={Link} to="/">Home</Header.NavigationItem>
                <Header.NavigationItem as={Link} to="/about">About</Header.NavigationItem>
              </Header.Navigation>
            )}
          />
          <div style={{margin: '0 auto', maxWidth: '900px', padding: '0 30px'}}>
            <h1>
              <Switch>
                <Route exact path="/" render={() => 'Home'} />
                <Route path="/about" render={() => 'About'} />
                <Route render={() => '404'} />
              </Switch>
            </h1>
            <p>
              This is proof of concept, showing how <a href="https://github.com/alphagov/govuk-frontend">govuk-frontend</a> can be used as <a href="https://github.com/css-modules/css-modules">CSS modules</a> via a <a href="https://github.com/penx/govuk-frontend-react">set of React components</a> that is <a href="https://www.npmjs.com/package/govuk-frontend-react">published to npm</a>, in a way that is compatible with <a href="https://github.com/facebook/create-react-app">create-react-app</a>, with support for <a href="https://webpack.js.org/guides/tree-shaking/">tree shaking</a> and <a href="https://reactjs.org/docs/code-splitting.html">code splitting/lazy loading</a>.
            </p>

            <button onClick={this.handleClick}>Load subsection</button>
            {showSubSection && <Suspense fallback={<div>Loading...</div>}>
              <LazySection />
            </Suspense>}
          </div>

        </React.Fragment>
      </BrowserRouter>

      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
