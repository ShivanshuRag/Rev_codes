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
