// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

let localStorageMock = {}

beforeAll(() => {
  global.Storage.prototype.setItem = jest.fn((key, value) => {
    localStorageMock[key] = value
  })
  global.Storage.prototype.getItem = jest.fn(key => localStorageMock[key])
})

beforeEach(() => {
  localStorageMock = {}
})

afterAll(() => {
  global.Storage.prototype.setItem.mockReset()
  global.Storage.prototype.getItem.mockReset()
})
