# 1
# Create a User class, that has the  ability to print the users name
# the ability to print the users age
# Create a TempUser class, that has the ability to only print his name.
# Create a function that as you to give the user a name, and give the user an age, and will then create the user for you, and print it to the screen. The user will have a choice to either be a temp user or a User

class User:
  def __init__(self, name, age):
    self.name = name
    self.age = age 
    self.user = "user"
  
  def printUser(self):
    print(self.name)
    print(self.age)

class TempUser:
  def __init__(self, name):
    self.name = name
    self.temporary = "temporary" 

  def printTemp(self):
    print(self.name)

users = User("Tate", 23)
users.printUser()

temporary = TempUser("Max")
temporary.printTemp()

def createUser():
  user = " "
  userName = input("What is your name?")
  userAge = int(input("What is your age?"))
  userType = input("Are you a \"user\" or \"temporary\" user?")
  if userType == "temporary":
    user = TempUser(userName)
    user.printTemp()
  elif userType == "user":
    user = User(userName, userAge)
    user.printUser()

  else:
    pass
createUser()
  
 



