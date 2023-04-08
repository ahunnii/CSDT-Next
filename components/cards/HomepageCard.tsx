import { FC } from "react";

interface CardProps {
	image?: string;
	alt?: string;
	name: string;
	link: string;
}
const HomepageCard: FC<CardProps> = ({ image, alt, name, link }) => {
	return (
		<a href={link} className="group rounded-lg shadow-md dark:bg-gray-100">
			<div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
				<img
					src={image ?? "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"}
					alt={alt ?? `Shows a preview of the CSDT tool: ${name}`}
					className="h-full w-full object-cover object-center group-hover:opacity-75"
				/>
			</div>

			<h1 className="my-5 text-lg font-medium text-gray-900 text-center">{name}</h1>
		</a>
	);
};

export default HomepageCard;
