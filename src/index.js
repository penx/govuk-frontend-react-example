import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Header from "govuk-frontend-react/es/components/header";
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
        <Header />
        <h1>Hello CodeSandbox</h1>
        <button onClick={this.handleClick}>Load subsection</button>
        {showSubSection && <Suspense fallback={<div>Loading...</div>}>
          <LazySection />
        </Suspense>}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
