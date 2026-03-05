import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Metodo non consentito" });
  }

  try {
    const {
      name,
      email,
      goal1 = [],
      goal2 = [],
      goal3 = [],
      goal4 = [],
    } = req.body;

    // Unisco tutti i goal inviati dal tuo form multi-step
    const allGoals = [...goal1, ...goal2, ...goal3, ...goal4];

    if (!email) {
      return res.status(400).json({ error: "Email mancante" });
    }

    const transporter = nodemailer.createTransport({
      host: "pro.eu.turbo-smtp.com",
      port: 465,
      secure: true,
      auth: {
        user: "7fe4df435c4be7b3a969",
        pass: "k3v7ReZPTWKqudOi5DwH",
      },
    });

    /* ===========================
       EMAIL A TE
    ============================ */

    const emailHtml = `
      <html>
        <body style="font-family: Arial, sans-serif;">
          <h2>Nuova richiesta di matching</h2>

          
          <p><strong>Email da:</strong> ${email}</p>

          <h3>Risposte selezionate:</h3>
          <ul>
            ${
              allGoals.length > 0
                ? allGoals.map((g) => `<li>${g}</li>`).join("")
                : "<li>Nessuna selezione</li>"
            }
          </ul>

          
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: "Cofactory <meetus@cofactory.it>",
      to: [
        "info@thallion-dev.it",
        "meetus@cofactory.it",
        "benedetta.bonito@cofactory.it",
      ],
      subject: `Nuova richiesta da ${email}`,
      replyTo: email,
      html: emailHtml,
    });

    /* ===========================
       EMAIL AUTOMATICA ALL'UTENTE
    ============================ */

    const thankHtml = `
      <html>
        <body style="font-family: Arial, sans-serif;">
          <p>Ciao ${name || ""},</p>
          <p>Grazie per aver compilato il form 🙌</p>
          <p>Ti ricontatterò il prima possibile per organizzare la call.</p>
          <br/>
          <p>Cofactory</p>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: "Cofactory <meetus@cofactory.it>",
      to: email,
      subject: "Grazie per averci contattati",
      html: thankHtml,
    });

    return res.status(200).json({ message: "Email inviata con successo" });
  } catch (error) {
    console.error("Errore invio mail:", error);
    return res.status(500).json({
      error: "Errore nell'invio dell'email",
    });
  }
}
