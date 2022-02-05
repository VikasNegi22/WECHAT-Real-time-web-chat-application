const users = [];

const addUser = ({ id, name, room }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find((user) => user.room === room && user.name === name);

    if (existingUser) {
        return { error: 'Username is taken' }
    }

    const user = { id, name, room };

    users.push(user);
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    const leftUser=users[index];
    if (index != -1) {
         users.splice(index, 1);
         return leftUser;
    }

}

// const getUser = (id) => users.find((user) => user.id === id);
const getUser = (id) => (users.find((user) => user.id === id))

const getUserInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUserInRoom }; //common js file(CJS). use .js extension.
// export default { addUser, removeUser, getUser, getUserInRoom }; //ES file, use .mjs extension.
