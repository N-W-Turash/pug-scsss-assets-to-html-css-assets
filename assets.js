const fs = require('fs-extra');
const chokidar = require('chokidar');
const exec = require('child_process').exec;

function makeCopy(src, dest, logText) {

    fs.pathExists(src, (err, exists) => {
        console.log(err)
        if (!exists) {
            fs.copy(src, dest)
                .then(() => console.log(logText))
                .catch(err => console.log(err));
        }

        else {
            console.log('File already exists.')
        }
    })
}

// makeCopy('assets', 'outputs/assets', 'All assets have been built.');

fs.copy('assets', 'outputs/assets')
    .then(() => console.log('All assets have been built.'))
    .catch(err => console.error(err));

// const watcher = chokidar.watch('assets', {
//     persistent: true
// });

// const log = console.log.bind(console);
// watcher
//     .on('changed', path => {
//         console.log('Added!');
//         console.log('path->', path);
//         // fs.copy(path, 'outputs/assets')
//         //     .then(() => console.log('Done!'))
//         //     .catch(err => console.error(err));
//         // exec('npm run assets.js');
//         // makeCopy(`${path}`, `outputs/assets`, `File ${path} has been added.`);
//         // require('npm').command.run('build-assets', (err) => {console.log(err) });
//     })
//     // .on('changed', path => {
//     //     makeCopy(`${path}`, `outputs/assets`, `File ${path} has been changed.`);
//     // });

//     .on('unlink', path => log(`File ${path} has been removed`));