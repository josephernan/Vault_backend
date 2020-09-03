const Web3 = require('web3');
const logger = require('../config/winston');

require('dotenv').config();

const provider = new Web3.providers.HttpProvider(process.env.INFURA_ENDPOINT);

const web3 = new Web3(provider);

exports.web3 = web3;

const abi = [{
  constant: false, inputs: [{ name: 'ein', type: 'uint256' }, { name: 'resolvers', type: 'address[]' }], name: 'addResolversFor', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: true, inputs: [{ name: '_address', type: 'address' }], name: 'getEIN', outputs: [{ name: 'ein', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: false, inputs: [{ name: 'ein', type: 'uint256' }, { name: 'providers', type: 'address[]' }], name: 'removeProvidersFor', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: true, inputs: [], name: 'recoveryTimeout', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: false, inputs: [{ name: 'recoveryAddress', type: 'address' }, { name: 'associatedAddress', type: 'address' }, { name: 'providers', type: 'address[]' }, { name: 'resolvers', type: 'address[]' }, { name: 'v', type: 'uint8' }, { name: 'r', type: 'bytes32' }, { name: 's', type: 'bytes32' }, { name: 'timestamp', type: 'uint256' }], name: 'createIdentityDelegated', outputs: [{ name: 'ein', type: 'uint256' }], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: false, inputs: [{ name: 'newRecoveryAddress', type: 'address' }], name: 'triggerRecoveryAddressChange', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: false, inputs: [{ name: 'providers', type: 'address[]' }], name: 'removeProviders', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: true, inputs: [{ name: '_address', type: 'address' }], name: 'hasIdentity', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: false, inputs: [{ name: 'ein', type: 'uint256' }, { name: 'newRecoveryAddress', type: 'address' }], name: 'triggerRecoveryAddressChangeFor', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: false, inputs: [{ name: 'recoveryAddress', type: 'address' }, { name: 'providers', type: 'address[]' }, { name: 'resolvers', type: 'address[]' }], name: 'createIdentity', outputs: [{ name: 'ein', type: 'uint256' }], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: false, inputs: [{ name: 'approvingAddress', type: 'address' }, { name: 'addressToAdd', type: 'address' }, { name: 'v', type: 'uint8' }, { name: 'r', type: 'bytes32' }, { name: 's', type: 'bytes32' }, { name: 'timestamp', type: 'uint256' }], name: 'addAssociatedAddress', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: false, inputs: [], name: 'removeAssociatedAddress', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: true, inputs: [{ name: 'ein', type: 'uint256' }, { name: 'provider', type: 'address' }], name: 'isProviderFor', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: true, inputs: [], name: 'signatureTimeout', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: false, inputs: [{ name: 'ein', type: 'uint256' }, { name: 'resolvers', type: 'address[]' }], name: 'removeResolversFor', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: true, inputs: [{ name: 'ein', type: 'uint256' }], name: 'identityExists', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: false, inputs: [{ name: 'providers', type: 'address[]' }], name: 'addProviders', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: true, inputs: [{ name: 'ein', type: 'uint256' }], name: 'getIdentity', outputs: [{ name: 'recoveryAddress', type: 'address' }, { name: 'associatedAddresses', type: 'address[]' }, { name: 'providers', type: 'address[]' }, { name: 'resolvers', type: 'address[]' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: true, inputs: [{ name: '_address', type: 'address' }, { name: 'messageHash', type: 'bytes32' }, { name: 'v', type: 'uint8' }, { name: 'r', type: 'bytes32' }, { name: 's', type: 'bytes32' }], name: 'isSigned', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'pure', type: 'function',
}, {
  constant: false, inputs: [{ name: 'ein', type: 'uint256' }, { name: 'newAssociatedAddress', type: 'address' }, { name: 'v', type: 'uint8' }, { name: 'r', type: 'bytes32' }, { name: 's', type: 'bytes32' }, { name: 'timestamp', type: 'uint256' }], name: 'triggerRecovery', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: false, inputs: [{ name: 'ein', type: 'uint256' }, { name: 'providers', type: 'address[]' }], name: 'addProvidersFor', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: true, inputs: [], name: 'nextEIN', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: true, inputs: [{ name: 'ein', type: 'uint256' }, { name: '_address', type: 'address' }], name: 'isAssociatedAddressFor', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: false, inputs: [{ name: 'approvingAddress', type: 'address' }, { name: 'addressToAdd', type: 'address' }, { name: 'v', type: 'uint8[2]' }, { name: 'r', type: 'bytes32[2]' }, { name: 's', type: 'bytes32[2]' }, { name: 'timestamp', type: 'uint256[2]' }], name: 'addAssociatedAddressDelegated', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: true, inputs: [], name: 'maxAssociatedAddresses', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: false, inputs: [{ name: 'resolvers', type: 'address[]' }], name: 'removeResolvers', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: true, inputs: [{ name: 'ein', type: 'uint256' }, { name: 'resolver', type: 'address' }], name: 'isResolverFor', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: false, inputs: [{ name: 'addressToRemove', type: 'address' }, { name: 'v', type: 'uint8' }, { name: 'r', type: 'bytes32' }, { name: 's', type: 'bytes32' }, { name: 'timestamp', type: 'uint256' }], name: 'removeAssociatedAddressDelegated', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: false, inputs: [{ name: 'resolvers', type: 'address[]' }], name: 'addResolvers', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: false, inputs: [{ name: 'ein', type: 'uint256' }, { name: 'firstChunk', type: 'address[]' }, { name: 'lastChunk', type: 'address[]' }, { name: 'resetResolvers', type: 'bool' }], name: 'triggerDestruction', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  anonymous: false, inputs: [{ indexed: true, name: 'initiator', type: 'address' }, { indexed: true, name: 'ein', type: 'uint256' }, { indexed: false, name: 'recoveryAddress', type: 'address' }, { indexed: false, name: 'associatedAddress', type: 'address' }, { indexed: false, name: 'providers', type: 'address[]' }, { indexed: false, name: 'resolvers', type: 'address[]' }, { indexed: false, name: 'delegated', type: 'bool' }], name: 'IdentityCreated', type: 'event',
}, {
  anonymous: false, inputs: [{ indexed: true, name: 'initiator', type: 'address' }, { indexed: true, name: 'ein', type: 'uint256' }, { indexed: false, name: 'approvingAddress', type: 'address' }, { indexed: false, name: 'addedAddress', type: 'address' }, { indexed: false, name: 'delegated', type: 'bool' }], name: 'AssociatedAddressAdded', type: 'event',
}, {
  anonymous: false, inputs: [{ indexed: true, name: 'initiator', type: 'address' }, { indexed: true, name: 'ein', type: 'uint256' }, { indexed: false, name: 'removedAddress', type: 'address' }, { indexed: false, name: 'delegated', type: 'bool' }], name: 'AssociatedAddressRemoved', type: 'event',
}, {
  anonymous: false, inputs: [{ indexed: true, name: 'initiator', type: 'address' }, { indexed: true, name: 'ein', type: 'uint256' }, { indexed: false, name: 'provider', type: 'address' }, { indexed: false, name: 'delegated', type: 'bool' }], name: 'ProviderAdded', type: 'event',
}, {
  anonymous: false, inputs: [{ indexed: true, name: 'initiator', type: 'address' }, { indexed: true, name: 'ein', type: 'uint256' }, { indexed: false, name: 'provider', type: 'address' }, { indexed: false, name: 'delegated', type: 'bool' }], name: 'ProviderRemoved', type: 'event',
}, {
  anonymous: false, inputs: [{ indexed: true, name: 'initiator', type: 'address' }, { indexed: true, name: 'ein', type: 'uint256' }, { indexed: false, name: 'resolvers', type: 'address' }, { indexed: false, name: 'delegated', type: 'bool' }], name: 'ResolverAdded', type: 'event',
}, {
  anonymous: false, inputs: [{ indexed: true, name: 'initiator', type: 'address' }, { indexed: true, name: 'ein', type: 'uint256' }, { indexed: false, name: 'resolvers', type: 'address' }, { indexed: false, name: 'delegated', type: 'bool' }], name: 'ResolverRemoved', type: 'event',
}, {
  anonymous: false, inputs: [{ indexed: true, name: 'initiator', type: 'address' }, { indexed: true, name: 'ein', type: 'uint256' }, { indexed: false, name: 'oldRecoveryAddress', type: 'address' }, { indexed: false, name: 'newRecoveryAddress', type: 'address' }, { indexed: false, name: 'delegated', type: 'bool' }], name: 'RecoveryAddressChangeTriggered', type: 'event',
}, {
  anonymous: false, inputs: [{ indexed: true, name: 'initiator', type: 'address' }, { indexed: true, name: 'ein', type: 'uint256' }, { indexed: false, name: 'oldAssociatedAddresses', type: 'address[]' }, { indexed: false, name: 'newAssociatedAddress', type: 'address' }], name: 'RecoveryTriggered', type: 'event',
}, {
  anonymous: false, inputs: [{ indexed: true, name: 'initiator', type: 'address' }, { indexed: true, name: 'ein', type: 'uint256' }, { indexed: false, name: 'recoveryAddress', type: 'address' }, { indexed: false, name: 'resolversReset', type: 'bool' }], name: 'IdentityDestroyed', type: 'event',
}];

/**
 * @description - Genarate Ethereum wallet for user
 * @returns {string} address
 */
exports.generateEthWallet = async () => {
  try {
    const address = web3.eth.accounts.create();
    return address;
  } catch (error) {
    logger.error(error);
  }
};

/**
 * @description - Encrypts a private key with a seed
 * @param {string} privateKey
 * @param {string} seed
 * @returns {object} encryptedObj
 */
exports.encryptPk = async (privateKey, seed) => {
  try {
    const encryptedObj = web3.eth.accounts.encrypt(privateKey, seed);
    return encryptedObj;
  } catch (error) {
    logger.error(error);
  }
};

/**
 * @description - Decrypts a private key with a seed
 * @param {string} privateKey
 * @param {string} seed
 * @returns {object} decryptedObj
 */
exports.decryptPk = async (privateKey, seed) => {
  try {
    const decryptedObj = web3.eth.accounts.decrypt(privateKey, seed);
    logger.info('Decrypted private key using seed');
    return decryptedObj;
  } catch (error) {
    logger.error(error);
  }
};

/**
 * @description - Verifies if the snowFlakeID is valid
 * @param {number} snowFlakeID
 */
exports.verifySnowFlakeID = async (snowFlakeID) => {
  const contract = new web3.eth.Contract(abi, process.env.CONTRACT_ADDRESS);
  try {
    // const snowFlakeIDStandardized = new BigNumber(snowFlakeID).mul('1e18').toString(10);
    const info = await contract.methods.identityExists(snowFlakeID).call((error, result) => {
      if (!error) console.log(`Result: ${result}`);
      else logger.error(error);
    });
    return info;
  } catch (error) {
    logger.error(error);
  }
};
