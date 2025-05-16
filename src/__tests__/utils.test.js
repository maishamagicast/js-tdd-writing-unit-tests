// Your tests here
// Imagine we're building a word puzzle game. One piece of functionality our game needs is the ability to calculate a score for a given word. In our word game, a user will enter a word, and they'll receive 1 point for each vowel and 2 points for each consonant.

// For example, if a user enters the word "test", they'll receive 7 points:

// t   e   s   t
// 2 + 1 + 2 + 2 = 7


import {pointsForWord} from '../utils.js';
describe('pointsForWord',()=>{
    it('calculates the total points for a word (1 point per vowel, 2 per consonant)',()=>{
        const word = 'drum';
        const expectedPoints = 7;


        expect(pointsForWord(word)).toEqual(expectedPoints);
    })
})
