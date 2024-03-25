import apiCall from "@/utils/apiCall";
import { NextResponse } from "next/server";

export async function GET(request: Request, params: any) {
  const { city } = params.params;
  try {
    const rawData = await apiCall("/common/locations/districts", {
      city: Number(city),
      languages: ["en-gb"],
    });
    const disctricts = rawData.map((district) => {
      return {
        id: district.id,
        name: district.name["en-gb" as keyof typeof district.name],
      };
    });
    return NextResponse.json(disctricts);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
