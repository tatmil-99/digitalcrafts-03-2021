# 1
# Create a User class, that has the  ability to print the users name
# the ability to print the users age
# Create a TempUser class, that has the ability to only print his name.
# Create a function that as you to give the user a name, and give the user an age, and will then create the user for you, and print it to the screen. The user will have a choice to either be a temp user or a User

class User:
  def __init__(self, name, age):
    self.name = name
    self.age = age 
  
  def printUser(self):
    print(self.name)
    print(self.age)

class TempUser:
  def __init__(self, name):
    self.name = name

  def printTemp(self):
    print(self.name)

users = User("Tate", 23)
users.printUser()

temporary = TempUser("Max")
temporary.printTemp()

def createUser():
  userName = input("What is your name?")
  userAge = int(input("What is your age?"))
  userType = input("Are you a \"user\" or \"temp\" user?")
  if userType == "user":
    user = User(userName, userAge)
    user.printUser()
  elif userType == "temp":
    user = TempUser(userName)
    user.printTemp()
  else:
    pass

createUser()
  
 



