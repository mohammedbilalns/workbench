const amqp = require("amqplib");

const msg = { number: 2 };

async function connect() {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();

    // Ensure the queue exists
    await channel.assertQueue("jobs");

    // Send the message to the queue
    const sent = channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));
    
    if (sent) {
      console.log("Job sent successfully:", msg.number);
    } else {
      console.log("Failed to send job");
    }
   
  } catch (err) {
    console.error("Connection error:", err);
    process.exit(1);
  }
}

connect();
