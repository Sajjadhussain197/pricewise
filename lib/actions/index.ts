"use server"

export async function scrapeAndStoreProduct(productUrl:string){
    try {
        const scrapedProduct= await scrapeAmazonProduct(productUrl)
        
    } catch (error:any) {
        throw new Error(`Failed to upadte product:${error.message}`)
    }

}