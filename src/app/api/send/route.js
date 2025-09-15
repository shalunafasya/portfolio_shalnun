import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_cbrx7e5k_G5mLeTpwosEnNHMrmGjmrHYG');
const fromEmail = 'onboarding@resend.dev';

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message, fromEmail);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: 'fasyashaluna@gmail.com',
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>from : </p>{email}
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    console.log("Request body:", await req.json());
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
