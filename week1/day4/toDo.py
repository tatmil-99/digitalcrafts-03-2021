press_1 = input("press 1 to add task: ")

menu_list = []
menu_list.append(press_1)

tasks = {}
for menu in menu_list:
  if menu == menu_list[0]: 
    task_name = input("what is the name of the task? ") 
    priority = input("what is the priority of your task(high, medium, low)? ")
    tasks = {}
    for menu in menu_list:
      tasks["title"] = task_name
      tasks["priority"] = priority 


print(tasks) 



