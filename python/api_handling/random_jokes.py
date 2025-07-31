
import requests

def random_jokes_fetch():
    url= "https://api.freeapi.app/api/v1/public/randomjokes/joke/random"

    header = {"accept" : "application/json"}

    response = requests.get(url , header )

    data = response.json()

    if data["success"] and "data" in data:
       user_data = data["data"]
       jokesid = user_data["id"]
       jokes =  user_data["content"]

       return jokesid , jokes
    else:
        raise Exception("Failed to fetch random jokes")
    

def main():
    try:
     
     jokesid , jokes = random_jokes_fetch()
     
     print(f"id: {jokesid} \njoke: {jokes}")


      
    except Exception as e:
        print(str(e))


if __name__ == "__main__":
    main()
    