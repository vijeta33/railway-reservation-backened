const userModel = require("../models/userModel.js")
const jwt = require('jsonwebtoken')
const axios = require("axios")




const getweatherofLondon = async function (req, res){

    try{ 
        let q =req.query.q
        console.log(q)
        let appid = req.query.appid
        console.log(appid)


        let options = {
          method : "get",
          url : `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let response= await axios(options)
        console.log(response)
        let weather = response.data
        console.log(weather)
        res.status(200).send( {msg: "Success", data: weather} )

    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }
}

const Londontemp = async function (req, res){

    try{ 
    
        let cities  =  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray = [];
        let length = cities.length
        for(let i=0; i<length; i++){
            let obj = {city: cities[i]}
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=d03c6511ac589c04857f3a2bc06681fd`)
            console.log(resp.data.main.temp)
            obj.temp= resp.data.main.temp

            cityObjArray.push(obj);
        }
        let sorted = cityObjArray.sort(  function(a, b) { return a.temp - b.temp } )
        console.log(sorted)
        res.status(200).send( {status: true, data: sorted} )

    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }
}
        
    
        // const getOtp = async function (req, res){

        //     try{ 
        
        //          let options = {
        //           method : "post", // method has to be post
        //           url : `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
        //           data: { "mobile": req.body.mobile  } // we are sending the json body in the data 
        //         }
        //         let response= await axios(options)
        
        //         let id= response.data
        //         res.status(200).send( {msg: "Success", data: id} )
        
        //     }
        //     catch(err) {
        //         console.log(err.message)
        //         res.status(500).send( { msg: "Something went wrong" } )
        //     }
        // }
        


//module.exports.getOtp = getOtp
module.exports.getweatherofLondon = getweatherofLondon
module.exports.Londontemp = Londontemp


