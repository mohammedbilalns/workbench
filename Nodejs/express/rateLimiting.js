import rateLimit from "express-rate-limit";

const createRateLimiter  = (maxRequests, time) =>{
  return rateLimit({
    max: maxRequests,
    windowMs: time,
    message: "Too many requests please try again later",
    standardHeaders: true,
    legacyHeaders: false
  })
}

export default createRateLimiter
