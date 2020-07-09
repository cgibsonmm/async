console.log('Before getData')

const getData = async () => {

  try {
    console.log('inside getData, before call')
    const response = await axios.get("https://randomuser.me/api/?results=10")
    console.log(response)
    console.log('aftercall')
    sayHello()
    return response
  } catch (error) {
    console.error(`This is my error: ${error}`)  
  } finally {
    console.log('The function is over!')
  }
}

// console.log('Outside && after getData')

function sayHello() {
  console.log('Hello hello hello')
 }
// sayHello()

// console.log('after the hello!')
getData()


// async function oneWay() {
//   await response
// }

// const twoWay = async function () {
//   await response
// }

// const threeWay = async () => {
//   await response 
// }

