tasks = []
# titlePriority = {}

def menuMessage():
  message = """
  To Do List:
  -----------
  press 1 to add task: \n
  press 2 to delete task: \n
  press 3 to view all tasks: \n
  press q to quit
  """ 
  return print(message)

def addTask():
  titlePriority = {}
  title = input("What is the task? ")
  priority = input("What is the priority level(high, medium, low)? ")

  titlePriority["title"] = title
  titlePriority["priority"] = priority

  tasks.append(titlePriority)

def delTask():
  print(tasks)
  toDelete = int(input("What task would you like to delete? "))
  taskDeleted = tasks.pop(toDelete - 1) 
  print("tasks left: %s" % tasks) 

def viewTask():
  counter = 1
  for task in tasks: 
    toDo = print("%s - %s - %s" %(counter, task["title"], task["priority"]))
    counter += 1
  return toDo

choice = "" 

while choice != "q":
  menuMessage() 
  keyPressed = input("Select choice here: ")
  if keyPressed == "1":
    addTask()
  elif keyPressed == "2":
    delTask() 
  elif keyPressed == "3":
    viewTask() 
  choice = keyPressed














