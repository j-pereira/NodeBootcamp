module.exports = (x) => {
    const par = () => {
       return x % 2 === 0 ? true : false;
    };

    return {
        msg: 'O valor é par?',
        valor: par(),
    }
};