
//Funcion crea numero random
export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}

//Funcion recargar sitio web
export function refreshPage() {
    window.location.reload(false);
}

//Async API
export const getImg = async (dataApi ,name, img, location) => {
    //Intenta traer los datos de la API
    try {
        const resp = await fetch(`https://rickandmortyapi.com/api/character/${getRandomInt(1, 826)}`)//Num personajes = 826
        const data = await resp.json()
        dataApi(data)
        name(data.name)
        img(data.image)
        location(data.location.name)
    }
    //Si da un error hace esto
    catch (error) {
        console.error(error)
    }
}

