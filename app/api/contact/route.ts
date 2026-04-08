import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(120),
  email: z.string().email("Valid email is required").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = contactSchema.parse(json);

    // Demo behavior: accept message and return a request id (no DB).
    const requestId = `cv_${Date.now().toString(36)}`;

    return NextResponse.json({
      ok: true,
      requestId,
      received: {
        name: data.name,
        email: data.email,
      },
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, error: "VALIDATION_ERROR", issues: err.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { ok: false, error: "INTERNAL_ERROR" },
      { status: 500 }
    );
  }
}
