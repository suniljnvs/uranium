let axios = require("axios")


let getStates = async function(req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function(req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function(req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function(req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



let getByDistrictId = async function(req, res) {
    try {
        let district = req.query.districtId
        let date = req.query.date

        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}




let getSortedCities = async function(req, res) {

    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjectArray = []
            //   console.log(`query params are: ${city} ${id}`)
        for (i = 0; i < cities.length; i++) {

            let obj = { city: cities[i] }
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=e08dde21dd01cfb29dfb155dad985bb8`)
            console.log(resp.data.main.temp)

            obj.temp = resp.data.main.temp
            cityObjectArray.push(obj)
        }

        let sorted = cityObjectArray.sort(function(a, b) { return a.temp - b.temp })

        console.log(sorted)
        res.status(200).send({ status: true, data: sorted })

    } catch (err) {
        console.log(err)
        res.status(500).send({ status: false, msg: err.message })
    }
}




const createMeme = async function(req, res) {
    try {
        let template = req.query.template_id
        let firstText = req.query.text0
        let secondText = req.query.text1
        let userName = req.query.username
        let pass = req.query.password

        // console.log(`query params are: ${city} ${id}`)
        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${template}&text0=${firstText}&text1=${secondText}&username=${userName}&password=${pass}`
        }
        let result = await axios(options)
        console.log(result.data)
        let data = result.data
            //let temp= result.data.main.temp
        res.status(200).send({ msg: data })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getByDistrictId = getByDistrictId
module.exports.getSortedCities = getSortedCities
module.exports.createMeme = createMeme