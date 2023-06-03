from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import os

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with the specific origins you want to allow
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/add_item")
def hello():
    os.system("sui client call --package $PACKAGE --module purchase --function add_item --args $GAMEINFO 2 --gas-budget 10000000")
    return 1

@app.get("/transfer_item")
def hello(item):
    os.system("sui client call --package $PACKAGE --module purchase --function transfer_item --args $ITEM $HERO --gas-budget 10000000")

if __name__ == "__main__":
    uvicorn.run(app, host='0.0.0.0', port=1234)
