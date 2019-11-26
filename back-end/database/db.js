if(process.env.MONGO){
  module.exports = {
    db: process.env.MONGO
  };
  console.log("prod");
}
else{
  module.exports = {
    db: 'mongodb://localhost:27017/chupos'
  };
  console.log("dev");
}
