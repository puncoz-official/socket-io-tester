interface Connection {
    url: string
    socket: number | null
    events: []
}

export default class SocketConnection {
    connection: Connection

    constructor(connection: Connection) {
        this.connection = { ...connection }
    }

    getConnection(): Connection {
        return this.connection
    }
}
