# collects input from user to store values to be calculated
arg1 = input("First number:")
arg2 = input("Operator(+, -, *, /):")
arg3 = input("Second number:")

# list to store user input
argList = []
argList.append(arg1)
argList.append(arg2)
argList.append(arg3)

# math functions
def add(num1, num2):
  return int(num1) + int(num2)  
   
def subtract(num1, num2):
  return int(num1) - int(num2)   

def multiply(num1, num2):
  return int(num1) * int(num2) 

def divide(num1, num2):
  return int(num1) // int(num2)   

# test for loop
for arg in argList:
  if arg2 == "+":
    print("Result =", add(arg1, arg3)) 
    break
  elif arg2 == "-":
    print("Result =", subtract(arg1, arg3)) 
    break
  elif arg2 == "*":
    print("Result =", multiply(arg1, arg3))
    break
  elif arg2 == "/":
    print("Result =", divide(arg1, arg3))
    break
  else:
    print("Operator not accepted")   
