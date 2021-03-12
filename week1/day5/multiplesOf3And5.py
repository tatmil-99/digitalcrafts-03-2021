
def sumOfMultiples():
  num = 0
  total = 0
  while num < 1000:

    if num % 3 == 0 or num % 5 == 0:
      total += num
      num += 1
    else:
      num += 1
  return(total) 
    
print(sumOfMultiples())


