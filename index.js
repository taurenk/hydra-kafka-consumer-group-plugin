const HydraPlugin = require('hydra-plugin');
const kafka = require('kafka-node');
const EventEmitter = require('events');

class KafkaConsumerGroupPlugin extends HydraPlugin {
  constructor() {
    super('kafka-consumer-group-plugin');
  }

  setConfig(hydraConfig) {
    super.setConfig(hydraConfig);
    this.configChanged(this.opts);
  }

  onServiceReady() {    
    const ConsumerGroup = kafka.ConsumerGroup;
    let kafkaConsumerGroupConfig = Object.assign({id: this.hydra.instanceID}, this.opts.consumerOptions);
    let consumerGroup = new ConsumerGroup(kafkaConsumerGroupConfig, this.opts.subscribedTopics);
    
    consumerGroup.on('connect', function (err) {
      console.log('Kafka Consumer Group Ready.');
    });

    consumerGroup.on('message', function (message) {
      console.log('Kafka Consumer Group Recieved Message:', message);
      try {
        this.emit('kafkaMessage', message);
      } catch (error) {
        this.emit('kafkaError', error);
      }
    });
      
    consumerGroup.on('error', function (err) {
      console.log('Kafka Consumer Group Error:', err);
    });

  }
}

module.exports = KafkaConsumerGroupPlugin;