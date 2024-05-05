import {sql} from "@vercel/postgres";
import {NextResponse} from "next/server";

export const GET = async (
    req,
    context
) => {
    const id = Number(context.params.id || 0);

    const {rows} = await sql`SELECT * from Users where Id=${id}`;

    return NextResponse.json({success: true, data: rows});
};
