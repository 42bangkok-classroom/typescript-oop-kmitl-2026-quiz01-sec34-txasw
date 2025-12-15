if (process.argv.slice(2).toString().toLocaleLowerCase() === "red"){
    console.log('Stop');
}else if (process.argv.slice(2).toString().toLocaleLowerCase() === "yellow"){
    console.log('Caution');
}else if (process.argv.slice(2).toString().toLocaleLowerCase() === "green"){
    console.log('Go');
}else{
    console.log('Unknown');
}