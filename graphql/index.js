import { buildSchema } from "graphql";
import express from "express"
import { createHandler } from "graphql-http";
import {ruruHTML} from 'ruru/server'


// schema using graphql schema language 
const schema = buildSchema(`
  type Query {
  quoteOfTheDay : String
  random: Float!
  rollThreeDice: [Int]
}
`)

// resolver function for each api end point 
const root = {
  quoteOfTheDay(){
    return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within'
  },
  random(){
    return Math.random()
  },
  rollThreeDice(){
    return [1,2,4].map((_) => 1 + Math.floor(Math.random() * 6))
  }
}

const app = express()
app.all(
  '/graphql',
  createHandler({
    schema: schema,
    rootValue: root
  })
)


app.get('/', (_req,res) => {
  res.type('html')
  res.end(ruruHTML({
    endpoint: '/graphql'
  }))
})
app.listen(4000)
console.log('Running a GraphQL API server at http://localhost:4000/graphql')


