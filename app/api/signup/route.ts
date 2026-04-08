import { NextResponse } from "next/server";
import { z } from "zod";

const signupSchema = z.object({
  mode: z.enum(["signup", "signin"]).default("signup"),
  email: z.string().email().max(200),
  password: z.string().min(8).max(200),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = signupSchema.parse(json);

    // Demo behavior only: generate a pseudo token. No database, no real auth.
    const token = Buffer.from(
      JSON.stringify({ email: data.email, mode: data.mode, ts: Date.now() })
    ).toString("base64url");

    return NextResponse.json({
      ok: true,
      token,
      user: {
        email: data.email,
      },
      mode: data.mode,
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
