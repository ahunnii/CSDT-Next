import { Container, Flex } from "@chakra-ui/layout";
import { FC } from "react";
import BackgroundLayout from "./BackgroundLayout";
import NavBar from "./Navigation";

interface DefaultLayoutProps {
	children: React.ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
	return (
		<>
			<NavBar />
			<Container maxW={"6xl"} mt={5}>
				<Flex>

					<BackgroundLayout>{children}</BackgroundLayout>
				</Flex>
			</Container>
		</>
	);
};

export default DefaultLayout;
