# self-as
`self-as` is util to reuse value as variable.\
This can be used in functional programming.

# Example
```js
selfAs(1/* some complex expression */)(someComplexExpr => someComplexExpr / Math.pow(10, someComplexExpr.toString().length))
```
