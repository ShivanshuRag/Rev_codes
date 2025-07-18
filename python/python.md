        # python basics

        <!-- open python shell -->

         type in cmd python3 , this will open python shell , and python shell is used for basic or instant coding , for knowing .


         <!-- Mutable and Im-mutable  -->

         in pyhton , when talk about mutable and immutable so , its level of memory .

          jaise ki int , str and etc . immutable hai

          x = 10
          print (x) // 10 print ho gya

          x = 20
          print(x) // 20  print ho gya


          to hum sochte hai ki ye to mutable(change) ho raha h
          , but is this happens on level of memory , me immutable hai

          heap memory me ek object bna hoga jiski id hoti , jisme 10 rakha hoga , aur koi naam nhi hota , uska id hota jaha 10 rakhha hai , x variable, 10 jaha rakha hai usse point(referenc) kar rha hota h ,

          aur agar x = 20 kar de to , to ek naya object banega aur usme 20 hoga , aur x phir 20 ko refer kar raha hoga

          isliye immutable hai .


          ex -
              a = 5

             a = a + 2 // 7

         internally, yaha per memory me ek object bna jisme 5 rakhkha gaya
         next , python a = a +2 h ,
         to a = 5 + 2  hua h , ye kaise hua ?

        python me sabse pahle refernce ko  value me kiya  a = 5 + 2
        phir calculation kiya , to answer aaya 7 , to 7 ke liye memory me alag object bna

        phir jo pahle a variable 5 ko refrence kar raha tha vo ab 7 ko karne lag gya .

   <!-- interview -->  # :  yaha per a variable ka data type nhi hota ,  memory me jo object h uska hota hai , jaise yaha 5 h , to uska datatype h , int

        <!-- list ke case me  --> ye mutable hote h

        l1 = [ 1,2 3]
        l2 = l1


       print(l1) //   [ 1, 2, 3]
       print (l2) //   [1 ,2 ,3]

to yaha per ga l1 me change karenge to l2 me bhi reflect hoga
kyo l1 and l2 , ek object ko refrence kar rahe h yaha per

but twist tab aata h

l1 = [1, 2, 3]
l2 = l1[: :] // [::] ye slicing h python me

l3=[2, 4, 5] //l3 and l4 same case dono ke liye memory me new object bna
l4=[6, 7, 8]

print(l1) // [ 1, 2, 3]
print(l2) // [ 1, 2 ,3]

yaha pe l2 ne copy banaya l1 ki , jisse naya object bna memory me aur l2 es naye object ki id ko refernce kar raha hai.

  <!--( == )and ( is ) method   -->

> > > m1=[1,2,3]
> > > m2=[1,2,3]
> > >
> > > m1 == m2 // ye kevel value ko check karta hai
> > > True
> > > m1 is m2 // is method memory ke level per check karta h value , refernce bhi , agar dono ek object ko refer karenge to hi // true hoga
> > > False

# - import math

math.floor(3.5) // 3

math.floor(-3.5) // -4

# - floor method - hamesha neeche ki oor jayegi ,

math.trunc(3.5) // 3

math.trunc(-3.5) // -3

# - ye zero ki oor le jata hai

<!--  for randam value  -->

import random

random.random(). // 0 - 1 ke beech me

random.randint(1 , 100) // 1 - 100 ke beech - 100 exclude h

l1 = ["mango" , "apple", "banana", "papaya"]

random.choice(l1) // esse l1 ki value me se hi random hoga

- python me bhi agar

  0.1 +0.1+ 0.1

ans- 0.30000000000000004

aur agar esme minus karen

0.1 + 0.1 + 0.1 - 0.3

ans- 5.551115123125783e-17

to esse precise ke liye decimal library import karo

   <!--  String  -->

    agar kahi aisa syntax me print karana ho

-> hello = "he said , " you are the best " "

      to print karne me problem hoti h


    -> hello = "he said , \" you are the best\" "   ye h sahi tarika




    and kabhi path print karna ho

    path =  c:\user\pwd\md

    ye h solution  path = r"c:\user\pwd\md"

    then print(path)



     <!-- dict  -->

keys = ["mango" , "lemon" , "orange"]

default_value = "delicious"

> > > new_dict = dict.fromkeys(keys , default_value)

> > > print(new_dict) // {'mango': 'delicious', 'lemon': 'delicious', 'orange': 'delicious'}

     <!-- behind the scene of loop  -->


         iteration tool
       ( for , comprehension)--------------------> iterable Object
                                 iter()     (list , range , dict , file)
                                                     |
                                                     |
                                                     |
                                                     |
                            __next__ <---------------|

aur iteration tool bhi **next** method ko point karta h ,

- iter() - method h iterate ke liye internally bhi esi naam se hota h
- next()/ **next**() / **next** -> ye bhi method h

behind the scene python aise hi work karta h , agar iterable tool use kar rahe h

file - file ek page jisme line by kuch likha hota , bas usi ko read karna hota , jaise pahle line kuch , phir dusare line kuch aise line by kuch n kuch likha hota h,

file ke me
f = open('iterable.py')
f.readline() -> realine()method bhi internally next() method use karta h , but readline() method last iteration ko -> acche se handle karta h -> agar pura page read hoga gaya to readline() -> '' ye print karne lagta h.

    f.readline()  -> pahli iteration me

'import time\n'

    f.readline()

'\n'

f.readline()
'username = " "\n'

so on and last. me

f.readline(). -> and me ye print hone suru hone lagta h
''

but next() method ke case me -> stopItration ka message show hota h bas
aur behind the secene readline() bhi **next**() method ko use karta h
f.**next**()
Traceback (most recent call last):
File "<stdin>", line 1, in <module>
StopIteration

and behind the sence aise hi work karta h , agar chije iterable hue
to aap esse check kar sakte h

for loop se bhi file handle kar sakte h

for line in open('iterable.py'):
... print(line)
...
import time

username = " "

if username is " " :

    print(" Enter the username ")

else:

    print(username)

ye sab kaise ? , kyoki ye jo h for iterable tool h , esme pahle se hi aisi coding ki gaye h , sab kuch handle karne ke liye

while loop se

f = open('iterable.py')

> > > while True:
> > > ... line = f.readline()
> > > ... if not line: break
> > > ... print(line , end='')

ans

import time

username = " "
if username is " " :
print(" Enter the username ")

else:
print(username)>>>

    ye raha sab file ko handle ke liye

# important - file ka khud ka iter tool h , ye python me by default h aur kisi me nhi hota h ,like list , range ,dict etc

     f = open('iterable.py')  -> eska khud ka iter tool a jata h  behind the sence

     f = open('iterable.py')
     iter(f) is f  = True

kyoki f variable file ke iter tool ka use ho raha h,

ye raha list ke case me :

l = [1,2,3,4]

> > > iter(l) is l
> > > False

# agar aap kyo bhi iter tool use kar rhe h , kisi iterable object ke case me , to jo varible us iter obejct hold kar raha to uski memory loction ki id/reference same rahegi aur vo hamesa stating ko hi point karega , kyoki ye sab behind the **next** method interally manage karta h apne se

l = [1 ,2, 4,5]

> > > list = iter(l)
> > > list
> > > <list_iterator object at 0x102d2f3a0>
> > > next(list)
> > > 1
> > > list
> > > <list_iterator object at 0x102d2f3a0>
> > > next(list)
> > > 2
> > > list
> > > <list_iterator object at 0x102d2f3a0>

              <!-- def (function)  -->

      agar function execute ke samay multiple arguments pass kar de to use handle karne ke liye


      def sum_all(*args):  // ek estrik
        sum(args)

        print(sum_all(2 ,3)). // 5
        print(sum_all(2 ,3, 4, 5, 6,7)) // 27

create a function that accept any number keyword arguments and print in format of key , value

> def multiple_keyvalues( **kwargs ): // yaha pr 2 estrik. **kwargs

> for key,value in multiple_keyvalues.items():

>     print( f"{ key} : {value}"). // f - formating style

> multiple_keyvalues( name="Shaktiman" , power="dancing" , love="geeta")
> multiple_keyvalues( name="Shaktiman" )

# yeild method -> ye method bhi return karta , aur state bhi yaad rakhta hai

    def even_genrator(limit):
       for i in range( 2 , limit + 1, 2):
             yeild i

     for num in even_genrator(10)

          print(num)     // 2 4 6 8 10

