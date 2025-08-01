
# import sqlite3

# conn = sqlite3.connect('youtube_data.db')

# cursor = conn.cursor()

# cursor.execute('''
# CREATE TABLE videos(
#                id  INT PRIMARY KEY
#                name TEXT NOT NULL
#                time  TEXT NOT NULL
               
#                );
 
# ''')
    
# def List_videos():
#     cursor.execute("SELECT * FROM videos")
#     for row in cursor.fetchall():
#         print(row)


# def Add_videos(name , time):
#     cursor.execute("INSERT INTO videos(name , time) VALUE( ? , ?)", (name , time))
#     conn.commit()

# def Update_videos(video_ID , new_name , new_time):
#     cursor.execute("UPDATE videos SET name = ? , time = ? WHERE id = ? " , (new_name , new_time , video_ID))
#     conn.commit()
 

# def Delete_videos(video_ID):
#     cursor.execute("DELETE FROM videos WHERE id = ?" , (video_ID))
#     conn.commit()



# def main():

#     while True:

#         print("\n choose the option")
#         print("1. List_videos ")
#         print("2. Add_videos ")
#         print("3. Update_videos")
#         print("4. delete-videos")
#         print("5. exit app")

#         choice = int(input(" Enter the given option "))

#         if choice == 1:
#             List_videos()
#         elif choice == 2:
#             name = input("Enter the video name: ")
#             time = input("Enter the time duration: ")
#             Add_videos(name , time)
#         elif choice == 3:
#             video_ID = input("Enter the video ID: ")
#             new_name = input("Enter the video name: ")
#             new_time = input("Enter the time duration: ")
#             Update_videos( video_ID , new_name , new_time)
#         elif choice == 4:
#             video_ID = input("Enter video ID")
#             Delete_videos(video_ID)

#         elif choice == 5:

#             break
            
#         else :
#             print("Invalid option ")

#     conn.close()


# if __name__ == "__main__":
#     main()


# ********************


import sqlite3

conn = sqlite3.connect('youtube_videos.db')

cursor = conn.cursor()

cursor.execute('''
    CREATE TABLE IF NOT EXISTS videos (
               id INTEGER PRIMARY KEY,
               name TEXT NOT NULL,
               time TEXT NOT NULL
    )
''')

def list_videos():
    cursor.execute("SELECT * FROM videos")
    for row in cursor.fetchall():
        print(row)

def add_video(name, time):
    cursor.execute("INSERT INTO videos (name, time) VALUES (?, ?)", (name, time))
    conn.commit()

def update_video(video_id, new_name, new_time):
    cursor.execute("UPDATE videos SET name = ?, time = ? WHERE id = ?", (new_name, new_time, video_id))
    conn.commit()

def delete_video(video_id):
    cursor.execute("DELETE FROM videos where id = ?", (video_id,))
    conn.commit()

def main():
    while True:
        print("\n Youtube manager app with DB")
        print("1. List Videos")
        print("2. Add Videos")
        print("3. Update Videos")
        print("4. Delete Videos")
        print("5. exit app")
        choice = input("Enter your choice: ")

        if choice == '1':
            list_videos()
        elif choice == '2':
            name = input("Enter the video name: ")
            time = input("Enter the video time: ")
            add_video(name, time)
        elif choice == '3':
            video_id = input("Enter video ID to update: ")
            name = input("Enter the video name: ")
            time = input("Enter the video time: ")
            update_video(video_id, name, time)
        elif choice == '4':
            video_id = input("Enter video ID to delete: ")
            delete_video(video_id)
        elif choice == '5':
            break
        else:
            print("Invalid Choice ")

    conn.close()

if __name__ == "__main__":
    main()