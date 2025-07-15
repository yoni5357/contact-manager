import { validateCommand, validateName, validateEmail, validatePhone, validateParams } from '../utils/validation.js';

describe('validation module tests', () =>{
    it('should throw error for invalid command', () => {
        const params = { command: 'invalidCommand' };
        expect(() => validateCommand(params.command)).toThrow(`Unknown command ${command}`);
    })
})