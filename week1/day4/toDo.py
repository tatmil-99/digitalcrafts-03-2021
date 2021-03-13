def menuMessage():
  message = """To Do List:
  -----------
  press 1 to add task: \n
  press 2 to delete task: \n
  press 3 to view all tasks: \n
  press q to quit
  """ 
  return print(message)

tasks = []
titlePriority = {}

def addTask():
  if keyPressed == "1":
    title = input("What is the task? ")
    priority = input("What is the priority level(high, medium, low)? ")

    titlePriority["title"] = title
    titlePriority["priority"] = priority

    tasks.append(titlePriority)
  

keyPressed = "" 

while keyPressed != "q":
  menuMessage() 
  keyPressed = input("Select choice here: ")
  addTask() 

  
# print(titlePriority)
print(tasks) 
sdfsdffsd












# task1 = input("enter 1 here: ")
# task2 = input("enter 2 here: ")
# task3 = input("enter 3 here: ")

# menu_list = [task1, task2, task3] 
 
# tasks = {} 

# for menu in menu_list:
#   if menu == menu_list[0]: 
#     task_name = input("what is the name of the task? ") 
#     priority = input("what is the priority of your task(high, medium, low)? ")

#     for menu in menu_list:
#       tasks["title"] = task_name
#       tasks["priority"] = priority 
    
#   elif menu == 2:
#     print(tasks["title"])

# print(tasks) 



