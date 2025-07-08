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
     
 

# list - array 

l1 = [1,"he" , 3.4 , 3+4j , range(1 , 10) , { 1 : "hekll"}]


#  packing and unpacking ( rest , spread)

l2=[20, 30, 40]

a,b,c,=l2

# print( a, b , c)

print(l1.pop())



print(l1.index(3.4))

# l1.reverse()
print(l1)

"""

# list comprehension

l1 = [ a+1 for a in range(5)]

# print(l1)

# odd 

# l2 = [ a for a in range(1 , int(input("enter a number "))+1)]
# print(l2)


s1 = "hello sir how are you sir ?"

s2 = s1.split(" ")

# print(s2)

s3="".join(s1)

# print(s3)

# s4 = 'hello my name is {} , I am a {}'
# s5 =s4.format("shivanshu" , "Software Engineer")

# print(s5)


# Set 

s1={ 1, 3, 5, 7,}
s2={3,5,6,8,}
s0={3,5}
s3=s1.intersection(s2)
# print(s3)

s4=s1.union(s2)
# print(s4)

s5=s0.issubset(s1)
# print(s5)

s6=s1.issuperset(s0)
# print(s6)



# dict

d1={ 1:"shivanshu", 2:"sahyamu", 3:"thor"}

d2= dict({ 1:"shivanshu", 2:"sahyamu", 3:"thor"})
d2[2]="hello"
d1[4] = "scify"
# print(d2 , d1)


 
d3=d1.items()
# print(d3)


def hello(n):
    return n

fn =hello("Shivanshu")

print( "hi" , fn)

def f2(a,b):
    print('a :',a , "b :",b)

f2(a=2, b=3)


#  lambda 

x = (lambda a,b : a+b)(5,7)
print(x)


factorial = lambda n: 1 if n == 0 or n == 1 else n * factorial(n - 1)

print(factorial(5))