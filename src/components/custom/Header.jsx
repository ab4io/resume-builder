import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user, isSignedIn } = useUser();

  return (
    <div className='p-3 flex justify-between shadow-md'>
      <img src="/logo.svg" width={100} height={100} alt="" />
      
      { isSignedIn ?
        
        <div className='flex items-center gap-2'>
          <Link to={'/dashboard'}>
            <Button variant="outline">Dashboard</Button>
          </Link>
          <UserButton />
        </div> :
        
        <div className='flex items-center gap-2'>
          <Link to={'auth/sign-in'}>
            <Button>Get Started</Button>
          </Link>
          <UserButton />
        </div>
      }
    </div>
  )
}

export default Header