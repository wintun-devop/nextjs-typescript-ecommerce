import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const response = { message: "success" }
        return NextResponse.json(response, { status: 201 });
    } catch (e) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
};

export async function GET(request: NextRequest) {
    try {
      const allUsers = {"a":"a"}
      return NextResponse.json(allUsers);
    }catch(e){
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  };