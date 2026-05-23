'use client'
import CustomSection from '@/components/CustomSection/CustomSection'
import Header from '@/components/Header'
import GetFreeQuoteForm from '@/forms/GetFreeQuoteForm'
import Footer from '@/components/Footer/Footer'

export default function GetFreeQuotePage () {
   return (<>
      <Header />   
      <CustomSection
         textColor="white" bgColor="accent-color-70"
			customSectionConfig={{ title: "", type: "version-1", align: "left" }}
      >
         <div className="box full dfb justify-center">
            <GetFreeQuoteForm />
         </div>
      </CustomSection>
      <Footer />
   </>)
}
