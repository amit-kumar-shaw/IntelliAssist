import asyncio
import json
import websockets

connected_clients = {}  # Maps user IDs to WebSocket connections

async def handler(websocket, path):
    # The first message from the client should be their userID
    user_id = await websocket.recv()
    connected_clients[user_id] = websocket
    print(f"New user connected: {user_id}")

    try:
        async for message in websocket:
            # Expecting message to be in JSON format { "to": "userID", "message": "text" }
            data = json.loads(message)
            target_user_id = data['to']
            outgoing_message = data['message']
            
            # Send message to specific user if they're connected
            if target_user_id in connected_clients:
                await connected_clients[target_user_id].send(f"{user_id}: {outgoing_message}")
            else:
                await websocket.send("User not connected.")
    finally:
        # Remove disconnected user
        del connected_clients[user_id]
        print(f"User disconnected: {user_id}")

async def main():
    async with websockets.serve(handler, "localhost", 8765):
        await asyncio.Future()  # run forever

if __name__ == "__main__":
    asyncio.run(main())
