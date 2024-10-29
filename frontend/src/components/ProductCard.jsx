import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import {
	Box,
	Button,
	Heading,
	HStack,
	Icon,
	Image,
	Input,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useColorModeValue } from "../components/ui/color-mode";
import { useProductStore } from "../store/product";
import { useState } from "react";
import { toaster, Toaster } from "./ui/toaster";
// import { Button } from "./ui/button"
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

const ProductCard = ({ product }) => {
	const [updatedProduct, setUpdatedProduct] = useState(product);

	const textColor = useColorModeValue("gray.600", "gray.200");
	const bg = useColorModeValue("white", "gray.800");

	const { deleteProduct, updateProduct } = useProductStore();

	const handleDeleteProduct = async (pid) => {
		const { success, message } = await deleteProduct(pid);
		if (!success) {
			toaster.create({
				title: "Error",
				description: message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} else {
			toaster.create({
				title: "Success",
				description: message,
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		}
	};

	const handleUpdateProduct = async (pid, updatedProduct) => {
		const { success, message } = await updateProduct(pid, updatedProduct);
		if (!success) {
			toaster.create({
				title: "Error",
				description: message,
				status: "error",
				duration: 3000,
				type: "error",
				isClosable: true,
			});
		} else {
			toaster.create({
				title: "Success",
				description: "Product updated successfully",
				status: "success",
				duration: 3000,
				type: "success",
				isClosable: true,
			});
		}
	};

	return (
		<Box
			shadow='lg'
			rounded='lg'
			overflow='hidden'
			transition='all 0.3s'
			m={10}
			_hover={{ transform: "translateY(-5px)", shadow: "xl" }}
			bg={bg}
		>
         <Toaster/>
			<Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

			<Box p={4}>
				<Heading as='h3' size='md' mb={2}>
					{product.name}
				</Heading>

				<Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
					${product.price}
				</Text>

				<HStack spacing={2}>
               <DialogRoot
                  placement={"center"}
                  motionPreset="slide-in-bottom"
               >
                  <DialogTrigger asChild>
                  <Icon p={1} h={10} w={10} borderRadius={10} bg={"blue.200"}>
                     <FaEdit />
                  </Icon>
                  </DialogTrigger>
                  <DialogContent>
                  <DialogHeader>
                     <DialogTitle>Update Product</DialogTitle>
                  </DialogHeader>
                  <DialogBody>
                     <VStack spacing={4}>
                        <Input
                           placeholder='Product Name'
                           name='name'
                           value={updatedProduct.name}
                           onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                        />
                        <Input
                           placeholder='Price'
                           name='price'
                           type='number'
                           value={updatedProduct.price}
                           onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                        />
                        <Input
                           placeholder='Image URL'
                           name='image'
                           value={updatedProduct.image}
                           onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                        />
                     </VStack>
                  </DialogBody>
                  <DialogFooter>
                     <DialogActionTrigger>
							<Button
                        bg='blue.200'
                        mr={3}
                        onClick={() => handleUpdateProduct(product._id, updatedProduct)}
                     >
                        Update
                     </Button>
							</DialogActionTrigger>
						   <DialogActionTrigger asChild>
                        <Button variant="ghost">Cancel</Button>
                     </DialogActionTrigger>
                  </DialogFooter>
                     <DialogCloseTrigger />
                  </DialogContent>
               </DialogRoot>
              <Icon
						onClick={() => handleDeleteProduct(product._id)}
						
                  p={1} h={10} w={10} borderRadius={10} bg={"tomato"}
					>
                  <RiDeleteBin6Fill  />
               </Icon>
				</HStack>
			</Box>
		</Box>
	);
};
export default ProductCard;