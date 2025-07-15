import { validateCommand, validateName, validateEmail, validatePhone, validateParams } from './validation.js';

describe('validation module tests', () =>{
    it('should throw error for invalid command', () => {
        const params = { command: 'invalidCommand' };
        expect(() => validateCommand(params.command)).toThrow(`Unknown command ${command}`);
        expect(() => validateCommand('')).toThrow(`Command is required`);
    })
});

    it('should throw error for invalid email', () => {
        let invalidEmail = 'notAnEmail';
        expect(() => validateEmail(invalidEmail)).toThrow(`Email must contain @ symbol`);
        invalidEmail = 'noDot@domain';
        expect(() => validateEmail(invalidEmail)).toThrow(`Email must contain a . symbol`);
        invalidEmail = 'a@b.c';
        expect(() => validateEmail(invalidEmail)).toThrow(`Email must be at least 5 characters long`);
});