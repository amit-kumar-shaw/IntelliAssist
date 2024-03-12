import asyncio
import websockets
import json

async def client():
    # Replace 'localhost' and '8765' with your server's host and port if different
    uri = "ws://localhost:8765"

    async with websockets.connect(uri) as websocket:
        # Send the user's ID to the server. Replace 'user123' with your desired user ID.
        await websocket.send("user123")

        # Listen to server messages and send messages in an infinite loop
        while True:
            # Sending message
            target_user = input("Enter target user ID (leave blank to skip sending): ").strip()
            if target_user:  # If a target is specified, send a message
                message = input("Enter message to send: ").strip()
                await websocket.send(json.dumps({"to": target_user, "message": message}))
            
            # Receiving message (non-blocking)
            try:
                incoming_message = await asyncio.wait_for(websocket.recv(), timeout=1.0)
                print(f"Received: {incoming_message}")
            except asyncio.TimeoutError:
                # No incoming message within the timeout period
                continue

if __name__ == "__main__":
    asyncio.run(client())
