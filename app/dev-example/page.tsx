"use client";

import { useState } from "react";
import { ExampleToggleGroup } from "@/components/ui/toggle-group";

const ExampleTogglePage = () => {
  const [pressed, setPressed] = useState<boolean>(true);
  return <ExampleToggleGroup />;
};

export default ExampleTogglePage;
