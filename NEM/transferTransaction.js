let nem = require("nem-sdk").defualt;

let endpoint = nem.model.objects.create('endpoint')(nem.model.nodes.defaultTestnet, nem.model.nodes.deafultPort);

let common = nem.model.objects.create('common')('K23562356k','41eee3fb124cbc5f96e61afffaa85cc6916361b6ecf6be59aaace91018635f19de ');

let transferTransaction =  nem.model.objects.create('transferTransaction') ("TBZDI5KKDCEONDWCVMITUNIGKI4ZUFICM3FF32QW", 1, "Hello from transferTest program");

let preparedTransaction = nem.model.transations.prepare('transferTransaction')(common, transferTransaction, nem.model.network.data.testnet.id);

nem.model.transactions.send(common, preparedTransaction, endpoint).then(function(res){
  console.log(res);
}, function(err){
  console.log(err);

})
