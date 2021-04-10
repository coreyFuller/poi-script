const axios = require('axios')

const POIS  = [
    {
        id : "MARY-BLACK",
        name : "Mary Black", 
        categories : ["Hospitals"], 
        data : {
            cleanliness_rating : 0.1
        },
        full_address : "1700 Skylyn Dr, Spartanburg, SC 29307",
        location : 
        {
            latitude : "34.97840066124711", 
            longitude : "-81.89523852288686"
        }
    },
    {
        id : "IMMEDIATE-CARE",
        name : "Immediate Care - Eastside",
        categories : ["Hospitals"],
        data : {
            cleanliness_rating : 0.3
        },
        full_address : "1200 E Main St Suite 12, Spartanburg, SC 29307",
        location : {
            latitude : "34.96279775799717",
            longitude : "-81.9024946023884"
        }
    }
]

const LAYER =  {
    code : "HOSPITALS",
    label : "Hospitals",
    icon : "truckstop",
    sort : 100,
    filter : {
        predicates : [
            {
                operator : "LESS_THAN", 
                property : "cleanliness_rating", 
                number_value : 0.5
            }
        ]
    }
}

const uri = `${process.env.BASE_URI}`

function testing() {
    return "yo"
}

async function poi_search(){
    const url = uri + "/poi_layers/custom"
    const options = {
        method : "GET",
        headers : {
            "Authorization" : `Key key=${process.env.API_KEY}`,
            "Content-Type" : "application/application/json; charset=utf-8"
        }
    }
    const promise = await axios.get(url, options)
    const data = await promise.data
    return data
}


function add_pois(){
    console.log(POIS)
    url = uri + "/pois"
    const options = {
        method : "PUT",
        headers : {
            "Authorization" : `Key key=${process.env.API_KEY}`,
            "Content-Type" : "application/application/json; charset=utf-8"
        }
    }
    axios.put(url, POIS, options).then((response)=> console.log(response.status))
    return "adding pois"
}

function remove_pois() {
    
    id = 'IMMEDIATE-CARE'
    url = uri + `/pois/${id}`
    console.log(url)
    const options = {
        method : "DELETE",
        headers : {
            "Authorization" : `Key key=${process.env.API_KEY}`,
            "Content-Type" : "application/application/json; charset=utf-8"
        }
    }
    console.log(url)
    axios.delete(url, options).then((response) => console.log(response.status))
    return "removing pois"

}


function add_layer() {


    url = uri + "/poi_layers/custom"
    console.log(url)
    const options = {
        method : "PUT",
        headers : {
            "Authorization" : `Key key=${process.env.API_KEY}`,
            "Content-Type" : "application/application/json; charset=utf-8"
        }
    }

    axios.put(url, LAYER, options).then((response) => console.log(response.status))

    return "adding layer"

}

function remove_layer() {
    
    const code = 'HOSPITALS'
    url = uri + `/poi_layers/custom/${code}`
    const options = {
        method : "DELETE",
        headers : {
            "Authorization" : `Key key=${process.env.API_KEY}`,
            "Content-Type" : "application/application/json; charset=utf-8"
        }
    }
    axios.delete(url, options).then((response) => console.log(response.status))
    return "removing layer"

}

function generate_string(data) {
    return JSON.stringify(data)
}

async function get_globals() {
    const options = {
        method : "GET",
        headers : {
            "Authorization" : `Key key=${process.env.API_KEY}`,
            "Content-Type" : "application/application/json; charset=utf-8"
        }
    }
    axios.get(uri + "/poi_layers/global", options).then((response)=> {
        console.log(response.data)
        return response.data
})
}


module.exports = {add_layer, remove_layer, add_pois, remove_pois, poi_search, get_globals, generate_string}
