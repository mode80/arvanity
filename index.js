const Arweave = require('arweave');

async function main() {

    const arweave = Arweave.init();
    const args = process.argv.slice(2);
    const target = args[0];

    console.time("stamp"); 

    do {
        var key = await arweave.wallets.generate();
        var address = await arweave.wallets.jwkToAddress(key)
        var prefix = address.substr(0,1);
    } while ( prefix != target)

    console.log(key);
    console.log(address);

    console.timeEnd("stamp"); 


}

main();