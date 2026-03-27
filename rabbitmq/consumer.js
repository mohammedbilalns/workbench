const amqp = require("amqplib");

async function connect() {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();

    // Ensure the queue exists
    await channel.assertQueue("jobs");

    channel.consume("jobs", (message) => {
      if (message !== null) {
        console.log("Received message:", message.content.toString());
        channel.ack(message);
      }
    });

    console.log("Waiting for messages...");


  } catch (err) {
    console.error("Connection error:", err);
    process.exit(1);
  }
}

connect();
