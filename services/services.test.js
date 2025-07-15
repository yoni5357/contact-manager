// import { mockContacts } from "../mockData.js";
import { findIndexByEmail } from "./services.js"

// Per module

describe('Services Module', () => {
    // Per function
    it('Should return index based on email', () => {
        // All tests for this function
        expect(findIndexByEmail([], 'email')).toBe(2);
    })
})