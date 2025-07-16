

#  ===== Age category =====


age = 59

if age < 13:
    print("Child")

elif  age < 19 and age > 13:
    print("teenger")

elif age < 59 and age > 19:
    print("Adult")
else:
    print("Senier")


#   ------  movie ticket  ----------
# ages = int(input(" Enter the Age "))
# day = input("Enter a day ")

# if ages >= 18:
#     if day == "Wednesday":
#         print("Price is $10")
#     else:
#         print(" price is $12 ")

    
# elif ages < 18:
#     if day == "Wednesday":
#         print("Price is $6")
#     else:
#         print(" Price is $8 ")
    
# else:
#     print("Enjoy Show !")


    #  new syntax


# price = 12 if age >= 18 else 8

# if day == "Wednesday":
#     price -= 2


# print("Your Ticket price is $",price)



#  password checker 

password = input("Enter the password : ")
passLength = len(password)

if passLength < 6 :
    print("Weak Password")

elif passLength < 10 :
    print("Medium Password")
else:
    print(" Strong Password")