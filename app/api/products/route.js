import { NextResponse } from "next/server"

export async function GET() {
    const query = 'populate[image][populate]=*&populate[category][populate]=*'
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?${query}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
                },
                cache: "no-store",
            }
        )
        if (!res.ok) {
            throw new Error("Failed to fetch from Strapi")
        }
        const data = await res.json()
        // console.log("Successfully fetched products data")
        // console.log(data)
        return NextResponse.json(data)
    } catch (error) {
        console.error("Error fetching product data", error)
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}