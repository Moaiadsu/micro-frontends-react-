const { Client } = require("@elastic/elasticsearch");
// make proxy to the elasticsearch server
const ping = require("ping");


const isDocked = process.env.docker;
const node = isDocked ? "http://elasticsearch:9200" : "http://localhost:9200";
const client = new Client({
  node: node,
  auth: {
    username: "elastic",
    password: "s4kynnt9jc28U5Z7Fmuq"
  },
  log: "error",
});

const target = node;
ping.promise.probe(target)
  .then((result) => {
    console.log(`Ping result for ${target}: ${result.alive}`);
  })
  .catch((error) => {
    console.error(`Error pinging ${target}: ${error}`);
});

const target_elasticsearch =
{
 host: elasticsearch,
 prot
}

// elasticsearch://elasticsearch:9200
const target1 = "http://localhost:9200";
ping.promise.probe(target1)
  .then((result) => {
    console.log(`Ping result for 1 ${target1}: ${result.alive}`);
  })
  .catch((error) => {
    console.error(`Error pinging 1 ${target1}: ${error}`);
});

const target2 = "http://nginx:80";
ping.promise.probe(target2)
  .then((result) => {
    console.log(`Ping result for 2 ${target2}: ${result.alive}`);
  })
  .catch((error) => {
    console.error(`Error pinging 2 ${target2}: ${error}`);
});


// ping the localhost to check if the server is running

console.log("this is the node: ", node, "this is client: " );

//connect the client to the cluster
const ESConnect = async () => {
  try {
    const checkESAvailable = true //await client.ping();
    console.log("this is the avabilty: ",checkESAvailable);
    if (checkESAvailable) {
      console.log("ES Connected");
      return client;
    } else {
      console.log("ES Not Available");
      process.exit(0);
    }
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

module.exports = { ESConnect };
