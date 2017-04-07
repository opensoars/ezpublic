# ezpublic

Super easy command line/Node.js tool to serve a public directory


---


## Install

### Global installation (for command line usage)

`npm install ezpublic --global`

### As a Node.js module

`npm install ezpublic --save`


## Usage

### Command line

`ezpublic 4444 /publicDir` listens for requests specified port 4444 and serves `/publicDir`.

Order of arguments does not matter :)

`ezpublic /publicDir 4444` listens for requests specified port 4444 and serves `/publicDir`.

### Default values

`ezpublic /publicDir` listens for requests at default port 3333 and serves `/publicDir`.

`ezpublic` listens for requests at default port 3333 and serves `./` (the current directory).

### Node.js module

#### Include

```js
const ezpublic = require('ezpublic');
```

#### Arguments

Port only.

```js
ezpublic(4444);
```

Public directory only.

```js
ezpublic('~/my-site/public');
```

Port and public directory (argument order does not matter).


```js
ezpublic(4444, '~/my-site/public');

// OR

ezpublic('~/my-site/public', 4444);
```
