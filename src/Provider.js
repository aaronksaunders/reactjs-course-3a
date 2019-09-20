import React from "react";
export const AppContext = React.createContext();
export default class AppProvider extends React.Component {
  // specify the state structure and inital state for the content provider
  state = {
    count: 0,
    // function to call to update the current user
    addOne: () => {
      this.setState({
        count: this.state.count + 1
      });
    }
  };

  // pass the current state as the value for the context, wrap
  // all child components so they have access to the state variables
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
