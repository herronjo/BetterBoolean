# BetterBoolean
A "better" boolean, which can be negative

## Creating a BetterBoolean
`var bool = new BetterBoolean([init]);` where init is the optional initial value.

BetterBooleans can be initialized with booleans, strings, numbers, and other BetterBooleans. Regular booleans will not set a sign other than positive.

## Reading the value
You can use your BetterBoolean anywhere in your code as you wish, and it will automatically be converted into a number that you can compare.

`true` becomes `1`, `false` becomes `0`, `-true` becomes `-1`, and `-false` becomes `-0`.

### Converting to a string
`bool.toString();` will return a string along the lines of `true`, `false`, `-true`, or `-false` depending on the state of the BetterBoolean.

### Converting to an integer manually
Should you need to convert your BetterBoolean into an integer similiar to that described above, you can use `bool.toInt();` to get it in integer form.

### Comparing the value
`bool.equals(value)` where value is a boolean, string, number, or BetterBoolean. It simply checks if the BetterBoolean and `value` are equal.

## Updating the value
`bool.set(value);` where value is the required updated value.

BetterBooleans can be updated with booleans, strings, numbers, and other BetterBooleans in a similar fashion as creating a new one. Regular booleans will not set a sign other than positive.

## Changing the sign
`bool.setSign(value);` where value is the required updated sign.

The sign may be set using booleans, strings, numbers, and other BetterBooleans. `-true` will be treated as `false`, and `-false` will be treated as `true`.

### Booleans
`bool.setSign(true);` will set the sign to be negative, and `bool.setSign(false);` will set it to be positive.

### Strings
`value` may be `"true"`, `"negative"`, `"false"`, and `"positive"`.

`"true"` and `"negative"` will set the sign to be negative, and `"false"` and `"positive"` will set the sign to be positive.

### Numbers
`value` may be `1` or `-1`, with `1` setting the sign to be positive and `-1` setting the sign to be negative.

### BetterBooleans
`value` will be treated like a boolean, with `-true` being `false` and `-false` being `true`.

## Changing the state
`bool.setState(value);` where value is the required updated sign.

The sign may be set using booleans, strings, numbers, and other BetterBooleans. `-true` will be treated as `false`, and `-false` will be treated as `true`.

### Booleans
`bool.setState(true);` will set the state to be true, and `bool.setState(false);` will set it to be false.

### Strings
`value` may be `"true"` or `"false"` and will be treated like booleans.

### Numbers
`value` may be `0` or `1`, with `1` setting the state to be true and `0` setting the state to be false.

### BetterBooleans
`value` will be treated like a boolean, with `-true` being `false` and `-false` being `true`.
