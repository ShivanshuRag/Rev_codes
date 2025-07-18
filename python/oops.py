
"""
class Car():
    def __init__(self ,brand,model): 
       self.brand = brand
       self.model = model

    def fullname(self , last):
        self.last = last
        return f"{self.brand} {self.model} {self.last}"

        

my_car = Car("toyota" , "corolla")  
print(my_car.model) 
print(my_car.brand) 
print(my_car.fullname("singh"))

# python me __init__ method ko contruction bhi kahte hai
# self -> keyword  , javascript ke this keyword jaisa hai 

# constructor -> jab koi naya object bnta h , to use class ka contructor apne aap call hota jata hai

# jab kisi call me ke ander function banate hai to usme self jarur lagta , jisse us class ki sari chije access kar sake 

"""

#  inheritance - > jo appko apne baap , dada se. mile , jaydad 

"""
class Car():
    def __init__(self , brand, model):
        self.brand = brand
        self.model = model
    
    def fullname(self):
        return f"{self.brand} {self.model}"


class Electric_car(Car):

    def __init__(self , brand , model , battery):

        super().__init__( brand ,model)
  
        self.battery = battery


myTesla = Electric_car("Tesla" , "model 3" , "100kwh")
print(myTesla.model)
print(myTesla.fullname())


# super() -> ( means ooper ) -> jis class ko inherite karna ho

#  jaise yaha super().__init__() -> __init__ contructor h yaha pe 

"""




"""
#   Encapsulation -> apne ander chhupa ke rakh lena , aur bahar ka koi object n jan paye , but us class ke ander hi jaan paye/ access ho pata h , class se bahar no access 

# kisi chij ko apne ander rakh lena , aur bahar ka koi n jaan paye , jab tak vo n chahe , 

class Car():
    def __init__(self , brand, model):
        self.__brand = brand
        self.model = model
#  
    def get_brand(self):
        return f"{self.__brand} .."

    
    def fullname(self):
        return f"{self.__brand} {self.model}"


class Electric_car(Car):

    def __init__(self , brand , model , battery):

        super().__init__( brand ,model)
  
        self.battery = battery


myTesla = Electric_car("Tesla" , "model 3" , "100kwh")

 
myTesla_1 = Car("TATA" , "Safari")   


print(myTesla_1.__brand) 
# AttributeError 
print(myTesla_1.get_brand())
# no error

print(myTesla.__brand)
# AttributeError 
print(myTesla.get_brand())
# no error

# yaha per kaha gaya h ki brand attribute ko ( method & property -> atrribute bolte hai python me) private kar do aur ek method banao jo ki es brand atrribute ko us method ke through access ho , aur direct access n ho .

# ( __brand ) 2 underscore brand ke aage lag diye jisse vo private attribute ho gya , ab vo es class ke ander hi use kar sakte h , but bahar koi object nhi kar sakta 

# like -> car class ke ander brand h attribute h , to jab usse __brand (private) kar diya . to vo private attribute usi class ke attribute use kar sakte h , jaise  get_brand attribute(method) use kar raha , aur fullname me use kar raha h 


#  get_brand method es liye banaya gya h , jisse es method ke through hi brand attribute access ho , sake , direct access n ho sake 

"""



"""
#   polymorphsim -> ek chij ke aneka roop ( ek chij se har jagah alag alag kaam ) jaise - ( + operator), jab integer milta h to ose ADD kar deta h , aur jab STRING milta h to ose pass pass la ke mila deta hai



# question ye h ki ek attribute banao aur fuel type , aur normal car ke liye desel or petrol and Electric ke liye fuel type , Electric battery

class Car():
    def __init__(self , brand, model):
        self.__brand = brand
        self.model = model
#  
    def get_brand(self):
        return f"{self.__brand} .."

    def fuel_Type(self):
        return "Petrol and Disel"
    
    def fullname(self):
        return f"{self.__brand} {self.model}"


class Electric_car(Car):

    def __init__(self , brand , model , battery):

        super().__init__( brand ,model)
  
        self.battery = battery
    
    def fuel_Type(self):
        return " Electric charge"


myTesla = Electric_car("Tesla" , "model 3" , "100kwh")
 
myTesla_1 = Car("TATA" , "Safari")  

print(myTesla.fuel_Type())
print(myTesla_1.fuel_Type())


"""


# create a class variable to Car that keep track of the number of cars created 
"""
class Car():

    total_car = 0

    def __init__(self , brand , model):
        self.brand = brand
        self.model = model
        Car.total_car += 1

        # yaha per Car class ke ander( Car.) dot lagke ke bhi variable access kar sakte h ,

        # init ek constructor jab bhi koi object bnega to ye har baar call hoga , esse total_car ki count bhi hogi .


Car(" TATA" ,"Safari")
#  aise bhi new obect bana sakte h
newCar = Car("z-wagon" ," C-class")
# aur aise bhi

print(Car.total_car)


"""


# Static Method -> add a static method to the car class that return a genral descripation of car 
"""
class Car():
    def __init__(self , brand, model):
        self.__brand = brand
        self.model = model
    @staticmethod
    def genral_description():
        return "Car is amzing , I have jaguar , love it"
    def get_brand(self):
        return f"{self.__brand} .."

    def fuel_Type(self):
        return "Petrol and Disel"
    
    def fullname(self):
        return f"{self.__brand} {self.model}"



my_car = Car(" TATA" , "Safari")

print(Car.genral_description())


# @staticmethod h enko decorator bolte h 
"""

# use property decorator in the  Car class to make model property read-only 

"""
class Car():
    def __init__(self , brand, model):
        self.__brand = brand
        self.__model = model
    @staticmethod
    def genral_description():
        return "Car is amzing , I have jaguar , love it"
    
    @property
    def model(self):
        return self.__model
    def get_brand(self):
        return f"{self.__brand} .."

    
    def fullname(self):
        return f"{self.__brand} {self.__model}"

   

my_car = Car("TATA" , "Safari")

# my_car.model = "Nexon"

print(Car.model())



# yahe pe @property decorator esliye use karte hai , kyoki jab kisi property ko read-only karna h , usme koi n change kar paye , 

# agar aap __model kar diye h , aur @property decorator nhi use kia hai to agar model ki value change karna chahoge to change ho jayega , but @property use kar liye h to nhi change kar paoge.

#  aur jo alag se method banaye h model() , usse bhi nhi access kar payenge agar @property decorator lga diye h to .

#  to aap ko uska * my_car.model * kar ke access hi kar payege agar aapne @property decorator ,and (__) underscore se private kar diye hai 

"""

# class inharitance  and isinstance() function

#  demonstrate the isinstance() function and check myTesla is an instance of Car and Electric_car
       
"""
class Car():
    def __init__(self , brand, model):
        self.__brand = brand
        self.model = model
#  
    def get_brand(self):
        return f"{self.__brand} .."

    
    def fullname(self):
        return f"{self.__brand} {self.model}"


class Electric_car(Car):

    def __init__(self , brand , model , battery):

        super().__init__( brand ,model)
  
        self.battery = battery


myTesla = Electric_car("Tesla" , "model 3" , "100kwh")


print(isinstance(myTesla ,Car))
print(isinstance(myTesla ,Electric_car))


"""

"""
#  multiple inheritance 

# create two classes Battery and Engine and let the ElecticCar class inherit from both demonstarting multiple inheritance


class Battery:
    def battery_info(self):
        return "this is Battery"
    
class Engine:

    def engine_info(self):
        return " this is engine"
    
class ElectricCar(Battery ,Engine):

    pass  

my_tesla_01 = ElectricCar()

print(my_tesla_01.engine_info())
print(my_tesla_01.battery_info())

    
"""































