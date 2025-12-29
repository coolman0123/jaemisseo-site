import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "필수 필드를 모두 입력해주세요." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "올바른 이메일 주소를 입력해주세요." },
        { status: 400 }
      );
    }

    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Jaemisseo Contact" <${process.env.GMAIL_USER}>`,
      to: "funpeople.hq@gmail.com",
      replyTo: email,
      subject: `[Jaemisseo] 새로운 문의: ${name}님`,
      html: `
        <div style="font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="background: linear-gradient(135deg, #ff6b35, #ffb347); padding: 30px; border-radius: 16px 16px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">새로운 문의가 도착했습니다</h1>
          </div>
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 16px 16px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; width: 100px;">이름</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">이메일</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                  <a href="mailto:${email}" style="color: #ff6b35; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">회사/조직</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${company || "-"}</td>
              </tr>
            </table>
            <div style="margin-top: 24px;">
              <p style="color: #666; margin-bottom: 8px; font-size: 14px;">메시지</p>
              <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #eee;">
                <p style="margin: 0; line-height: 1.8; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          </div>
          <p style="text-align: center; color: #999; font-size: 12px; margin-top: 24px;">
            이 이메일은 Jaemisseo 웹사이트 문의 폼에서 자동으로 발송되었습니다.
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log("📧 Email sent successfully:", {
      name,
      email,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: "메시지가 성공적으로 전송되었습니다." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "메시지 전송에 실패했습니다." },
      { status: 500 }
    );
  }
}
