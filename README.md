# js-learn-note

* Merging two arrays

This example uses apply() to push all elements from a second array.
from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
```
var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];

// Merge the second array into the first one
// Equivalent to vegetables.push('celery', 'beetroot');
Array.prototype.push.apply(vegetables, moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
```
