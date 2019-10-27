import SocketConnection from "./SocketConnection"

class SocketService {
    public connections: { [id: number]: SocketConnection } = {}

    createConnection(id: number) {
        this.connections[id] = new SocketConnection({
            url: "",
            socket: null,
            events: [],
        })

        this.tryToSubscribeOrRetry(id)
    }

    tryToSubscribeOrRetry(id: number) {}
}

export default new SocketService()
