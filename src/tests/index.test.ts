import {describe, expect, it} from '@jest/globals'
import { sum , multiply} from '../index'


describe('sum', () => {
    it('should return the sum of two positive integers', () => {
        const ans = sum(2,5)
        expect(ans).toBe(7)
    })

    it('should return the sum of two negative integers', () => {
        const ans = sum(-4, -7);
        expect(ans).toBe(-11)
    })

    it('should return the sum of two 0s', () => {
        const ans = sum(0, 0);
        expect(ans).toBe(0)
    })
})


describe('multiply', () => {
    it('should return the multiplication of two positive integers', () => {
        const ans = multiply(2,5)
        expect(ans).toBe(10)
    })

 
})