import books from "../data.json";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  const { id } = await params;

  await prisma.book.delete({ where: { id: id } });
  return new NextResponse({ "Book deleted": id });
};
