require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remain million just argue bubble skull'; 
let testAccounts = [
"0xe685b126cf5d67bf6fde6262d83cbacb2c8fda98c9be4d01b9ef3fc90ad06de1",
"0xd71bb7e0c25061c6374a6617c5447cd3ed4660ef472f99378be79b9627ab48f9",
"0x98b326631df8aa5172e20910c4adb2f4ddda8dee9018c6495070bd94b391ea5d",
"0x575d2bbfbab77151fef30581bf954a23964cd54c45de4dd3309687a24101732f",
"0x7f204caa2e8a60e6ef13f10f7cf09bf2a9f9e4061b039b76242171fda9f720cd",
"0xd22eb2cc224df7294f0fde2ef9b767306e1ca733157c44ac076edd6649027089",
"0x2f7638728f42130447b5f8f106217c839d8130e41fa450e41d14bcac3e6dce97",
"0xbd11692a06cc61311e276f3c10ba1d0b740463613260fc16217657040b9130de",
"0x8da97c5df8765718a7bb94bf05a9394043950f909f4a7b46448bd89d42a9cb07",
"0xa4fcb2d0318c89952e05709878c3b82a52de24b1f93bbb02cbe6b76280d66850"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

