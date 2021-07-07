a = [2,1,0,3,4,6,4]
def bubbleSort(a)
  n = a.length

  loop do
   swapped = false
   for i in 1..n-1
       if a[i-1]>a[i] then
         b = a[i-1]
         a[i-1] = a[i]
         a[i] = b
         swapped = true
       end
   end
   n = n-1
   break if swapped == false
  end
  return a
end

puts bubbleSort(a)

