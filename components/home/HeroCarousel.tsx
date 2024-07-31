import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import hero5 from '@/public/images/hero2 copy.svg';
import hero6 from '@/public/images/hero6.svg';
import hero7 from '@/public/images/hero7.svg';
import hero8 from '@/public/images/hero8.svg';
import hero9 from '@/public/images/hero9.svg';
import hero10 from '@/public/images/hero10.svg';

const carouselImages = [hero7, hero6, hero5, hero10, hero8, hero9];

function HeroCarousel() {
	return (
		<div className="hidden lg:block">
			<Carousel>
				<CarouselPrevious />
				<CarouselContent>
					{carouselImages.map((image, index) => {
						return (
							<CarouselItem key={index}>
								<Card>
									<CardContent className="p-2">
										<Image
											src={image}
											alt="hero"
											className="w-full h-[24rem] rounded-md object-cover"
										/>
									</CardContent>
								</Card>
							</CarouselItem>
						);
					})}
				</CarouselContent>
				<CarouselNext />
			</Carousel>
		</div>
	);
}

export default HeroCarousel;
