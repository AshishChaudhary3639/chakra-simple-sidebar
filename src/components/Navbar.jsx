import React from 'react'
import { Button, Stack, Icon } from '@chakra-ui/react'
import { PhoneIcon, AddIcon,SettingsIcon,SearchIcon,StarIcon } from '@chakra-ui/icons'

const Navbar = () => {
    return (
       
        <div className='sideBar'>
           <Stack direction='column' spacing={9} align='center'>
                <Button colorScheme='gray' variant='ghost'   fontSize='28px'>
                    Logo
                </Button>

                    <Button leftIcon={<PhoneIcon />} colorScheme='gray' variant='ghost'  _hover={{ bg: '#2e7cc5' }} fontSize='20px'  width="80%" align="start">
                         Home
                    </Button>

                    <Button leftIcon={<AddIcon/>} colorScheme='gray' variant='ghost'  _hover={{ bg: '#2e7cc5' }} fontSize='22px'width="80%" align="start">
                        
                        <h1>Trending</h1>
                        
                    </Button>
                
                
                    <Button leftIcon={<SearchIcon />} colorScheme='gray' variant='ghost'  _hover={{ bg: '#2e7cc5' }} fontSize='22px'width="80%" align="start">
                    
                        <h1>Explore</h1>
                    </Button>
              

                    <Button leftIcon={<StarIcon />}  colorScheme='gray' variant='ghost'  _hover={{ bg: '#2e7cc5' }} fontSize='22px'width="80%" align="start">
                    
                   <h1> Favourites</h1>
                    </Button>

                    <Button leftIcon={<SettingsIcon />}  colorScheme='gray' variant='ghost'  _hover={{ bg: '#2e7cc5' }} fontSize='22px'width="80%" align="start">
                    
                    <h1>Setting</h1>
                        
                    </Button>

            </Stack>

        </div>
    )
}

export default Navbar;