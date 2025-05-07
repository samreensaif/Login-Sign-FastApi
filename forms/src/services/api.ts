// ======================post function


export const registerUser = async (user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
}) => {
  
    const res = await fetch("http://127.0.0.1:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    

    const data = await res.json();

    // Return the response data
    return data;
  } 



// ============================POST function===================================

export const loginUser = async (user:{username:string,password:string})=>{


  const res = await fetch("http://127.0.0.1:8000/login",{
    method : "POST",
    headers:{
      "Content-Type": "application/json",      
    },
    body: JSON.stringify(user),
  })

  const data = await res.json();
  return data;
}

