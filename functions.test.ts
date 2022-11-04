import { convertToObject } from "typescript"

const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    
    test('check data type of results', ()=>{
        let testarray = [1,2,3,4,5,6,7,8,9]
        expect(Array.isArray(shuffleArray(testarray))).toBe(true)
    })

    test ('make sure that it has the same numbers', ()=>{
        let testarray = [1,2,3,4,5,6,7,8,9]
        expect(shuffleArray(testarray)).toEqual(expect.arrayContaining(testarray))
    } )
       
})