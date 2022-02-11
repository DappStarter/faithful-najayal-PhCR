require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remember slow heavy armed flame suit'; 
let testAccounts = [
"0xda50ba3ffd2b4a0463e14b17c1ea10db56305cf665b9dfca817a33d34fb909b9",
"0x540d32a9400f3196a84ff46bfc546413fd7732ddfbb54276741d809536afa827",
"0xea7922a71a876c1076fe1c6aae08b7d73738698a02947018422a36f1fa7bca79",
"0x34aa1dc06b34a1148025de052a5db1afb3f37accdbe70d1fece67a94e765e04d",
"0x94797b14efec57a2ea4888674abcfd6be965b2566899a76b541f866e70b3d033",
"0x7a600ef887c27586715fd35f760bfe61aa1a1139e9f861b958fbb4350baae157",
"0x7fbf6767ff4981a39d42d4be15b40aa56b9b460385ec48584f7bf0768b429d83",
"0x78e262eb45e33686bf644fe4403656b07d1f936af650efc3ea329e075b218253",
"0xbfc6df8078953086a07cd414b0ab25c98e350fd4a0f56af9c79e3b9214e5e9b8",
"0xe0a4110bb2a63a9dd1a26931b53e527bd1f205f39b025bf754209d3bce0af230"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

