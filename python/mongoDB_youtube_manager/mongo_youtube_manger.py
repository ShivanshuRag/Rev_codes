
from pymongo import MongoClient
from bson  import ObjectId

client = MongoClient("mongodb+srv://youtubePy:@cluster0.7o03egb.mongodb.net/",tlsAllowInvalidCertificates=True)
                     

db = client['youtubepy']
video_collection = db['videos']


def Add_video(name , time):

    video_collection.insert_one({"Name": name , "Time" : time})

def List_video():
    for video in video_collection.find():
        print(f"id: {video['_id']} Name: {video['Name']} Time: {video['Time']}")

def Update_video(video_id , new_name , new_time):
    video_collection.update_one(
        {'_id' : ObjectId(video_id)},
        {"$set" : {"Name": new_name , "Time": new_time}}
    )

def Delete_video(video_id):
    video_collection.delete_one({"_id": ObjectId(video_id)})


def main():
    while True:
        print("\n choose the given option")
        print("1. Add Video ")
        print("2. List Videos ")
        print("3. Update Video ")
        print("4. Delete Video ")
        print("5. Exit App")

        choice = input("Enter the number  given option ")

        if choice == '1':
            name = input("Enter the video name ")
            time = input("Enter the Video time duration ")
            Add_video(name , time)
        
        elif choice == '2':
            List_video()
        
        elif choice == '3':
            video_id = input("Enter the video id ")
            new_name = input("Enter the video new name ")
            new_time = input("Enter the video new time ")
            Update_video(video_id , new_name , new_time)
        
        elif choice == '4':
            video_id = input("Enter the video id , you want to delete")
            Delete_video(video_id)
        
        elif choice == '5':
            break

        else :
            print("Invalid Input")

if __name__ == "__main__":
    main()





# from pymongo import MongoClient
# from bson import ObjectId

# client = MongoClient("mongodb+srv://youtubePy:pyyoutube143@cluster0.7o03egb.mongodb.net/",tlsAllowInvalidCertificates=True)
# # Not a good idea to include id and password in code files
# #  tlsAllowInvalidCertificates=True - Not a good way to handle ssl


# db = client["ytmanager"]
# video_collection = db["videos"]

# # print(video_collection)

# def add_video(name, time):
#     video_collection.insert_one({"name": name, "time": time})

# def list_videos():
#     for video in video_collection.find():
#         print(f"ID: {video['_id']}, Name: {video['name']} and Time: {video['time']}")

# def update_video(video_id, new_name, new_time):
#     video_collection.update_one({'_id': ObjectId(video_id)}, {"$set": {"name": new_name, "time": new_time}})

# def delete_video(video_id):
#     video_collection.delete_one({"_id": video_id})
#     # TODO: debug this video_id problem


# def main():
#     while True:
#         print("\n Youtube manager App")
#         print("1. List all videos")
#         print("2. Add a new videos")
#         print("3. Update a videos")
#         print("4. Delete a videos")
#         print("5. Exit the app")
#         choice = input("Enter your choice: ")

#         if choice == '1':
#             list_videos()
#         elif choice == '2':
#             name = input("Enter the video name: ")
#             time = input("Enter the video time: ")
#             add_video(name, time)
#         elif choice == '3':
#             video_id = input("Enter the video id to update: ")
#             name = input("Enter the updated video name: ")
#             time = input("Enter the updated video time: ")
#             update_video(video_id, name, time)
#         elif choice == '4':
#             video_id = input("Enter the video id to update: ")
#             delete_video(video_id, name, time)
#         elif choice == '5':
#             break
#         else:
#             print("Invalid choice")

# if __name__ == "__main__":
#     main()
