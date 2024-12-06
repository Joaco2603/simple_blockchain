const BlockChain = require("./src/blockchain");
const Block = require("./src/block");

async function run() {
  const blockchain = await new BlockChain();
  const block1 = new Block({ data: "Block #1" });
  const block2 = new Block({ data: "Block #2" });
  const block3 = new Block({ data: "Block #3" });

  await Promise.all([
    blockchain.addBlock(block1),
    blockchain.addBlock(block2),
    blockchain.addBlock(block3),
  ]);

  blockchain.print();
}

run();
