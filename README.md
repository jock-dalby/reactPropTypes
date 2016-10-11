# reactPropTypes

propTypes are useful for two reasons. The first reason is prop validation.

Validation can ensure that your props are doing what they're supposed to be doing. If props are missing, or if they're present but they aren't what you're expecting, then a warning will print in the console.

This is useful, but reason number 2 is arguably more useful: documentation.

Documenting props makes it easier to glance at a file and quickly understand the component class inside. When you have a lot of files, and you will, this can be a huge benefit.

#MessageDisplayer.js

Take a look at MessageDisplayer.js's render function.

Notice the expression this.props.message. From this expression, you can deduce that MessageDisplayer expects to get passed a prop named message. Somewhere, at some time, this code is expected to execute:

<MessageDisplayer message="something" />
If a component class expects a prop, then you can give that component class a propType!

The first step to making a propType is to search for a property named propTypes on the instructions object. If there isn't one, make one! Put it at the top of the instructions object, so that it'll be easy to spot if you end up searching for it again.

See the example of a propTypes property on lines 6-8. Notice that the value of propTypes is an object, not a function!

The second step is to add a property to the propTypes object. For each prop that your component class expects to receive, there can be one property on your propTypes object.

MessageDisplayer only expects one prop: message. Therefore, its propTypes object only has one property.
```js
message: React.PropTypes.string
```
What are the properties on propTypes supposed to be, exactly?

The name of each property in propTypes should be the name of an expected prop. In our case, MessageDisplayer expects a prop named message, so our property's name is message.

The value of each property in propTypes should fit this pattern:
```js
React.PropTypes.expected-data-type-goes-here
```
Since message is presumably going to be a string, we chose React.PropTypes.string. You can see this on line 7. Notice the difference in capitalization between the propTypes object and React.PropTypes!

Each property on the propTypes object is called a propType.

#Runner.js

Look at Runner's propTypes object.

Runner has six propTypes! Note that bool and func are abbreviated, but all other datatypes are spelled normally.

If you add .isRequired to a propType, then you will get a console warning if that prop isn't sent.

#PropTypes in Stateless Functional Components

How could you write propTypes for a stateless functional component?

You couldn't do it in the usual way! The usual way involves adding a propTypes property to the instructions object. Stateless functional components don't have instructions objects:

```js
// Usual way:
var Example = React.createClass({
  propTypes: {
    isExample: true
  },
  ...

// Stateless functional component way:
function Example (props) {
  // ummm ??????
}

```

To write propTypes for a stateless functional component, you define a propTypes object, as a property of the stateless functional component itself. Here's what that looks like:

```js
function Example (props) {
  return <h1>{props.message}</h1>;
}

Example.propTypes = {
  message: React.PropTypes.string.isRequired
};
```
