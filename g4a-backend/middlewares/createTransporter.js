import nodemailer from "nodemailer";
import { google } from "googleapis";

const createTransporter = async () => {
  // Obtiene las credenciales del cliente OAuth 2.0
  const credentials = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    refresh_token: process.env.REFRESH_TOKEN,
  };
  // Crea un nuevo objeto OAuth2 usando las credenciales
  const OAuth2Client = new google.auth.OAuth2(
    credentials.client_id,
    credentials.client_secret,
    "https://developers.google.com/oauthplayground" // En este ejemplo, el redirect URI es la página de pruebas de OAuth2
  );
  // Establece las credenciales de acceso
  OAuth2Client.setCredentials({
    refresh_token: credentials.refresh_token,
  });
  // Obtiene el token de acceso
  const accessToken = await OAuth2Client.getAccessToken();
  // Configura el transporte de correo
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      type: "OAuth2",
      user: "samuelgarciam03@gmail.com",
      accessToken,
      clientId: credentials.client_id,
      clientSecret: credentials.client_secret,
      refreshToken: credentials.refresh_token,
    },
  });

  return transporter;
};

export default createTransporter;
