const { encrypt, decrypt } = require('./hashes.js');
fs = require('fs')

efiles = []

fs.readdir("./gentle-cliffs-18201", function(err, items) {
    console.log(items);

    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
        i2 = items[i].toString();
        const hash = encrypt(i2);
        console.log(hash);
        efiles.push(hash)
    }
});
