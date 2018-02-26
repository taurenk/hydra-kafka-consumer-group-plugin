# Hydra Kafka Consumer Group Plugin
Hydra plugin to support Kafka [Consumer Groups](https://github.com/SOHU-Co/kafka-node#consumergroup) built on [Kafka-Node](https://github.com/SOHU-Co/kafka-node) library.

More information on groups can be found [here](https://cwiki.apache.org/confluence/display/KAFKA/Consumer+Group+Example).

**Considerations When Building**
- For replayability, services need to handle consuming messages that it has all ready consumed.


## Configuration Options
```
{
  "hydra": {
    "plugins": {

      "kafka-consumer-group-plugin": {
        "consumerOptions": {
          host: '127.0.0.1:2181',
          groupId: 'example-group',
          sessionTimeout: 15000,
          protocol: ['roundrobin'],
          fromOffset: 'latest'
        },
        "subscribedTopics": ["test-topic"]
      }

    }
  }
}
```

