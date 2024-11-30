import { Link } from "react-router-dom";
export default function BrandLogo() {
  return (
    <>
      <Link to="/" class="flex items-center">
        <img
          src="https://ik.imagekit.io/dy6awnd3c/artesion-logo-website.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672681360026"
          class="h-24 mr-3 pb-4"
          alt="Artesion Logo"
        />
      </Link>
    </>
  );
}
