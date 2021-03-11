# collects input from user to store values to be calculated
arg1 = input("First number:")
arg2 = input("Operator(+, -, *, /):")
arg3 = input("Second number:")

def add(num1, num2):
  return int(num1) + int(num2)  
   
def subtract(num1, num2):
  return int(num1) - int(num2)   

def multiply(num1, num2):
  return int(num1) * int(num2) 

def divide(num1, num2):
  return int(num1) // int(num2)   

# Depending upon the operator put in by user, the conditions run the correlating function
# and prints result. 
if arg2 == "+":
  # print("Result = %s" % (add(arg1, arg3)))
  print("Result =", add(arg1, arg3))    
elif arg2 == "-":
  print("Result =", subtract(arg1, arg3)) 
elif arg2 == "*":
  print("Result =", multiply(arg1, arg3))
elif arg2 == "/":
  print("Result =", divide(arg1, arg3))
else:
  print("Operator not accepted")   




