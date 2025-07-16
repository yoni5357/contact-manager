export const mockContacts =[
    { cname: 'John Doe', email: 'john.doe@gmail.com', phone: '0541234567' },
    { cname: 'Sarah Lee', email: 'sarah.lee@example.com', phone: '0523456789' },
    { cname: 'Mike Cohen', email: 'mike.cohen@example.com', phone: '0539876543' },
    { cname: 'David Green', email: 'david.green@gmail.com', phone: '0507654321' },
    { cname: 'Lisa Brown', email: 'lisa.brown@example.com', phone: '0541112233' },
    { cname: 'Ron Miller', email: 'ron.miller@site.com', phone: '0528765432' },
    { cname: 'Mira Katz', email: 'mira.katz@gmail.com', phone: '0559988776' },
    { cname: 'Tom Adler', email: 'tom.adler@gmail.com', phone: '0520000000' },
    { cname: 'Eve Silver', email: 'eve.silver@gmail.com', phone: '0551234567' },
    { cname: 'Bob Levy', email: 'bob.levy@example.com', phone: '0501234567' },
];

export const mockParams = [
    {command:"add", cname: 'john', email: 'john@gmail.com', phone: '0541234567'},
    {command:"add", cname: 'sarah', email: 'sarah@examplecom', phone: '0529876543'}, // invalid: missing dot in email
    {command:"add", cname: '', email: 'no_name@gmail.com', phone: '0531112222'}, // invalid: empty cname
    {command:"add", cname: 'mike', email: 'mike[at]mail.com', phone: '0543334444'}, // invalid: malformed email
    {command:"add", cname: 'lisa', email: 'lisa@gmail.com', phone: ''}, // invalid: empty phone
    {command:"add", cname: 'to3m', email: 'tom@gmail.com', phone: '0555555555'}, // invalid: cname contains a number
    {command:"delete", cname: 'john'}, // invalid: delete by name
    {command:"delete", cname: ''}, // invalid: empty cname
    {command:"search", cname: 'sarah'}, // valid: search by name
    {command:"search", cname: ''}, // invalid: empty cname
    {command:"add", cname: 'john', email: 'john@gmail.com', phone: '0541234567'}, // copy of first valid add
    {command:"delete", cname: 'john@gmail.com'}, // valid: delete by email
    {command:"search", cname: 'sarah.lee@example.com'}, // valid: search by email
];