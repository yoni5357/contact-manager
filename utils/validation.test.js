
import validateParams, { validateCommand, validateName, validateEmail, validatePhone} from './validation.js';
import { mockParams } from '../mockData.js';

describe('validation module tests', () =>{
    it('should throw error for invalid command', () => {
        const params = { command: 'invalidCommand' };
        expect(() => validateCommand(params.command)).toThrow(`Unknown command ${params.command}`);
        expect(() => validateCommand('')).toThrow(`Command is required`);
    })


    it('should throw error for invalid email', () => {
        let invalidEmail = 'notAnEmail';
        expect(() => validateEmail(invalidEmail)).toThrow(`Email must contain @ symbol`);
        invalidEmail = 'noDot@domain';
        expect(() => validateEmail(invalidEmail)).toThrow(`Email must contain a . symbol`);
        invalidEmail = 'a@.c';
        expect(() => validateEmail(invalidEmail)).toThrow(`Email must be at least 5 characters long`);
    })

    it('should throw error for invalid phone number', () => {
        let invalidPhone = '123';
        expect(() => validatePhone(invalidPhone)).toThrow(`Phone number must be between 10 and 15 characters`);
        invalidPhone = '1234567890123456';
        expect(() => validatePhone(invalidPhone)).toThrow(`Phone number must be between 10 and 15 characters`);
        invalidPhone = '123-456-7890a';
        expect(() => validatePhone(invalidPhone)).toThrow(`Phone number must contain only digits`);
    })

    it('should throw error for invalid name', () => {
        let invalidName = 'John123';
        expect(() => validateName(invalidName)).toThrow(`Contact name must contain only letters and spaces`);
        invalidName = 'John_Doe';
        expect(() => validateName(invalidName)).toThrow(`Contact name must contain only letters and spaces`);
    })

    it('should validate add command parameters', () => {
        expect(() => validateParams(mockParams[0])).not.toThrow();
        expect(() => validateParams(mockParams[1])).toThrow(`Email must contain a . symbol`);
        expect(() => validateParams(mockParams[2])).toThrow(`Contact name is required for add command`);
        expect(() => validateParams(mockParams[3])).toThrow(`Email must contain @ symbol`);
        expect(() => validateParams(mockParams[4])).toThrow(`Phone number is required for add command`);
        expect(() => validateParams(mockParams[5])).toThrow(`Contact name must contain only letters and spaces`);
        expect(() => validateParams(mockParams[6])).toThrow(`Email must contain @ symbol`);
        expect(() => validateParams(mockParams[7])).toThrow(`Contact email is required for delete command`);
        expect(() => validateParams(mockParams[8])).not.toThrow();
        expect(() => validateParams(mockParams[9])).toThrow(`Contact name or email is required for search command`);
    });
})