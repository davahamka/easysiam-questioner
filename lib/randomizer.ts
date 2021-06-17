function random( data:Array<string> ){
    return Math.floor(Math.random() *data.length);
}

export { random };