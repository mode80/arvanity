const Arweave = require('arweave');
const fs = require('fs').promises; 

async function main() {

    const arweave = Arweave.init();
    const args = process.argv.slice(2);
    const ignoreCase = args[1] ? (args[1].toLowerCase() == "true") : false;
    var target = args[0];
    if (ignoreCase) target = target.toLowerCase();
    const targetLength = target.length;

    console.time("stamp"); 

    do {
        var key = await arweave.wallets.generate();
        var address = await arweave.wallets.jwkToAddress(key)
        var prefix = address.substr(0,targetLength);
        if (ignoreCase) prefix = prefix.toLowerCase();
    } while ( prefix != target)

    err = await fs.writeFile('arweave-key-' + address + '.json', JSON.stringify(key) );
    if (err) console.log(err); else console.log("found one!"); 

    console.timeEnd("stamp"); 


}

main();