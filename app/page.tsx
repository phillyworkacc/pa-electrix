'use client'
import CustomSection from "@/components/CustomSection/CustomSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header"
import Hero from "@/components/Hero/Hero"
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import TrustBar from "@/components/TrustBar/TrustBar";
import GetFreeQuoteForm from "@/forms/GetFreeQuoteForm";
import { Clock, MapPin, Phone, Star, UserRound } from "lucide-react";
import type { ServiceList } from "@/types";

import GoogleMap from "@/components/GoogleMap/GoogleMap";
import GalleryImage1 from "@/public/assets/gallery-image-1.jpg";
import GalleryImage2 from "@/public/assets/gallery-image-2.jpg";
import GalleryImage3 from "@/public/assets/gallery-image-3.jpg";
import GalleryImage4 from "@/public/assets/gallery-image-4.jpg";
import GalleryImage5 from "@/public/assets/gallery-image-5.jpg";
import GalleryImage6 from "@/public/assets/gallery-image-6.jpg";
import GalleryImage7 from "@/public/assets/gallery-image-7.jpg";
import GalleryImage8 from "@/public/assets/gallery-image-8.jpg";
import GalleryImage9 from "@/public/assets/gallery-image-9.jpg";
import Services from "@/components/Services/Services";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const websiteConfigOld = {
	minwebBusinessId: "7f6556982c2d43a78eaced9932389d19",
	headerBackgroundColor: "#829fff",
	headerTextColor: "#000000",
	formColors: { background: "#b2c4ff", color: "#000000" },
	accentColor: "#003cff",
	heroDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laborum aut minima ipsa veritatis amet, voluptatibus pariatur est? Ipsum voluptatum maxime, eaque aspernatur laborum, ab deleniti, accusamus beatae odio non exercitationem alias rem molestiae quos inventore vel? Facilis, eius voluptas.",
	businessPlaceId: "ChIJk7cTdl2edkgRMozw8a9cuKk",
	email: "info@moonwave-records.co.uk",
	phoneNumber: "+447727653159",
	name: "Testing Painters",
	googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2490.452666802299!2d-1.0669501!3d51.376358!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48769e5d7613b793%3A0xa9b85caff1f08c32!2sDads%20Shop%20Ltd!5e0!3m2!1sen!2suk!4v1767960830693!5m2!1sen!2suk",
	address: "23 W End Rd, Mortimer Common, Reading RG7 3TE",
	services: [
		{
			name: "Interior Painting",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi odit, rerum amet porro voluptatum corrupti enim laudantium ab eius dignissimos?",
			image: GalleryImage1,
			href: "/interior-painting"
		},
		{
			name: "Exterior Painting",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi odit, rerum amet porro voluptatum corrupti enim laudantium ab eius dignissimos?",
			image: GalleryImage5,
			href: "/exterior-painting"
		},
		{
			name: "Commercial Painting",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi odit, rerum amet porro voluptatum corrupti enim laudantium ab eius dignissimos?",
			image: GalleryImage7,
			href: "/commercial-painting"
		}
	] as ServiceList,
	servicesDescriptionCopy: "What we do best",
	openingTimes: {
		'Sunday': '9:30am - 7pm',
		'Monday': '9:30am - 7pm',
		'Tuesday': '9:30am - 7pm',
		'Wednesday': '9:30am - 7pm',
		'Thursday': '9:30am - 7pm',
		'Friday': '9:30am - 7pm',
	},
	landingPageImages: [
		GalleryImage1, GalleryImage3, GalleryImage4,
		GalleryImage2, GalleryImage7, GalleryImage9, 
	],
	galleryImages: [
		GalleryImage1, GalleryImage2, GalleryImage3,
		GalleryImage4, GalleryImage5, GalleryImage6,
		GalleryImage7, GalleryImage8, GalleryImage9
	],
	chatBot: {
		position: "right",
		ctaMessage: "Let us know if you have any questions!",
		ctaMessageTimeout: 10000, // in milliseconds (10 seconds as default)
		inbox: "This text goes straight to my personal phone. I will make sure to get back to you the second I'm free!",
		userInfoLocalStorageId: "mw-agency-moonwave-records-user-info"
	},
	saveFormValues: false
}

export const websiteConfig = {
	minwebBusinessId: "electrician-demo-london-essex",
	headerBackgroundColor: "#1858b8",
	headerTextColor: "#FFFFFF",
	formColors: { background: "#1858b8", color: "#FFFFFF" },
	accentColor: "#0E2649",

	name: "PA Electrix",
	tagline: "Safe. Tidy. Fully Qualified Electrical Work.",

	heroDescription:
		"Reliable electrician covering London & Essex. Specialising in fuse board upgrades, rewires, fault finding, lighting installations, and electrical testing. Every job is carried out safely, neatly, and fully to current regulations — no shortcuts, no mess, just solid work you can trust.",

	email: "paelectrixltd@gmail.com",
	phoneNumber: "+44XXXXXXXXXX",
	address: "London & Essex",
	servicesDescriptionCopy: "Domestic & Commercial Electrical Services",

	googleMapEmbedUrl: "",

	services: [
		{
			name: "Fuse Board Upgrades",
			description:
				"Modern consumer unit upgrades to bring your home up to current safety regulations. Fully tested and certified for peace of mind.",
			image: GalleryImage1,
			href: "/"
		},
		{
			name: "Full & Partial Rewires",
			description:
				"Complete or partial rewiring for homes, flats, and renovations. Safe, compliant, and future-proof installations.",
			image: GalleryImage2,
			href: "/"
		},
		{
			name: "Fault Finding & Repairs",
			description:
				"Fast diagnosis and repair of electrical faults, tripping circuits, and power issues. Efficient and reliable fixes.",
			image: GalleryImage3,
			href: "/"
		},
		{
			name: "Lighting Installations",
			description:
				"Indoor, outdoor, and feature lighting installs including spotlights, wall lights, and modern LED setups.",
			image: GalleryImage4,
			href: "/"
		},
		{
			name: "EICR Testing & Certification",
			description:
				"Electrical Installation Condition Reports for landlords, homeowners, and businesses to ensure full compliance.",
			image: GalleryImage5,
			href: "/"
		},
		{
			name: "EV Charger Installation",
			description:
				"Home and commercial electric vehicle charger installations with safe, certified setup.",
			image: GalleryImage6,
			href: "/"
		}
	] as ServiceList,

	openingTimes: {
		Monday: "8am - 6pm",
		Tuesday: "8am - 6pm",
		Wednesday: "8am - 6pm",
		Thursday: "8am - 6pm",
		Friday: "8am - 6pm",
		Saturday: "9am - 2pm",
		Sunday: "Emergency calls only"
	},

	businessPlaceId: "add here",

	landingPageImages: [
		GalleryImage1, GalleryImage2, GalleryImage3,
		GalleryImage4, GalleryImage7, GalleryImage8
	],

	galleryImages: [
		GalleryImage1,
		GalleryImage2,
		GalleryImage3,
		GalleryImage4,
		GalleryImage5,
		GalleryImage6,
		GalleryImage7,
		GalleryImage8,
		GalleryImage9
	],

	chatBot: {
		position: "right",
		ctaMessage: "Need an electrician? Send a message and I'll get back ASAP.",
		ctaMessageTimeout: 8000,
		inbox:
			"Thanks for your message — I'll respond as soon as I'm free. For urgent electrical issues, please mention it in your message.",
		userInfoLocalStorageId: "electrician-demo-user-info"
	},

	saveFormValues: false
};

export default function HomePage () {
	const router = useRouter();

	return (<>
		<Header />

		<Hero 
			name={websiteConfig.name} description={websiteConfig.heroDescription} 
			style="version-2" backgroundOpacity={0.35}
			actions={[
				{
					label: "Get Free Quote", buttonStyle: "normal", type: "action",
					action: () => router.push("/get-free-quote"), buttonSize: "sm"
				},
				{
					label: <><Phone size={18} /> {websiteConfig.phoneNumber}</>, buttonStyle: "outline-accent-color", type: "link",
					href: `tel:${websiteConfig.phoneNumber.replaceAll(' ','')}`, buttonSize: "sm"
				},
			]}
			formContent={<GetFreeQuoteForm />}
		/>

		<TrustBar 
			textColor="white" bgColor="accent-color-70"
			trustItems={[
				{ icon: <MapPin />, label: "GLASGOW" },
				{ icon: <Star fill="white" />, label: "5 STAR SERVICE" },
				{ icon: <Clock />, label: "20+ YEARS EXPERIENCE" },
			]}
		/>

		<CustomSection 
			textColor="white" bgColor="accent-color-70"
			customSectionConfig={{
				title: "ABOUT US", type: "version-2",
				image: GalleryImage9.src, align: "left", 
				icon: <UserRound size={40} />
			}}
		>
			<div className="text-sm full pd-05">
				Reliable Electrical Work You Can Trust
			</div>
			<div className="text-sm full pd-05">
				PA Electrix provides professional electrical services across London & Essex for homeowners, landlords, and businesses looking for safe, high-quality workmanship. From consumer unit upgrades and lighting installations to full rewires and fault finding, every job is completed to current regulations with care and attention to detail.
			</div>
			<div className="text-sm full pd-05">
				Built on reliability, honesty, and tidy workmanship, PA Electrix focuses on delivering dependable results at fair prices. Whether it's a small repair or a full installation project, customers can expect straightforward advice, professional service, and electrical work completed properly from start to finish.
			</div>
		</CustomSection>
		
		<CustomSection 
			textColor="black" bgColor="accent-color-30"
			customSectionConfig={{
				title: "Our Services".toUpperCase(),
				titleSize: "l", type: "version-1", align: "left"
			}}
		>
			<div className="text-m pd-1 full text-left mb-2">{websiteConfig.servicesDescriptionCopy}</div>
			<Services
				type="style-1"
				services={websiteConfig.services}
				nameSize="m"
			/>
		</CustomSection>
		
		<CustomSection 
			textColor="black" bgColor="white"
			customSectionConfig={{
				title: "Gallery".toUpperCase(),
				titleSize: "l", type: "version-1", align: "left"
			}}
		>
			<div className="text-m pd-1 full text-left">Check out some of our recent work</div>
			<div className="box mt-1">
				<ImageGallery images={websiteConfig.landingPageImages} />
			</div>
		</CustomSection>

		<CustomSection 
			textColor="black" bgColor="accent-color-10"
			customSectionConfig={{
				title: "Find us in Reading".toUpperCase(),
				titleSize: "l", type: "version-1", align: "left"
			}}
		>
			<div className="text-m pd-1 full dfb align-center gap-5">
				<MapPin size={24} />
				{websiteConfig.address}
			</div>
			<div className="box mt-1">
				<GoogleMap />
			</div>
		</CustomSection>
		
		<CustomSection 
			textColor="black" bgColor="accent-color-30"
			customSectionConfig={{
				title: <>READY TO TAKE THE NEXT STEP?<br />GET A FREE QUOTE TODAY!</>,
				titleSize: "l", type: "version-1", align: "center"
			}}
		>
			<div className="box full dfb justify-center mt-4">
				<Link href='/get-free-quote'>
					<button className="sm pd-15 pdx-3">GET FREE QUOTE</button>
				</Link>
			</div>
		</CustomSection>

		<CustomSection 
			textColor="black" bgColor="#f1f1f1"
			customSectionConfig={{
				title: "OPENING HOURS", titleSize: "xxl", type: "version-1", 
				align: "left", icon: <Clock size={40} />
			}}
		>
			{Object.keys(websiteConfig.openingTimes).map((key: any) => (
				<div key={key} className="text-sm full pd-05">{key}: {(websiteConfig.openingTimes as any)[key]}</div>
			))}
		</CustomSection>

		<Footer />
	</>)
}
