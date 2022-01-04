const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const sub = redisClient.duplicate();

function fibr(index){
  if(index < 2) return 1;
  return fibr(index -1) + fibr(index -2);
}

function fib(index) {
  if(index == 0) return 0;
  if(index < 3 ) return 1;
  if(index > 2){
    var a=1, b=1;
    var wynik=0;
      for(var i=2;i<index;++i){
        wynik=a+b;
        a=b;
        b=wynik;
      }
    }
  return wynik;
}

sub.on('message', (channel, message) => {
  redisClient.hset('values', message, fib(parseInt(message)));
});
sub.subscribe('insert');
