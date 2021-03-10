# my name loop
firstName = input("What is your first name?")
lenFirstName = len(firstName) 
# loop to force user input for first name 
while (lenFirstName < 1):
  firstName = input("What is your first name?")
  lenFirstName = len(firstName) 

lastName = input("What is your last name?") 
lenLastName = len(lastName)
# loop to force user input for last name 
while (lenLastName < 1):
  lastName = input("What is your last name?")
  lenLastName = len(lastName) 

myFullName = firstName + " " + lastName 

print("Your name is %s " % (myFullName))   

# friends name loop
friendsFirstName = input("What is your friends first name?")
lenFriendsFirstName = len(friendsFirstName)
# loop to force user input for first name
while (lenFriendsFirstName < 1):
  friendsFirstName = input("What is your friends first name?")
  lenFriendsFirstName = len(friendsFirstName) 

friendsLastName = input("What is your friends last name?")
lenFriendsLastName = len(friendsLastName) 
# loop to force user input for last name
while (lenFriendsLastName < 1):
  friendsLastName = input("What is your friends last name?")
  lenFriendsLastName = len(friendsLastName) 

friendsFullName = friendsFirstName + " " + friendsLastName

print("%s is friends with %s " % (myFullName, friendsFullName))

