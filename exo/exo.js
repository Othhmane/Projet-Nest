// EXO1

const users = [
    { id: 1, username: "Othmane", role: "bu" },
    { id: 2, username: "koko", role: "moc" },
    { id: 4, username: "kiki", role: "mc" },
    { id: 5, username: "kaka", role: "dd" },
];

function generateToken(user) {
    return btoa(JSON.stringify(user));
}

function verifyToken(token) {
    try {
        return JSON.parse(atob(token));
    } catch (error) {
        return null;
    }
}

users.forEach(user => {
    const token = generateToken(user);
    console.log(`Token généré pour ${user.username} :`, token);
    console.log(`Token décodé pour ${user.username} :`, verifyToken(token));
});




// EXO1
const filteredByUsername = filterData(users, user => user.username == "kiki");

function filterData(data, filtre) {
    return data.filter(filtre);  // renvoi le tableau filtré
}

console.log(filteredByUsername);