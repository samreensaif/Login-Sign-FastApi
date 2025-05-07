"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


import { loginUser } from "@/services/api"
import { SanityLoginUploader } from "@/services/sanityApi"

export default function LoginForm() {
  const [formData, setFormData] = useState({
    userName: "",
    
    password: "",
    })



  const user = {
    username: formData.userName,
    password: formData.password,
    
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // // Call to Sanity API
    // const loginSanity = async () => {
    //   const res = await SanityLoginUploader(
    //     formData.userName, 
    //     formData.password,
    //   )
    //   return res
    // }

    // try {
    //   const sanityResponse = await loginSanity()
    //   console.log("User saved to Sanity:", sanityResponse)
    //   alert("User registered successfully in Sanity!")
    // } catch (error) {
    //   alert("Error registering user in Sanity.")
    // }

    // Call to your FastAPI or other backend
    const res = await loginUser(user)
    console.log("🍒👀📚", res)
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Log in</CardTitle>
          
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="userName">User Name</Label>
                <Input
                  id="userName"
                  name="userName"
                  placeholder="John"
                  value={formData.userName}
                  onChange={handleChange}
                  required
                />
              </div>
              
            </div>

            

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>
        </CardContent>
        
      </Card>
    </div>
  )
}
