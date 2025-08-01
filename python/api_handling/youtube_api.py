import requests

def youtube_api_handling():
    url = "https://api.freeapi.app/api/v1/public/youtube/videos"

    header = {"accept" : "application/json"}

    response = requests.get(url , header)

    information = response.json()

    if information["success"] and "data" in information:

        first_data = information["data"]

        second_data = first_data["data"]

        
        list_title = []
        
         
        for i in range(0 , len(second_data)):
            
            item = second_data[i]
            
            items_2 = item["items"]
            items_3 = items_2["snippet"]
            Title = items_3["title"]
            list_title.append(Title)
        
        return list_title

            
        
    else:
        raise Exception("Failed to fetch youtube Api data")
    


def main():
    try:
      list_title = youtube_api_handling()
       
      print(f" Title : {list_title}")
       
    except Exception as e:
        print(str(e))

if __name__ == "__main__":
    main()


            
        
