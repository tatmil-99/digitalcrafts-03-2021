print("1. to add task: \n")
print("2. to delete task: \n")

task1 = input("enter 1 here: ")
task2 = input("enter 2 here: ")
task3 = input("enter 3 here: ")

menu_list = [task1, task2, task3] 
 
tasks = {} 

for menu in menu_list:
  if menu == menu_list[0]: 
    task_name = input("what is the name of the task? ") 
    priority = input("what is the priority of your task(high, medium, low)? ")

    for menu in menu_list:
      tasks["title"] = task_name
      tasks["priority"] = priority 
    
  elif menu == 2:
    print(tasks["title"])

print(tasks) 



