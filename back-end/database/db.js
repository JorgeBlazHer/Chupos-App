if(process.env.MONGO){
  module.exports = {
    db: process.env.MONGO
  };
}
else{
  module.exports = {
    db: 'mongodb://localhost:27017/chupos'
  };
}
