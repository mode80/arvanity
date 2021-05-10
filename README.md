# arvanity
a vanity address generator for Arweave

### installation

fetch dependencies with

    npm install

### usage
  
    node index.js XXX

where "XXX" is the prefix you want the generated address to have

it ain't fast

a 3 letter prefix takes all night to generate on my laptop 
a 4 letter prefix would take... all month or so

however if you have some cores to spare you can spin up a bunch, as in 

    node index.js XXX 

    node index.js XXX 

    node index.js XXX 

in this case you'd get there 3x faster 

a wallet file with the found key will be written out to the current directory
