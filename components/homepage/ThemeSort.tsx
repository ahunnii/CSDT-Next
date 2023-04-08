import { Button } from "@chakra-ui/button";
import { Box, Heading } from "@chakra-ui/layout";
import { FC } from "react";

interface ThemeSortProps {}

const ThemeSort: FC = () => {
	return (
		<Box>
			<Heading fontWeight={"300"} size={"lg"}>
				Theme
			</Heading>
			<Button>Computing</Button>
			<Button>Culture</Button>
			<Button>Mathematics</Button>
			<Button>Biology</Button>
		</Box>
	);
};

export default ThemeSort;
