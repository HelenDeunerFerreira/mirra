import Geocoder from "react-native-geocoding";

Geocoder.init("AIzaSyA7LNGO5STuT0ZPFeiAPor6OVB5uZaBngc")

export const searchByAddress = (endereco) => {

    return new Promise((resolve, reject) => {

        Geocoder.from(endereco)
            .then(result => {
                var location = result.results[0].geometry.location //devolve lat e lng
                console.log(location)
                resolve(location)
            })
            .catch(error => {
                console.log(error)
                reject(error)
            })
    })

}

