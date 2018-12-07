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
      <BrowserRouter>
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
              This is proof of concept, showing how govuk-frontend can be used as
              CSS modules via a set of React components, in a way that is compatible
              with create-react-app, with support for tree shaking and lazy loading.
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
