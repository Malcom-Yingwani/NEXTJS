import { NextResponse } from "next/server";
import { prisma } from "../../db";

export async function GET(req) {
  const books = await prisma.book.findMany();
  console.log("GET books called");
  return NextResponse.json(books);
}

export async function POST(req) {
  const { title, link, img } = await req.json();
  const newBook = {
    id: books.length + 1,
    title,
    link,
    img,
  };
  books.push(newBook);
  return NextResponse.json("Book added successfully");
}
