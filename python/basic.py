def hello(n):
    print(n)

# hello(" hi There !")   

naam_hai = "shivanshu"
pura_naam = "shivanshu singh"


# x = int(input("Enter a number : "))
# print( "Even " if x % 2 == 0 else "odd")


# for x in range(10) :
    # print(x , end="-")


# x = 1
# while x <= 10:
#     print(x)
#     x += 1


#  prime / non prime
"""    
x = int(input("Enter a number to check num is prime or non prime :"))

i = 2

while i <= x-1:
    if x%i == 0:
        break
    i += 1

if i == x:
    print("prime")
else:
    print("not prime")




x = int(input(" Enter a number"))

i = 2

while i <= x-1:
    if x%i == 0:
        print("not prime")
        break
    i += 1
else:
    print("prime")
"""

#  range 

"""
r1 = range(1 , 100 , 2)

r2 = range (10 , 0 , -1 )
for x in r1:
    print(x , end=" ")
     
""" 

# list - array 

l1 = [1,"he" , 3.4 , 3+4j , range(1 , 10) , { 1 : "hekll"}]


#  packing and unpacking ( rest , spread)

l2=[20, 30, 40]

a,b,c,=l2

print( a, b , c)

