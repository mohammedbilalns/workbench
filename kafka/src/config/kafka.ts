import { Kafka } from "kafkajs";

export const kafka = new Kafka({
  clientId: 'kafka-example', // name shows in kafka logs  
  brokers: ['localhost:9092']
})
