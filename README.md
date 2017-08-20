<div align="center">
<h1>defaulty</h1>
Copies deep missing properties to the target object.
<br/><br/>
<a href="https://travis-ci.org/fabioricali/defaulty" target="_blank"><img src="https://travis-ci.org/fabioricali/defaulty.svg?branch=master" title="Build Status"/></a>
<a href="https://coveralls.io/github/fabioricali/defaulty?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/fabioricali/defaulty/badge.svg?branch=master&1" title="Coverage Status"/></a>
<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT"/></a>
<img src="https://img.shields.io/badge/team-terrons-orange.svg" title="Team Terrons"/>
</div>

## Installation

### Node.js
```
npm install defaulty --save
```

## Example

```javascript
const defaulty = require('defaulty');

let defaultObj = {a: 1, b: 2, c: 3, d: {a: 5, b: 2}};
let targetObj = {a: 4, b: 5, d: {a: 1}};

let result = defaulty(targetObj, defaultObj);

console.log(result); //=> {a: 4, b: 5, c: 3, d: {a: 1, b: 2}};
```

### Exclude default properties
```javascript
let defaultObj = {a: 1, b: 2, c: 3, d: {a: 5, b: 2}, x: 1, y: 2};
let targetObj = {a: 4, b: 5, d: {a: 1}};

let result = defaulty(targetObj, defaultObj, ['x', 'y']);

console.log(result); //=> {a: 4, b: 5, c: 3, d: {a: 1, b: 2}};
```

## Changelog
You can view the changelog <a target="_blank" href="https://github.com/fabioricali/defaulty/blob/master/CHANGELOG.md">here</a>

## License
Defaulty is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>