#  check postive number
number = [-1, -5,-3,7,8,9]


count_Postive_Number = 0

for num in number:
    if num > 0:
        count_Postive_Number += 1   


# print("Postive Count is :" , count_Postive_Number)


#  sum of n even numbers 
"""
n = int(input("Enter a number "))

even_sum = 0

for num in range(0 , n+1):
    if num%2 == 0:
        even_sum += num

print("Sum of Even Number ", even_sum)       
"""



# multiplication table for given number 10 , but skip 5 iteration
"""
table_number = int(input(" Enter a number : "))
  
for num in range(1 , 11):
    if num == 5:
        continue
    print(table_number,"*", num ,"=", table_number*num)
"""


    # reverse string by loop 
"""
String_name = input("Enter a string : ")

reverse_String = ""

for char in String_name:
    reverse_String = char + reverse_String

print(reverse_String)
"""   

# find the first non-repeated char
""" 
String_word = input("Enter a String")

for char in String_word:
    if String_word.count(char) == 1:
        print("the first non-repeated char : ", char)
        break    
 """         

#  calculate the factorial using while loop 

"""
num = 5
newnum = num
factorial = 1

while num > 0:
    factorial = factorial * num
    num = num - 1
print("Factorial of ",newnum,"is : ",factorial)

"""

# validate Input ( keep asking to user while enter the num b/w 1 - 10)
"""
while True:
    number = int(input(" Enter a Number : "))
    if 1 <= number <= 10:
        print("Thanks")
        break
    else:
        print("Invalid Input")

   """

 #  check the number is prime 
"""
number = int(input(" Enter a number "))

is_Prime = True

if number > 1:
    for  i in range(2 , number):
        if (number % i) == 0:
            is_Prime = False
            break

print(is_Prime)
"""

# check the duplicate item in the list , if yes then print the duplicate item 

items = ["banana" , "apple" ,"orange", "papaya" , "apple"]

for item in items:
    if items.count(item) > 1:
        print(item)
        break
      
else:
    print("not found")


      

        
  
        



   
