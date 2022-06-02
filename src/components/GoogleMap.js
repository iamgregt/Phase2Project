import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    HStack,
    IconButton,
    Input,
    SkeletonText,
    Text,
  } from '@chakra-ui/react'
  import { FaLocationArrow, FaTimes } from 'react-icons/fa'
  import {useJsApiLoader, GoogleMap as GMAP} from "@react-google-maps/api"

  const center = { lat: 35.133917650729394, lng: -89.981809341931 }

  function GoogleMap() {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    if (!isLoaded) {
        return <h1>Loading</h1>
    }

    return (
      <Flex
        position='relative'
        flexDirection='column'
        alignItems='center'
        h='100vh'
        w='100vw'
      >
        <Box position='absolute' left={0} top={0} h='100%' w='100%'>
        <GMAP center={center} zoom={11} mapContainerStyle={{width: '100%', height: '100%'}}>

</GMAP>
        </Box>

        <Box
          p={4}
          borderRadius='lg'
          m={4}
          bgColor='white'
          shadow='base'
          minW='container.md'
          zIndex='modal'
        >
          <HStack spacing={4}>
            <Input type='text' placeholder='Origin' />
            <Input type='text' placeholder='Destination' />
            <ButtonGroup>
              <Button colorScheme='pink' type='submit'>
                Calculate Route
              </Button>
              <IconButton
                aria-label='center back'
                icon={<FaTimes />}
                onClick={() => alert(123)}
              />
            </ButtonGroup>
          </HStack>
          <HStack spacing={4} mt={4} justifyContent='space-between'>
            <Text>Distance: </Text>
            <Text>Duration: </Text>
            <IconButton
              aria-label='center back'
              icon={<FaLocationArrow />}
              isRound
              onClick={() => alert(123)}
            />
          </HStack>
        </Box>
      </Flex>
    )
  }
  
  export default GoogleMap