import Geocoder from "react-native-geocoding"

Geocoder.init("AIzaSyA7LNGO5STuT0ZPFeiAPor6OVB5uZaBngc")

export const searchByAddress = (endereco) => {
    return new Promise((resolve, reject) => {
        Geocoder.from(endereco)
            .then(result => {
                var location = result.results[0].geometry.location
                resolve(location)
            })
            .catch(error => {
                reject(error)
            })
    })
}