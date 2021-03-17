# 1
# Create a User class, that has the  ability to print the users name
# the ability to print the users age
# Create a TempUser class, that has the ability to only print his name.
# Create a function that as you to give the user a name, and give the user an age, and will then create the user for you, and print it to the screen. The user will have a choice to either be a temp user or a User

# class User:
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age 
  
#   def printUser(self):
#     print(self.name)
#     print(self.age)

# class TempUser:
#   def __init__(self, name):
#     self.name = name

#   def printTemp(self):
#     print(self.name)

# users = User("Tate", 23)
# users.printUser()

# temporary = TempUser("Max")
# temporary.printTemp()

# def createUser():
#   userName = input("What is your name?")
#   userAge = int(input("What is your age?"))
#   userType = input("Are you a \"user\" or \"temp\" user?")
#   if userType == "user":
#     user = User(userName, userAge)
#     user.printUser()
#   elif userType == "temp":
#     user = TempUser(userName)
#     user.printTemp()
#   else:
#     pass

# createUser()
  
# Create a building class
# buildilng class will have 
# height
# capacity
# sqft
# # commercial or residential
# commercial
# ask the user to create a building (new instance of the building class)
# they will enter in height
# capacity (people)
# sqft
# 5 instances of a building
# print out the specs of the buildilng everytime a building is made
# print statement needs to be a method

# Default the building type to commercial

specs_list = []

class Building:
  def __init__(self, height, capacity, sqft, building_type="commercial"):
    self.height = height
    self.capacity= capacity
    self.sqft = sqft
    self.building_type = building_type 
  def print_building(self):
    print(self.height)
    print(self.capacity)
    print(self.sqft)
    print(self.building_type)

# building = Building(300, 1000, 50000)
# building.print_building()

def new_building():
  construct = ""

  prompt = print("Please create a new building")
  specs_height = input("Enter building height: ")
  specs_capacity = input("Enter building capacity: ")
  specs_sqft = input("Enter building sqft: ")
  construct = Building(specs_height, specs_capacity, specs_sqft)
  construct.print_building()

count = 0
while count < 5:
  new_building()
  count += 1


