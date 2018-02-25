const HydraPlugin = require('hydra-plugin');
const kafka = require('kafka-node');

class KafkaPlugin extends HydraPlugin {
  constructor() {
    super('kafka-plugin');
  }

  setConfig(hydraConfig) {
    super.setConfig(hydraConfig);
    this.configChanged(this.opts);
  }

  onServiceReady() {    
    const Consumer = kafka.Consumer;
    const Client = kafka.Client;
    const client = new Client(this.opts.zookeeperHosts);
    const subscribedTopics = this.opts.subscribedTopics;
    //const options = { autoCommit: true};
    let consumer = new Consumer(client, subscribedTopics, this.opts.options);

    consumer.on('message', function (message) {
      console.log('Kafka Consumer Recieved Message:', message);
    });
      
    consumer.on('error', function (err) {
      console.log('Kafka Consumer Recieved Error:', err);
    });

    consumer.on('ready', function (err) {
      console.log('Kafka Consumer Ready.');
    });

    consumer.on('close', function (err) {
      console.log('Kafka Consumer Closed.');
    });
  }
}

module.exports = KafkaPlugin;