<div align="center">
	<img width="300" src="https://raw.githubusercontent.com/nuttyjs/artwork/master/logo.png" alt="nutty">
	<br>
</div>

# nutty

[![npm](https://img.shields.io/npm/v/nutty.svg?style=flat-square)](https://www.npmjs.com/package/nutty)
[![npm](https://img.shields.io/npm/dt/nutty.svg?style=flat-square)](https://www.npmjs.com/package/nutty)
[![npm](https://img.shields.io/npm/l/nutty.svg?style=flat-square)](https://github.com/nuttyjs/nutty)

> A small and minimal CLI framework

## Install

Install the package using NPM:

```
npm install nutty
```

## Example

```javascript
//Import nutty
var nutty = require('nutty');

//Set the CLI name
nutty.set('name', 'hello');

//Set the CLI description
nutty.set('description', 'Say hello');

//Set the CLI version
nutty.set('version', '1.0.0');

//Use a middleware
nutty.use(function(args, next)
{
  //Get the name
  var name = args.arguments[0];

  //Get the hello word
  var hello = (args.options.idiom === 'spanish') ? 'Hola' : 'Hello';

  //Display in console
  console.log('>>>>>>> ' + hello + ' ' + name + '!');
});

//Run the CLI
nutty.run();
```

Simple usage:

```
$ hello John
>>>>>>> Hello John!
```

Use it with options:

```
$ hello Susan --idiom spanish
>>>>>>> Hola Susan!
```


## API

### nutty.set(key, value)

Assigns the value of the setting variable called `key` to `value`.

```javascript
nutty.set('name', 'my-app'); //Initialize the 'name' variable to 'my-app'
nutty.get('name'); //--> Return: ' my-app'
```

| key | description | type | default |
|-----|-------------|------|---------|
| name | The CLI name | `string` | `''` |
| description | The CLI description | `string` | `''` |
| version | The CLI version | `string` | `''` |

### nutty.get(key)

Returns the value of the setting variable called `key`.

### nutty.use(fn)

Add a new middleware to the CLI. Nutty is based on middlewares, that are functions that have access to the `arguments` object and the `next` function.

Example:

```javascript
nutty.use(function(args, next)
{
  // Do your magic
  // ....

  //Next middleware
  return next();
});
```

#### args

`Args` is an object with all the arguments of the CLI. It has the following keys:

- `args.options`: an object with all the options with the format `key = value`.
- `args.arguments`: a list with all the arguments that didn't have an option associated with them.

Example:

```
myapp argument1 argument2 --option1 argument3 --option2 --option3 3.123
```

Then the args object will has the following structure:

```json
{
  "arguments": [ "argument1", "argument2" ],
  "options":
  {
    "option1": "argument3",
    "option2": true,
    "option3": "3.123"
  }
}
```

#### next

The `next` argument is a function that will call the next middleware on the list when is invoked.


### nutty.run()

Run the CLI.

## Related

- [nutty-log](https://guthub.com/nuttyjs/nutty-log) Logger for cli apps and nutty middlewares.
- [nutty-command](https://github.com/nuttyjs/nutty-command) A command middleware for nutty.

## License

[MIT](./LICENSE) LICENSE.
