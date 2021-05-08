const Arweave = require('arweave');
const fs = require('fs').promises; 

async function main() {

    const arweave = Arweave.init();
    const args = process.argv.slice(2);
    const target = args[0];
    const targetLength = target.length;

    console.time("stamp"); 

    do {
        var key = await arweave.wallets.generate();
        var address = await arweave.wallets.jwkToAddress(key)
        var prefix = address.substr(0,targetLength);
    } while ( prefix != target)

    err = await fs.writeFile('arweave-key-' + address + '.json', JSON.stringify(key) );
    if (err) console.log(err); else console.log("found one!"); 

    console.timeEnd("stamp"); 


}

main();