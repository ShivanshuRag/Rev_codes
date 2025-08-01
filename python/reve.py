

# print("hello bhai")
# print("hello bhaiya ")
# print("hello shaiya")
# print("hello haiya")
# print("hello jhaiya")



def sum_all(*args):
    return sum(args)
    
 

# print(sum_all(2 , 3 , 5))




def key_value_handle(**kwargs):

    for key , value in kwargs.items():
        print(f" {key} = {value}")


# key_value_handle(name="Shubhi" , age="infinite" , work="tumse pyar")

#  yield 


def odd_genrator(limit):
    for i in range(2 , limit+1 , 2):
        yield i
    

for num in odd_genrator(10):
    print(num)

