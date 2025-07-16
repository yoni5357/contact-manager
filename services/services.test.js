import { mockContacts } from "../mockData.js";
import { findIndexByEmail } from "./services.js"

// Per module

describe('Services Module', () => {
    // Per function
    it('Should return index based on email or -1 if not found', () => {
        // All tests for this function
        expect(findIndexByEmail(mockContacts, 'john.doe@gmail.com')).toBe('0');
        expect(findIndexByEmail(mockContacts, 'tom.adler@gmail.com')).toBe('7');
        expect(findIndexByEmail(mockContacts, '')).toBe(-1);
        expect(findIndexByEmail(mockContacts, 'not@existing')).toBe(-1);
    })
})