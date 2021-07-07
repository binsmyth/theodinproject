def stock_picker(orgArr)
  halfSize = (orgArr.length/2).round #array half (to set limit for days to buy)
  fistHalfArr = orgArr[0..halfSize]#divide array to limit
  indexOfChoice = fistHalfArr.index(fistHalfArr.min)#index of lowest number
  newArray = orgArr[indexOfChoice..(orgArr.length-1)]#array with days after buying
  maxNum = newArray.each_with_index.max#index of day with max price
  maxPriceDay = orgArr.index(maxNum[0])
  pickedStockDays = [indexOfChoice, maxPriceDay]
  return pickedStockDays
end
puts stock_picker([17,3,1,6,9,15,8,6,1,10])
