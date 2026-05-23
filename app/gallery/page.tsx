'use client'
import CustomSection from '@/components/CustomSection/CustomSection'
import Header from '@/components/Header'
import Footer from '@/components/Footer/Footer'
import ImageGallery from '@/components/ImageGallery/ImageGallery'
import { websiteConfig } from '../page'

export default function GalleryPage () {
   return (<>
      <Header />
		<CustomSection 
			textColor="black" bgColor="accent-color-10"
			customSectionConfig={{
				title: "Our Work".toUpperCase(),
				titleSize: "l", type: "version-1", align: "left"
			}}
		>
			<div className="text-m pd-1 full text-left">Check out some of our recent work</div>
			<div className="box mt-1">
            <ImageGallery images={websiteConfig.galleryImages} />
			</div>
		</CustomSection>
      <Footer />
   </>)
}
