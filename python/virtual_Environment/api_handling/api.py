
import requests


def fetch_random_jokes():
        url = "https://api.freeapi.app/api/v1/public/randomjokes/joke/random"
        header = {"action" : "application/json"}
        response = requests.get(url , header)
        data = response.json()

        if data["success"] and "data" in data:
                
                user_data = data["data"]
                jokes_id = user_data["id"]
                jokes = user_data["content"]

                return jokes_id , jokes
        else:
                raise Exception(" Failed to fetch jokes ")


def main():
       jokes_id , jokes = fetch_random_jokes()
       print(f"id: {jokes_id} , jokes: {jokes}")

if __name__ == "__main__":
        main()

        