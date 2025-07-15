import { mockContacts } from "../mockData.js";

// Per module
import { findIndexByEmail } from "./services.js"

describe('Services Module', () => {
    // Per function
    it('Should return index based on email', () => {
        // All tests for this function
        expect(findIndexByEmail(contacts, 'email')).toBe(2);
    })
})