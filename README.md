This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a contrieved example to show how you can used the ReactJS Context API to minimize passing properties all around your application to access top level state.

“Context provides a way to pass data through the component tree without having to pass props down manually at every level.” https://buff.ly/2J6FZCX

> Use React's Context API for things that are truly necessary deep in the react tree. They don't have to be things you need everywhere in the application (you can render a provider anywhere in the app). This can really help avoid some issues with prop drilling. It's been noted that context is kinda taking us back to the days of global variables. The difference is that because of the way the API was designed, you can still statically find the source of the context as well as any consumers with relative ease.

Article on ["Prop Drilling"](https://buff.ly/2M4LKEd)
How to use React Context effectively https://buff.ly/2J65yqV
