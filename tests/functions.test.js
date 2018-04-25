const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const cases = require('../src/functions.js')
const expect = chai.expect
chai.use(sinonChai)

describe('functions', () => {
  let testArray = []
  const beforeEach = () => {
    testArray = [1, 2, 3, 4, 'eggs', 'cheese', 'milk']
  }

  const afterEach = () => {
    testArray = []
  }

  describe('addNums', () => {
    const addNums = cases.addNums
    it('should be a function', () => {
      expect(addNums).to.be.a('function')
    })
    // write a test to check if 'addNums' returns the expected value
    // i.e. if is called addNums(1, 2); the return value should be 3.
    it('addNums(1,2) should return 3', () => {
      const result = addNums(1, 2)
      expect(result).to.equal(3)
    })
  })

  describe('callBackInvoker', () => {
    it('should be a function', () => {
      const callBackInvoker = cases.callBackInvoker
      expect(callBackInvoker).to.be.a('function')
    })
    it('should invoke a given callback passed to it', () => {
      // this is where you're going to be using 'chai's sinon' spy function.
      const callBack = sinon.spy()
      const newCbInvoker = cases.callBackInvoker
      // pass our spy `callBack` to our newCbInvoker fn.
      newCbInvoker(callBack)
      // write a test that to see if our callback has been called.
      expect(callBack).to.be.calledOnce

      // hint - you will need to look at https://github.com/domenic/sinon-chai to see syntax around this
    })
  })

  describe('iterator', () => {
    it('should be a function', () => {
      const iterator = cases.iterator
      expect(iterator).to.be.a('function')
    })
    // similiar to above where we are utilizing our spy from sinon, this assertion should test if a cb is called x times.
    it('should call a callback for 5 times passed to cases.iterator', () => {
      const cb = sinon.spy()
      const iterator = cases.iterator
      iterator(5, cb)
      expect(cb).to.have.callCount(5)
    })
  })
})
