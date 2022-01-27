const toys = []

const MasterChief = {
    id: 1,
    name: "Master Chief",
    maker: "Bungie Inc",
    operatingSystem: "Xbox",
    price: 69.95,
    weight: 169,
}

const SonicTheHedgehog = {
    id: 2,
    name: "Sonic The Hedgehog",
    maker: "Yuji Naka",
    operatingSystem: "Sega",
    price: 96969,
    weight: 77,

}

const Pokemon = {
    id: 3,
    name: "Pikachu",
    maker: "Satoshi Tajin",
    operatingSystem: "Nintendo",
    price: 69.95,
    weight: 13,

}
//const toys = [
    //MasterChief,SonicTheHedgehog,Pokemon,MatrixReloaded,BioShock, 

//console.log(toys)


//*for (const toy of toys) {
    //console.log(object)
//}
//for (const toy of toys){
    //console.log(`Price is $${toy.price}`)
//}
const MatrixReloaded = {
    
    id: 4,
    name: "Mr.Anderson",
    maker: "The Wachowskis",
    operatingSystem: "Play Station 2",
    price: 96969,
    retail: 106969,
    weight: 175,

}

const BioShock = {
    id: 5,
    name: "Big Daddy",
    maker: "2k Games",
    operatingSystem: "Xbox",
    price: 69.95,
    retail: 99.99,
    weight: 2534,
}
 //{
toys.push(MatrixReloaded)
toys.push(BioShock)

//{
function addToys(object){
    //object.id = toys + 1
    //toys.push(object)
}

//const toys = [
    //MasterChief,SonicTheHedgehog,Pokemon,MatrixReloaded,BioShock
//]
for (const toy of toys){
    console.log(`The ${toy.name} ${toy.maker} costs ${toy.price} dollars.`)
}