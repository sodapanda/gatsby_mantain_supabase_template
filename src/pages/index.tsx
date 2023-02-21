import React from "react";
import { Layout } from "../components/Layout/Layout";
import { ColorSchemeToggle } from "../components/ColorSchemeToggle/ColorSchemeToggle";
import { Button } from "@mantine/core";

export default function HomePage() {
  return (
    <Layout>
      <ColorSchemeToggle />
      <Button>Good</Button>
    </Layout>
  );
}
