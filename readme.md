# Hydra Kafka Consumer Plugin

## Configuration Options
```
{
  "hydra": {
    "plugins": {
      "kafka-plugin": {
        "zookeeperHosts": "54.89.13.155:22181,54.89.13.155:32181,54.89.13.155:42181",
        "subscribedTopics": [
          { topic: 'test-service', partition:0 }
        ],
        "options": {
          "autoCommit": true
        }
      }
    }
  }
}
```