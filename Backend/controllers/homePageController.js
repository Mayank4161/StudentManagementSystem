const HomePage = (req,res)=>{
    return res.status(200).send('<h1>Welcome To Home Page</h1>');    
};
module.exports= HomePage;