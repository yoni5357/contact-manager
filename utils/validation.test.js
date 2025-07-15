import { validateCommand, validateName, validateEmail, validatePhone, validateParams } from './validation.js';

describe('validation module tests', () =>{
    it('should throw error for invalid command', () => {
        const params = { command: 'invalidCommand' };
        expect(() => validateCommand(params.command)).toThrow(`Unknown command ${command}`);
        expect(() => validateCommand('')).toThrow(`Command is required`);
    })
})