import User from "../../models/Users.js";
import createTransporter from "../../middlewares/createTransporter.js";
import cryptoRandomString from "crypto-random-string";

export default async (req, res, next) => {
  try {
    const verificationCode = cryptoRandomString({ length: 6, type: "numeric" });
    const userObject = { ...req.body, verify_code: verificationCode };
    const one = await User.create(userObject);
    // Envía el mensaje de bienvenida
    const transporter = await createTransporter();

    const mailOptions = {
      from: "gamesforadrian4@gmail.com",
      to: one.email,
      subject: "Welcome to our platform!",
      html: `<table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-5401722008193577908deviceWidth" style="width:100%;min-width:100%" width="100%">
        <tbody><tr>
        <td align="center" bgcolor="#ffffff">
        
        
        
        <table border="0" cellpadding="0" cellspacing="0" class="m_-5401722008193577908deviceWidth" style="width:100%;max-width:600px" width="600">
        <tbody><tr>
        <td height="32" style="height:32px;min-height:32px;line-height:32px;font-size:1px">
        &nbsp;
        </td>
        </tr>
        
        <tr>
        <td height="32" style="height:32px;min-height:32px;line-height:32px;font-size:1px">
        &nbsp;
        </td>
        </tr>
        </tbody></table>
        
        
        
        
        <table border="0" cellpadding="0" cellspacing="0" class="m_-5401722008193577908deviceWidth" style="max-width:600px" width="100%">
        <tbody><tr>
        <td align="center" bgcolor="#ffffff">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody><tr>
        <td valign="top">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody><tr>
        <td style="width:13%;min-width:40px" width="13%">&nbsp;</td>
        <td align="center">
        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
        
        <tbody>
        <tr>
        <td align="center" style="padding-top:16px">
        <h1 class="m_-5401722008193577908f48" style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:28px;line-height:38px;font-weight:bold;color:#4b4b4b">
        Verify your email
        
        </h1>
        
        </td>
        </tr>
        
        <tr>
        <td align="center" style="padding-top:16px">
        <p style="font-family:Arial,Helvetica,sans-serif;font-size:18px;line-height:26px;font-weight:normal;color:##4338CA;max-width:380px;text-align:center">
        Hello, thank you for registering on our platform. Your verification code is: <span style="font-size:14px;font-weight:bold">${verificationCode}</span>. Use it to complete the registration process.
        
        
        </p>
        
        </td>
        </tr>
        
        <tr>
        <td align="center" style="padding-top:16px">
        <div>
        
        
        <table border="0" cellpadding="0" cellspacing="0" style="width:215px;border-spacing:0;border-collapse:collapse" width="215">

        </div>
        
        </td>
        </tr>
        
        <tr>
        <td align="center" style="padding-top:16px">
        <p style="font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:26px;font-weight:normal;color:#777777;max-width:380px;text-align:center">
        ¿Didn't create an account? Contact us to remove this email address.
        
        
        </p>
        
        </td>
        </tr>
        
        
        </tbody></table>
        </td>
        <td style="width:13%;min-width:40px" width="13%">&nbsp;</td>
        </tr>
        </tbody></table>
        
        </td>
        </tr>
        <tr>
        <td height="50" style="height:50px;min-height:50px;line-height:50px;font-size:1px;border-bottom:2px solid #f2f2f2">
        &nbsp;
        </td>
        </tr>
        </tbody></table>
        </td>
        </tr>
        </tbody></table>
        
        
        
        
        <table border="0" cellpadding="0" cellspacing="0" class="m_-5401722008193577908deviceWidth" width="100%">
        <tbody><tr>
        <td align="center" style="padding-top:23px">
        <table border="0" cellpadding="0" cellspacing="0" style="max-width:600px" width="100%">
        <tbody><tr>
        <td style="width:32px;min-width:32px;max-width:32px" width="32">
        &nbsp;
        </td>
        <td valign="top">
        
        <table align="right" border="0" cellpadding="0" cellspacing="0" class="m_-5401722008193577908responsive-table" style="min-width:100%;width:20%;max-width:100%;min-width:-webkit-calc(20%);min-width:calc(20%);width:-webkit-calc(287296px - 53600%);width:calc(287296px - 53600%)" width="105">
        <tbody><tr>
        <td align="left" style="padding-top:4px;padding-bottom:16px">
        <table border="0" cellpadding="0" cellspacing="0" width="105">
        <tbody><tr>
        <td>
        <a href="https://www.instagram.com" style="color:#a7a7a7" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.instagram.com/duolingo/&amp;source=gmail&amp;ust=1680106173146000&amp;usg=AOvVaw14Hw1bjIJxcxwLmJmJkJHx"><img alt="Instagram" height="auto" src="https://ci3.googleusercontent.com/proxy/RfiWmOL8tZiBtAVtByvEJrvgGfr5kWT5yS9uNmrJQ5_UdwTXdtyL_ywzQijrgoMkS7uTFhTWDSu-JnXe3itbFJo-4qE=s0-d-e1-ft#http://dzvpwvcpo1876.cloudfront.net/Instagram.png" style="display:block;border:0" width="25" class="CToWUd" data-bit="iit">
        </a>
        </td>
        <td style="width:15px;min-width:15px;font-size:1px" width="15">
        &nbsp;&nbsp;
        </td>
        <td>
        <a href="https://twitter.com" style="color:#a7a7a7" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://twitter.com/duolingo&amp;source=gmail&amp;ust=1680106173147000&amp;usg=AOvVaw0c-KvaHjhTKe4ogBG0yxEo"><img alt="Twitter" height="auto" src="https://ci4.googleusercontent.com/proxy/gYtvkz_HwJhZgdIoQD89Z6FQr1QPWtIGgnegZd-8WPrv9sksH48ZtHG_DjAdmQj5K4SIJzjkaf7ryINvbFYR6bTb=s0-d-e1-ft#http://dzvpwvcpo1876.cloudfront.net/Twitter.png" style="display:block;border:0" width="25" class="CToWUd" data-bit="iit">
        </a>
        </td>
        <td style="width:15px;min-width:15px;font-size:1px" width="15">
        &nbsp;&nbsp;
        </td>
        <td>
        <a href="https://www.facebook.com" style="color:#a7a7a7" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.facebook.com/duolingo&amp;source=gmail&amp;ust=1680106173147000&amp;usg=AOvVaw2ekMVj9Wsao84g_IUIQVJM"><img alt="Facebook" height="auto" src="https://ci3.googleusercontent.com/proxy/lDP515ageK0gC1NAKnESFQB2-boG4D7Mtu1C8zJyaXbdfLnlY1cx1c775c-k4nGm9qjEoE8EOvTYq9cS6wojR-_2qg=s0-d-e1-ft#http://dzvpwvcpo1876.cloudfront.net/Facebook.png" style="display:block;border:0" width="25" class="CToWUd" data-bit="iit">
        </a>
        </td>
        </tr>
        </tbody></table>
        </td>
        </tr>
        </tbody></table>
        
        
        <table align="left" border="0" cellpadding="0" cellspacing="0" class="m_-5401722008193577908responsive-table" style="min-width:100%;width:54%;max-width:100%;min-width:-webkit-calc(54%);min-width:calc(54%);width:-webkit-calc(287296px - 53600%);width:calc(287296px - 53600%)" width="290">
        <tbody><tr>
        <td align="center">
        
        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody><tr>
        <td align="left">
        <p style="Margin:0;margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:15px;font-weight:400;color:#a7a7a7">
        600 Amphitheatre Parkway Mountain View, CA 94043, USA
        </p>
        </td>
        </tr>
        </tbody></table>
        
        
        </td>
        </tr>
        </tbody></table>
        
        
        </td>
        <td style="width:32px;min-width:32px;max-width:32px" width="32">
        &nbsp;
        </td>
        </tr>
        </tbody></table>
        </td>
        </tr>
        
        <tr>
        <td height="60" style="height:60px;min-height:60px;line-height:60px;font-size:1px">
        &nbsp;
        </td>
        </tr>
        </tbody></table>
        
        
        
        
        </td>
        </tr>
        </tbody></table>`,
    };
    await transporter.sendMail(mailOptions);

    return res.status(201).json({
      response: one,
      success: true,
      message: "User register",
    });
  } catch (error) {
    next(error);
  }
};
