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
        console.log('Loading contacts.json...');        
        const file = fs.readFileSync('contacts.json', {encoding: 'utf-8', flag: 'r'})
        const data = JSON.parse(file)
        console.log(`✔ Loaded ${data.length} contacts`);
        return data;
    } catch (err) {
        if (err.code === 'ENOENT') { // File now found
            console.log('❌ Could not find contacts.json file, creating new file...');
            return {};
        }
        else { //Unknown error
            console.log('fs Error: ', err);
            throw new Error('Unknown error reading contacts.js file')
        }
    }

}

