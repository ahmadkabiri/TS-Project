const sum = (num1 : number , num2 : number ) : number {
    return num1 + num2
}

const logger = (param):void => {
    console.log('Result => ', param);
    
}

console.log(logger(logger('hiiiiiii')));



const logger2 = (param):undefined => {
    console.log('Result => ', param);
    return undefined
}

console.log(logger('hiiiii'))







