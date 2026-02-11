import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    console.log("ENTROU NA API");

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY não encontrada");
      return Response.json(
        { error: "API key não configurada no servidor" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { name, email, message } = await req.json();

    const response = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", 
      to: "luizhneri19@gmail.com",
      subject: "Novo contato do portfólio",
      replyTo: email, 
      html: `
        <h2>Novo contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    });

    console.log("RESEND RESPONSE:", response);

    return Response.json({ success: true });
  } catch (error) {
    console.error("ERRO REAL:", error || error);
    return Response.json(
      { error: error || "Erro ao enviar email" },
      { status: 500 }
    );
  }
}
