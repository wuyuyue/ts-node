import { greeter } from '../src/index'

test('greeter', (): void => {
  let a = 'Hello, wu'
  expect(greeter('wu')).toBe(a)
})
