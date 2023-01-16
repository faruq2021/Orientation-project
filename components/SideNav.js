import {
    Box, 
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerCloseButton,
    useDisclosure,
    Stack,
    Link,
    Text
  } from "@chakra-ui/react";
  
  const SideNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
        <Box onClick={onOpen}>Open Side Nav</Box>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Navigation</DrawerHeader>
            <DrawerBody>
              <Stack spacing={3}>
                <Link href="/">
                  <Text>Home</Text>
                </Link>
                <Link href="/about">
                  <Text>About</Text>
                </Link>
                <Link href="/services">
                  <Text>Services</Text>
                </Link>
                <Link href="/contact">
                  <Text>Contact</Text>
                </Link>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  };
  
  export default SideNav;
  