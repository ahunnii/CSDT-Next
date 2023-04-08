import { Heading, Image, Text } from "@chakra-ui/react";

import type { FC, ReactElement } from "react";
import { BackgroundLayout } from "../../components/layouts";

const QuiltingHomepage: FC = () => {
	return (
		<BackgroundLayout>
			<Heading> Quilting Background</Heading>

			<Image src={"/quilting/homepage.png"} alt={""} />
			<Text>
				Quilting uses small scraps of fabric to make blankets and other textiles. It was originally based on discarded
				cloth, so the traditions often came from low income communities. Reuse of cloth also benefits the environment by
				reducing waste. In this site, you can learn about quilting in African American, Appalachian, Native American,
				Pacific Islander, Celtic, and Asian traditions.
			</Text>

			<Text>
				These quilts encode Indigenous mathematical ideas, social messages, and other systems for turning patterns into
				meaning. We call these “heritage algorithms”. The tutorials on this site will show you how to use heritage
				algorithms to creatively code your own quilt designs, and even turn your virtual quilts into physical cloth.
			</Text>
		</BackgroundLayout>
	);
};

export default QuiltingHomepage;
