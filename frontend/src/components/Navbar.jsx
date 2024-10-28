import { Button, Container, Flex,  HStack,  Text,  } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { CiSquarePlus } from "react-icons/ci";
import { ColorModeButton} from "./ui/color-mode";
const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
				alignItems={"center"}
				justifyContent={"space-between"}
				flexDir={{
					// base: "column",
					sm: "row",
				}}
      >
        <Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					// bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgGradient="to-r" gradientFrom="red.400" gradientTo="blue.500" 
					bgClip={"text"}
				>
					<Link to={"/"}>Product Store 🛒</Link>
				</Text>

        <HStack spacing={2} alignItems={"center"}>
					<Link to={"/create"}>
						<Button>
							<CiSquarePlus fontSize={20} />
						</Button>
					</Link>
          <ColorModeButton/>
				</HStack>
      </Flex>
    </Container>
  )
}

export default Navbar
