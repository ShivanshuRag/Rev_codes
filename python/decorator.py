
# Python mein, ek Decorator ek function hota hai jo doosre function ko as an argument leta hai, usmein kuch extra functionality add karta hai, aur phir ek naya (ya modified) function return karta hai.



def greetingModify(greet):
    def wrapped():
        print("Namste !")
        greet()
        print("kaise ho ?")
    return wrapped




@greetingModify
def greet():
    print("helloe ji")

greet()



def add_decorator(add):

    def wrapper(*args):
        result = add(*args)
        return result * 2
        
    return wrapper

@add_decorator
def add( a , b):
    return a + b

print(add( 3, 4))