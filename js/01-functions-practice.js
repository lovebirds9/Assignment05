const halfNumber = (number) => {
   const half = number/2
   document.write(`half of ${number} is ${half}<br>`)
   return half

}

halfNumber(5)
halfNumber(20)
halfNumber(15)

const squareNumber = (number) => {
   const square = number*number
   document.write(`square of ${number} is ${square}<br>`)
   return square

}

squareNumber(25)
squareNumber(23)
squareNumber(13)

const percentOf = (first, second) => {
   const percent = Math.round((first/second)*100, 4)
   document.write(`${first} is ${percent}% of ${second}<br>`)
   return percent 
}

percentOf(2,4)
percentOf(23,67)
percentOf(123, 345)
percentOf(69,23)

const modulusOf = (first, second) => {
   const remainder = second%first
   document.write(`${remainder} is the modulus of ${first} and ${second}<br>`)
   return remainder
}

modulusOf(4,10)
modulusOf(23,45678)
modulusOf(3, 47)