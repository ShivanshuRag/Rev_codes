
# 1 method 

file = open("youtube.txt" , "w")


try:
    file.write("hello kaise ho , acchha hoon ! bhai ok ok  ")
finally:
    file.close()


# 2 method

with open("youtube.txt" , "w") as File:
    File.write("Are yrrr , kaise aaye")



# yaha per "w" write mode -> ka kaam h , agar youtube.txt file nhi h to create kar dega , aur agar pahle se hai to , usme likha hua content delete kar dega 

#  es case me yahi ho rha h , 1 method se youtube file me content add ho jata h , then jab  2 method start hota hai , to jo 1 method se us file me likha h , vo delete(truncate) ho jayega , then new content will add


#  IT IS POSSIBLE TO , WE CAN WRITE CONTENT ON THIS FILE , WITHOUT ANY PREVIOUS CONTENT DELETED .

#  use "a" append mode 

with open("youtube.txt" , "a") as Zile:
    Zile.write(" \n add ho gaya")






