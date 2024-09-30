// AA smart contract deployment
const SMART_ACCOUNT_FACTORY_ADDRESS =
  '0x3b122D43d99b9bd79698244a9581F0721ED87Ec3';

// Batch caller contract deployment
const BATCH_CALLER_ADDRESS = '0x18b1F591EEc75cF6603543Fbf1354Cb4eF775413';

// AA wallet validator contract deployment
const VALIDATOR_ADDRESS = '0xC894DE2894e2F84C0C2944FDcce9490eC22A92b6';

const CONTRACT_DEPLOYER_ADDRESS =
  '0x0000000000000000000000000000000000008006' as const;

const INSUFFICIENT_BALANCE_SELECTOR = '0xe7931438' as const;

export {
  BATCH_CALLER_ADDRESS,
  CONTRACT_DEPLOYER_ADDRESS,
  INSUFFICIENT_BALANCE_SELECTOR,
  SMART_ACCOUNT_FACTORY_ADDRESS,
  VALIDATOR_ADDRESS,
};
