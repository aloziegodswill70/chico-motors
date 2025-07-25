// data/carsdata.js

const descriptions = [
  "Sound engine, clean interior, Nigerian used for less than a year.",
  "Tested and trusted, buy and drive immediately.",
  "Direct UK import, very neat with full guarantee.",
  "Accident-free, first body, perfect condition.",
  "Chilled AC, solid suspension, buy and enjoy.",
  "Certified used car with warranty and documents.",
  "Very sharp ride, low mileage, everything intact.",
  "Clean title, nothing to fix, ready for inspection.",
  "Well maintained, engine and gear perfect.",
  "Drive like new, affordable and reliable."
];

// base list
const baseCars = [
  { name: "Toyota", price: 10500000, image: "https://res.cloudinary.com/dut0fvswc/image/upload/v1753299077/chico4_okiuyq.jpg" },
  { name: "Toyota", price: 7500000, image: "https://res.cloudinary.com/dut0fvswc/image/upload/v1753299017/chico31_mxdoco.jpg" },
  { name: "Lexus", price: 10500000, image: "https://res.cloudinary.com/dut0fvswc/image/upload/v1753299071/chico8_j9j0bs.jpg" },
  { name: "Highlander", price: 18000000, image: "https://res.cloudinary.com/dut0fvswc/image/upload/v1753299039/chico12_vgs7kn.jpg" },
  { name: "Accord", price: 9000000, image: "https://res.cloudinary.com/dut0fvswc/image/upload/v1753299006/chico45_sbzehc.jpg" },
  { name: "Toyota", price: 14500000, image: "https://res.cloudinary.com/dut0fvswc/image/upload/v1753299038/chico14_trqmr2.jpg" },
  { name: "Car", price: 70000000, image: "https://res.cloudinary.com/dut0fvswc/image/upload/v1753299035/chico17_xainvd.jpg" },
  { name: "Toyota", price: 6500000, image: "https://res.cloudinary.com/dut0fvswc/image/upload/v1753299025/chico24_ek1nyl.jpg" },
  { name: "Toyota", price: 10500000, image: "https://res.cloudinary.com/dut0fvswc/image/upload/v1753299022/chico26_umz3qc.jpg" },
  { name: "Mercedes", price: 23000000, image: "https://res.cloudinary.com/dut0fvswc/image/upload/v1753299017/chico32_mcecn9.jpg" },
  { name: "MDX", price: 21000000, image: "https://res.cloudinary.com/dut0fvswc/image/upload/v1753299006/chico45_sbzehc.jpg" },
  { name: "Toyota", price: 36000000, image: "https://res.cloudinary.com/dut0fvswc/image/upload/v1753299002/chico50_noax0r.jpg" },
  { name: "Lexus", price: 55000000, image: "https://res.cloudinary.com/dut0fvswc/image/upload/v1753299013/chico43_m8mgmz.jpg" },
  { name: "Lexus", price: 12000000, image: "https://res.cloudinary.com/dut0fvswc/image/upload/v1753299014/chico37_rs8omr.jpg" }
];

// create a list of 50 by randomizing baseCars
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let cars = [];
for (let i = 0; i < 50; i++) {
  const car = baseCars[getRandomInt(baseCars.length)];
  cars.push({
    id: i + 1,
    name: car.name,
    price: car.price,
    image: car.image,
    description: descriptions[getRandomInt(descriptions.length)]
  });
}

export default cars;
