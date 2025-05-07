from fastapi import FastAPI
from pydantic import BaseModel

from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()



app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Specifically allow frontend's origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



class UserRegister(BaseModel):
    firstName: str
    lastName: str
    email: str
    password: str
    phoneNumber: str

class UserLogin(BaseModel):
    
    username:str
    password:str

# store data
db = []   



# ================================POST REquest   for signup==============================
@app.post("/register")
async def register_user(user: UserRegister):

    # Assigning the firstName as the username, you can change this logic
    username = user.firstName.lower()  
    db.append({
        "username": username,  # Add this key to the dictionary
        "firstName": user.firstName,
        "lastName": user.lastName,
        "email": user.email,
        "password": user.password,
        "phoneNumber": user.phoneNumber
    })
    return JSONResponse(
        {"status": "successfully registered", "username": username},
        status_code=201
    )


# ==========================Post Request for login===================

@app.post("/login")
async def login_user(user: UserLogin):
    print(user)

    for registered_user in db:
        # Ensure the username is being accessed correctly
        if registered_user["username"] == user.username and registered_user["password"] == user.password:
            return JSONResponse(
                {"status": "Successfully logged in", "username": user.username},
                status_code=200
            )

    return JSONResponse(
        content={"status": "Invalid credentials"},
        status_code=401
    )
