const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(input).not.toEqual(actual)
    expect(input).toBeTruthy()
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
   test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
   })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toBe(input)})
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{ integer: 2 },{ integer: 3 },{ integer: 4 }]
    const expected = 4
    const actual = utils.findLargestInteger(input)
    expect(actual).toBe(expected)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  const start = 3
 beforeEach(() => {
    counter = new utils.Counter(start) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const firstCall = counter.countDown()
    const expected = start
    expect(firstCall).toBe(expected)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    const secondCall = counter.countDown()
    const expected = start -1
    expect(secondCall).toBe(expected)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    for ( i = start; i > -3 ; --i) {
      counter.countDown()
    }
    const lastCall = counter.countDown()
    const expected = 0
    expect(lastCall).toBe(expected)
    
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
 beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const first = seasons.next()
    const expected = 'summer'
    expect(first).toBe(expected)
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    const second = seasons.next()
    const expected = 'fall'
    expect(second).toBe(expected)
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    for (i = 2 ; i > 0 ; i--) {
      seasons.next()
    }
    const third = seasons.next()
    const expected = 'winter'
    expect(third).toBe(expected)
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    for (i = 3 ; i > 0 ; i--) {
      seasons.next()
    }
    const fourth = seasons.next()
    const expected = 'spring'
    expect(fourth).toBe(expected)
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    for (i = 4 ; i > 0 ; i--) {
      seasons.next()
    }
    const fifth = seasons.next()
    const expected = 'summer'
    expect(fifth).toBe(expected)
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (i = 39 ; i > 0 ; i--) {
      seasons.next()
    }
    const forthieth = seasons.next()
    const expected = 'spring'
    expect(forthieth).toBe(expected)
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    const odo = focus.odometer
    const expected = odo + 10
    const actual = focus.drive(10)
    expect(actual).toBe(expected)
  })
  test('[16] driving the car uses gas', () => {
    const before = focus.tank
    focus.drive(10)
    const after = focus.tank
    const mileageAtEmpty = focus.drive(590)
    const drivePastEmpty = focus.drive(400)
    expect(before).toBeGreaterThan(after)
    expect(mileageAtEmpty).toBe(20 *30)
    expect(drivePastEmpty).toBe(mileageAtEmpty)
    
  })
  test('[17] refueling allows to keep driving', () => {
    const odoAtEmpty = focus.drive(600)
    const emptyTank = focus.tank
    const driveOnEmpty = focus.drive(300)
    focus.refuel(15)
    const driveAfterRefuel = focus.drive(250)
    expect(odoAtEmpty).toBe(driveOnEmpty)
    expect(driveAfterRefuel).toBe(odoAtEmpty + 250)

  })
  test('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(50)
    expect(focus.tank).toBe(20)
  })
})

describe('[Exercise 7] isEvenNumberAsync',  () => {
  test('[19] resolves true if passed an even number', async() => {
    const isEven = await utils.isEvenNumberAsync(2)
    expect(isEven).toBeTruthy
  })
  test('[20] resolves false if passed an odd number', async () => {
    const isEven = await utils.isEvenNumberAsync(3)
    expect(isEven).toBeFalsy
  })
})
