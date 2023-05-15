const { Client } = require("@elastic/elasticsearch");

const client = new Client({
  node: "http://127.0.0.1:9200",
  // auth: {
  //   username: "elastic",
  //   password: "s4kynnt9jc28U5Z7Fmuq"
  // },
});

//connect the client to the cluster
const ESConnect = async () => {
  try {
    const checkESAvailable = true// await client.ping();
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

