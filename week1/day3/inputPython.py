# takes users first name
nameOfUser = input('What is your name?')
# stores the users first name as an int so we can use
lengthOfUserName = len(nameOfUser)

# If statement. do something if a certain condition happens or doesnt happen\
# if lengthOfUserName > 0:
#   # if condition is truthy, run this code
#   nameOfFriend = input('What is your friends name?')
#   print('Your friends name is ', nameOfFriend) 
# else:
#   print('Please enter at least one letter') 

# while loop. condition must be true to keep running
while (lengthOfUserName < 1):
  nameOfUser = input('What is your name?') 
  lengthOfUserName = len(nameOfUser)

print('The name of users first name is %s ' % (nameOfUser)) 


lastNameOfUser = input('What is your last name?')

lengthOfUserLastName = len(lastNameOfUser)

while (lengthOfUserLastName < 1):
  lastNameOfUser = input('What is your last name?')
  lengthOfUserLastName = len(lastNameOfUser)

print('The users last name is %s' % (lastNameOfUser)) 
print('The user name is %s %s' % (nameOfUser, lastNameOfUser))

# take users last name
lastNameOfUser = input('What is your last name?') 
# stores users last name 
lengthOfUserLastName = len(lastNameOfUser)

# print('This is the length of the users first name ', lengthOfUserName)
# print('This is the length of the users last name ', lengthOfUserLastName)
# print('The username is %s %s ' % (nameOfUser, lastNameOfUser)) 
# print('Hello %s %s, welcome to python' % (nameOfUser, lastNameOfUser))  
# If statement. do something if a certain condition happens or doesnt happen\
