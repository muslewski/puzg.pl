import * as React from "react";

interface EmailTemplateProps {
  message: string;
  title: string;
  name: string;
  email: string;
  translations: {
    titleLabel: string;
    messageLabel: string;
    emailLabel: string;

    sender: string;
    thanksForMessage: string;
    greeting: string;
    weReceived: string;
    detailsOfMessage: string;
    ifQuestions: string;
    buttonVisitPage: string;
    copyright: string;
    privacyPolicy: string;
    Bip: string;
  };
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
  title,
  name,
  email,
  translations: t,
}) => (
  <div
    style={{
      fontFamily: "'Montserrat', 'Outfit', sans-serif",
      color: "#455466",
      maxWidth: "600px",
      width: "100%",
      margin: "0 auto",
      padding: "20px",
      // backgroundColor: "#F5F6F7",
      borderCollapse: "collapse",
    }}
  >
    {/* Header */}
    <table
      style={{
        width: "100%",
        borderRadius: "8px 8px 0 0",
        backgroundColor: "#09547C",
        padding: "20px",
      }}
    >
      <tbody>
        <tr>
          <td style={{ textAlign: "center" }}>
            <h1 style={{ color: "#FFFFFF", fontSize: "24px", margin: "0" }}>
              {t.sender}
            </h1>
          </td>
        </tr>
      </tbody>
    </table>

    {/* Content Section */}
    <table
      style={{
        width: "100%",
        padding: "20px",
        backgroundColor: "#FFFFFF",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <tbody>
        <tr>
          <td>
            <h2
              style={{
                color: "#09547C",
                fontSize: "22px",
                margin: "0 0 20px 0",
                borderBottom: "2px solid #09547C",
                paddingBottom: "10px",
              }}
            >
              {t.thanksForMessage}
            </h2>
            <p
              style={{ fontSize: "16px", lineHeight: "1.5", margin: "10px 0" }}
            >
              {t.greeting} <strong>{name}</strong>,
            </p>
            <p
              style={{ fontSize: "16px", lineHeight: "1.5", margin: "10px 0" }}
            >
              {t.weReceived}
            </p>

            {/* Message Details Section */}
            <table
              style={{
                width: "100%",
                backgroundColor: "#F9FAFB",
                padding: "20px",
                borderRadius: "8px",
                marginTop: "20px",
                border: "1px solid #E5E7EB",
              }}
            >
              <tbody>
                <tr>
                  <td>
                    <h3
                      style={{
                        color: "#09547C",
                        fontSize: "18px",
                        margin: "0 0 10px 0",
                      }}
                    >
                      {t.detailsOfMessage}
                    </h3>
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingBottom: "10px" }}>
                    <strong>{t.titleLabel}:</strong> {title}
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingBottom: "10px" }}>
                    <strong>{t.emailLabel}:</strong> {email}
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingBottom: "10px" }}>
                    <strong>{t.messageLabel}:</strong> {message}
                  </td>
                </tr>
              </tbody>
            </table>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.5",
                marginTop: "20px",
              }}
            >
              {t.ifQuestions}{" "}
              <a
                href="mailto:sekretariat@puzg.pl"
                style={{ color: "#1F85B1", textDecoration: "none" }}
              >
                sekretariat@puzg.pl
              </a>
              .
            </p>

            {/* Button */}
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <a
                href="https://www.puzg.pl"
                style={{
                  display: "inline-block",
                  backgroundColor: "#09547C",
                  color: "#FFFFFF",
                  padding: "12px 25px",
                  borderRadius: "25px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                {t.buttonVisitPage}
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    {/* Footer */}
    <table
      style={{
        width: "100%",
        textAlign: "center",
        marginTop: "20px",
        fontSize: "14px",
        color: "#8C96A1",
      }}
    >
      <tbody>
        <tr>
          <td>
            <p style={{ margin: "5px 0" }}>
              © {new Date().getFullYear()} {t.sender}.{t.copyright}
            </p>
            <p style={{ margin: "5px 0" }}>
              <a
                href="#"
                style={{
                  color: "#1F85B1",
                  textDecoration: "none",
                  marginRight: "10px",
                }}
              >
                {t.privacyPolicy}
              </a>
              |
              <a
                href="#"
                style={{
                  color: "#1F85B1",
                  textDecoration: "none",
                  marginLeft: "10px",
                }}
              >
                {t.Bip}
              </a>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
