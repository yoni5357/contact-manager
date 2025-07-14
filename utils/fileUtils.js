import fs from 'fs';

//read, write, parse 

function createNewFile() {

}

function updateFile(data) {

}

export function getFileData() {
    // return obj of json file data. 

    try {
        const data = fs.readFileSync('contacts.json')
        console.log('✔ Found contacts.json file');
        return JSON.parse(data)
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log('❌ Could not find contacts.json file, creating new one...');
            return {};
        }
        else {
            console.log('fs Error: ', err);

            throw new Error('Unknown error reading contacts.js file')
        }
    }

}

