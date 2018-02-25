const hydra = require("hydra");
const KafkaPlugin = require("./index.js");
hydra.use(new KafkaPlugin());

const exampleConfig = {
	hydra: {
		serviceName: "hydra-kafka-plugin-example",
		serviceIP: "",
		servicePort: 9999,
		serviceType: "example",
		serviceDescription: "Example for Hydra Kafka Plugin",
		redis: "redis://localhost:6379/15",
		plugins: {
      "kafka-plugin": {
        "zookeeperHosts": "54.89.13.155:22181,54.89.13.155:32181,54.89.13.155:42181",
        "subscribedTopics": [
          { topic: "test", partition:0 }
        ],
        "options": {
          "autoCommit": true
        }
      }
    }
	}
};

hydra.init(exampleConfig)
  .then((serviceInfo) => {
    console.log("Hydra Initialized", serviceInfo);
  })
  .catch((error)=> {
    console.log("Hydra Error: ", error);
  });

