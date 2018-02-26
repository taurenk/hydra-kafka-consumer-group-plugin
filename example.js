const hydra = require("hydra");
const KafkaConsumerGroupPlugin = require("./index.js");
hydra.use(new KafkaConsumerGroupPlugin());

const exampleConfig = {
	hydra: {
		serviceName: "hydra-kafka-plugin-example",
		serviceIP: "",
		servicePort: 9999,
		serviceType: "example",
		serviceDescription: "Example for Hydra Kafka Plugin",
    redis: "redis://localhost:6379/15",
    plugins: {
      "kafka-consumer-group-plugin": {
        "consumerOptions": {
          host: "54.89.13.155:22181,54.89.13.155:32181,54.89.13.155:42181",
          groupId: 'example-group',
          sessionTimeout: 15000,
          protocol: ['roundrobin'],
          fromOffset: 'latest'
        },
        "subscribedTopics": ["test-topic"]
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

