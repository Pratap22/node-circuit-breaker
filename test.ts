import { CircuitBreaker } from "./CircuitBreaker";

const circuitBreaker = new CircuitBreaker({
  method: "get",
  url: "http://localhost:3000",
});

setInterval(() => {
  circuitBreaker.exec().then(console.log).catch(console.error);
}, 1000);