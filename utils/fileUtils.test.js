import { updateFile, getFileData } from "./fileUtils";
import { mockContacts } from "../mockData";

describe('File Utils Module', () => {
    it('should update file with new data', () => {
        const data = mockContacts;
        expect(() => updateFile(data)).not.toThrow();
    });

    it('should read file and return data as object', () => {
        const data = getFileData();
        expect(data).toBeInstanceOf(Array);
        expect(data.length).toBeGreaterThan(0);
        data.forEach(contact => {
            expect(contact).toHaveProperty('cname');
            expect(contact).toHaveProperty('email');
            expect(contact).toHaveProperty('phone');
        });
    });
})