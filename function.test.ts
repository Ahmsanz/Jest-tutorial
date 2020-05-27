const functions = require('./functions.js')

// toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
})

// notToBeEqual
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
})

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
})

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
})

// toBe is only valid to compare types, so in this case toStrictEqual is more adequate
test('User should be Adrián Mohmed object', () => {
    expect(functions.createUser()).toStrictEqual({
        firstName: 'Adrián', 
        lastName: 'Mohmed'
    });
});