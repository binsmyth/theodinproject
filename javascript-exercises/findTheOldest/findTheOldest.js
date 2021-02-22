let getAge = function(arr) {
  return arr.map(value=>{
    if(value.yearOfDeath === undefined){
      var currentYear = new Date().getFullYear()
      return {'name':value.name,'age':currentYear-value.yearOfBirth}
    }
    return {'name':value.name,'age':value.yearOfDeath-value.yearOfBirth}
  })
}

let arrMax = (arr)=>{
  return arr.reduce((prev,next)=>{
    if(prev.age>next.age){
      return prev
    }
    else{
      return next
    }
  })
}

let findTheOldest = arr => arrMax(getAge(arr))
//console.log(arrMax(getAge(people)))
//console.log(getAge(people))
module.exports = findTheOldest
