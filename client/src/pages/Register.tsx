import { useEffect } from "react";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe8WhPNn5GqrEhduyX8juD-kzTwGS9TJ0uDqpQs0hc4Yhwlzg/viewform";

export default function Register() {
  useEffect(() => {
    // Redirect to Google Form immediately
    window.location.href = GOOGLE_FORM_URL;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">Redirecting to Registration Form...</h1>
        <p className="text-muted-foreground mb-6">
          If you are not redirected automatically,{" "}
          <a href={GOOGLE_FORM_URL} className="text-primary underline">
            click here
          </a>
        </p>
      </div>
    </div>
  );
}
