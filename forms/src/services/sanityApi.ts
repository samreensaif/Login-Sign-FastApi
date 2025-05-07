
"use server"


// ======================================Signup
import { client } from "@/sanity/lib/client"

export async function sanitySignupUploader(firstname: string, lastname: string, email: string, password: string, phoneNumber: string) {
  try {
    const res = await client.create({
      _type: 'signup',
      firstName: firstname,
      lastName: lastname,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
    })
    console.log("Sanity response:", res)
    return res
  } catch (error) {
    console.error("Error in Sanity signup:", error)
    throw error
  }
}
// =====================================Login

export async function SanityLoginUploader(userName: string, password: string) {
  try {
    const res = await client.create({
      _type: 'login',
      userName: userName,
      password: password,
    })
    console.log("Sanity response:", res)
    return res
  } catch (error) {
    console.error("Error in Sanity login:", error)
    throw error
  }
}