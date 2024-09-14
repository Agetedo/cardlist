import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Loader from "./Loader.tsx";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

export default function Layout() {
  return (
    <>
      <Header title={"Final Space"}/>
      <ErrorBoundary fallback={<ErrorDemo />}>
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </ErrorBoundary>
    </>
  );
}

function ErrorDemo() {
  return(
    <p style={{ color: "red", textAlign: "center", fontSize: 20, 
      lineHeight: 2, paddingTop: 65, paddingLeft: 15, paddingRight: 15, }}>
      Something went wrong. Please try starting it again!
    </p>
  );
}