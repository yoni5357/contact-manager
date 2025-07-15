import fs from 'fs';

//read, write, parse 

export function updateFile(data) {
    // TODO: add error handling
    const dataJson = JSON.stringify(data);
    fs.writeFileSync('contacts.json', dataJson);
}

export function getFileData() {
    // Read contacts.json file and return it's data as object

    try {
        // File found
        const data = fs.readFileSync('contacts.json', {encoding: 'utf-8', flag: 'r'})
        console.log('✔ Found contacts.json file');
        return JSON.parse(data)
    } catch (err) {
        if (err.code === 'ENOENT') { // File now found
            console.log('❌ Could not find contacts.json file, creating new one...');
            return {};
        }
        else { //Unknown error
            console.log('fs Error: ', err);
            throw new Error('Unknown error reading contacts.js file')
        }
    }

}

