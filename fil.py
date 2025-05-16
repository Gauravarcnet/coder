# myfi = open('myfil.txt')

# print(myfi.read())
# Total Exp: 7 years
# Reason for Job Change: Growth and learning opportunities
# Node.js Exp: 6 years
# Express.js Exp: 6 years
# Database Exposure: MySQL, MongoDB, Redis
# Unit Testing Exp: Mocha and Jest (4 years)
# Current CTC: 25 LPA
# Notice Period: Immediate
# Expected CTC: According to company standard for the position
# Current Location: Delhi
# Preferred Location: No preference
# AWS Cloud Services Exp: 4 years


#if elif
# animal = 'dog'

# if animal ==  'cat':
#     print("mow")
# elif animal == 'dog':
#     print("bark")
# else:
#     print("woo")


#for_loop

# my_itrabl = [1,2,3,4]
# d = {'k1':1, 'k2':2, 'k3':3}
# my_string = 'build_class'

# # for string in my_string:
# #     if string == 'i':
# #         continue
# #     if string == 'd':
# #         break
# #     print(string)
# # for key, val in d.items():
# #     print(val)

# # my_list = [(1,2), (3,4), (5,6), (7,8)] 

# # for (a,b) in my_list:
# #     print(a)
# #     print(b)
    
# sentence = 'print only that word start with s in this sentence'
# word = sentence.split(' ')

# for string in word:
     
#      for str in string:
#         if str == 's' and len(string) > 1:
#             print(string)



#function cr

# def add(a = 0,b = 1):
#     # print("hello" + name)
#     return a + b

# print(add(2, 6))
# print(add("2", "5"))


# def even_check(number):
    
#     for num in number:
#         if num % 2 == 0:
#             return True
#     else:
#         pass 
#     return False;  

# print(even_check([1,32,5]))
# print(even_check([1,33,5]))

#
# def two_sum(array, target):
#     pointer_one = 0
#     pointer_two = len(array)-1
#     sum = 0

#     while pointer_one < pointer_two:
#         sum = array[pointer_one] + array[pointer_two]
#         if sum == target:
#             return (array[pointer_one], array[pointer_two])
#         elif sum < target:
#             pointer_one += 1
#         else:
#             pointer_two -= 1
#     return False

# print(two_sum([1,2,4,5,6,7,8], 20))

# x  = 25
# def printer():
#     # x = 50
#     return x


# print(printer())

# def sum(array, i, j):
#     sub_array_sum = 0

#     for k in range(i, j + 1):
#         sub_array_sum += array[i]

#     return sub_array_sum

# sliding window
# find a sub_array of siz k with max sum
# [3, 2, 5, 7, 9, 6, 2 ] k = 3


#prfx sum

# def prefix_sum(array, i, j):
#     sum = 0
#     prefix_array = []

#     for k in array:
#         sum += k
#         prefix_array.append(sum)
    
#     return (prefix_array[j] - prefix_array[i - 1])

# print(prefix_sum([1, 2, 3, 4, 5, 6], 1,3))

# def display(row1):
#     print(row1)
#     print(row1)
#     print(row1)
#     rsult = input("pl ntr a valu")
#     rsultConvrt = int(rsult)
#     print(type(rsultConvrt))

# display([1,2,3])


# def user_choice():
#     choice = "Wrong"

#     while choice.isdigit() == False:
#        choice =  input("Please enter the digit in between 0-9")

#        if choice.isdigit() == False:
#            print("Sorry that is not wrong digit")

#     return int(choice)
# user_choice()


# class Sample():
#     species = "mammal"
#     def __init__(self, breed):
#         self.breed = breed

#     def bark(self):
#         print("woof")

# my_dog = Sample("huski")
# # print(type(my_dog))
# # print(my_dog.species)
# # print(my_dog.breed)
# print(my_dog.bark())








try:
    data = { 'A':23, 'B':23}
    print(data['v'])
except Exception as e:
    print('Failed to')
finally:
    print("Finally block executed")


marks = 15
if marks > 60:
    print("Excellent")
elif marks > 50:
    print("Good")
elif marks > 40:
    print("Average")
else:
    print("Poor")