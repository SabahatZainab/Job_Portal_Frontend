import React from 'react'
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label'
import { Input } from '../ui/input';
import { RadioGroup } from "@/components/ui/radio-group"
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';


function Signup() {
  return (
    <div>
      <Navbar/>
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form action="" className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
          <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
          <div className='my-2'>
            <Label>Full Name</Label>
            <Input
            type="text"
            placeholder="sabahat"
            />
          </div>
          <div className='my-2'>
            <Label>Email</Label>
            <Input
            type="email"
            placeholder="sabahat@gmail.com"
            />
          </div>
          <div className='my-2'>
            <Label>Phone Number</Label>
            <Input
            type="number"
            placeholder="099999999"
            />
          </div>
          <div className='my-2'>
            <Label>Password</Label>
            <Input
            type="password"
            placeholder="Saba@123"
            />
          </div>
          <div className='flex items-center justify-between'>
            <RadioGroup className='flex items-center gap-4 my-5'>
              <div className="flex items-center space-x-2">
                <Input 
                type="radio"
                name="role"
                value="student"
                className="cursor-pointer"
                />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
              <Input 
                type="radio"
                name="role"
                value="recruiter"
                className="cursor-pointer"
                />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className='flex items-center gap-2'>
              <Label>Profile</Label>
              <Input
              accept="image/*"
              type="file"
              className="cursor-pointer"
              />
            </div>
          </div>
          <Button type="submit" className="w-full my-4">Signup</Button>
          <span className="text-sm">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></span>
        </form>
      </div>
    </div>

  )
}

export default Signup
