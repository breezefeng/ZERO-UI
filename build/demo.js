const chalk = require('chalk');
const child_process = require('child_process');
const util = require('util');
const execSh = require('exec-sh');
const exec = util.promisify(execSh);

// const exec = (command, timeout = 3000) => {
//     return new Promise(function(resolve, reject) {
//         child_process.exec(command, function(error, stdout) {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(stdout);
//             }
//         });
//         setTimeout(function() {
//             resolve("program still running");
//         }, timeout);
//     });
// }

const run = async command => {
    console.log(chalk.green(command));
    await exec(command).then((json => {
        console.log('----------------->', json);
    })).catch(error => {
        console.error('============>', error);
    }).finally(() => {
        console.log('999999999999999999999999999');
    });
};

const logTime = (logInfo, type) => {
    const info = `=> ${type}：${logInfo}`;
    console.log((chalk.blue(`[${new Date().toLocaleString()}] ${info}`)));
};

const publish = async () => {
    logTime('Publish Npm', 'start');
    await run('npm publish');
    logTime('Publish Npm', 'end');
    exec('exit');
};

publish();