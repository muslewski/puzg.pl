"use client";

import Error from "next/error";

export default function NotFound() {
  return (
    <html lang="pl">
      <body>
        <Error
          statusCode={404}
          title="Nie można odnaleźć tej strony"
          withDarkMode={false}
        />
      </body>
    </html>
  );
}
