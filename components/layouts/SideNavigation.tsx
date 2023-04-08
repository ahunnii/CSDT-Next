import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	chakra,
	Collapse,
	Container,
	Drawer,
	DrawerContent,
	DrawerOverlay,
	Flex,
	Grid,
	GridItem,
	Heading,
	Icon,
	Image,
	SimpleGrid,
	Stack,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	useColorModeValue,
	useDisclosure,
} from "@chakra-ui/react";

import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
const NavItem: FC<any> = (props) => {
	const color = useColorModeValue("gray.600", "gray.300");
	const { icon, children, ...rest } = props;
	return (
		<Flex
			align="center"
			px="4"
			pl="4"
			py="3"
			cursor="pointer"
			color="inherit"
			_dark={{
				color: "gray.400",
			}}
			_hover={{
				bg: "gray.100",
				_dark: {
					bg: "gray.900",
				},
				color: "gray.900",
			}}
			role="group"
			fontWeight="semibold"
			transition=".15s ease"
			{...rest}>
			{icon && (
				<Icon
					mx="2"
					boxSize="4"
					_groupHover={{
						color: color,
					}}
					as={icon}
				/>
			)}
			{children}
		</Flex>
	);
};

const SidebarContent: FC<any> = (props) => {
	const router = useRouter();
	const color = useColorModeValue("gray.600", "gray.300");
	return (
		<Box
			as="nav"
			pos="fixed"
			top="60px"
			zIndex="sticky"
			h="full"
			pb="10"
			overflowX="hidden"
			overflowY="auto"
			bg="white"
			_dark={{
				bg: "gray.800",
			}}
			border
			color="inherit"
			borderRightWidth="1px"
			w="60"
			{...props}>
			<Flex direction="column" as="nav" fontSize="sm" color="gray.600" aria-label="Main Navigation">
				<Accordion allowToggle>
					<AccordionItem border={0}>
						<AccordionButton fontSize={"14px"} pl={0}>
							<Box flex="1" textAlign="left">
								<NavItem bg={"cyan.100"}>
									<Link href={"/quilting"}>Background</Link>
								</NavItem>
							</Box>
							<AccordionIcon />
						</AccordionButton>

						<AccordionPanel pb={4}>
							<NavItem pl="12" py="2" bg={`${router.asPath === "/quilting/geesbend" ? "green.50" : "blue.50"}`}>
								<Link href={"/quilting/geesbend"}>Gee's Bend</Link>
							</NavItem>
							<NavItem pl="12" py="2">
								Appalachian
							</NavItem>
							<NavItem pl="12" py="2">
								Lakota
							</NavItem>
							<NavItem pl="12" py="2">
								Anishinaabe
							</NavItem>
							<NavItem pl="12" py="2">
								Four Directions
							</NavItem>
							<NavItem pl="12" py="2">
								AfroFuturism
							</NavItem>
						</AccordionPanel>
					</AccordionItem>
				</Accordion>

				<NavItem>
					<Link href={"/quilting/geesbend"}>Gee's Bend</Link>
				</NavItem>
				<NavItem>Software</NavItem>
				<NavItem>Challenges</NavItem>
				<NavItem>Teaching Materials</NavItem>
				<NavItem>Acknowledgements</NavItem>
			</Flex>
		</Box>
	);
};

const SideNavigation = () => {
	const sidebar = useDisclosure();

	return (
		<>
			<SidebarContent
				display={{
					base: "none",
					md: "unset",
				}}
			/>
			<Drawer isOpen={sidebar.isOpen} onClose={sidebar.onClose} placement="left">
				<DrawerOverlay />
				<DrawerContent>
					<SidebarContent w="full" borderRight="none" />
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default SideNavigation;
