// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { abi, evm } = require('./compile');

const provider = new HDWalletProvider(
    '',
    'https://goerli.infura.io/v3/1e9e716253134c85924216c52f9f8070'
)
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to get from', accounts[0]);

    result = await new web3.eth.Contract(abi)
        .deploy({ data: evm.bytecode.object })
        .send({ from: accounts[0], gas: '1000000' });

    provider.engine.stop();
    console.log(JSON.stringify(abi));
    console.log('Contract deployed to', result.options.address);
};

deploy();