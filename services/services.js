function findEmail(data, email) {
    for (i in data) {
        if (data[i].email === email) return i;
    }
    return -1;
}