const users = []

const addUser = ({ id, username, room }) => {
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    if (existingUser) {
        return {
            error: 'Username is taken!'
        }
    }

    const user = { id, username, room }
    users.push(user)

    return {user}
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {

    if (!room) {
        return {
            error: `Can't find room`
        }
    }

    const usersInRoom = users.filter((user) => {
        return user.room === room
    })

    if (usersInRoom.length === 0) {
        return {
            error: `Room ${room} is empty!`
        }
    }

    return usersInRoom
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}
