import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // 生成用户表 用户姓名 头像 简介 钱包地址 多个钱包地址怎么办？
        const result =
            await sql`CREATE TABLE Users ( Name varchar(255), Id varchar(255), Picture varchar(255), Bio varchar(255), );`;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
