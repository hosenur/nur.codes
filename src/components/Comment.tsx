import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
export default function Comments() {
  const { theme } = useTheme();
  return (
    <Giscus
      repo="HOSENUR/nur.codes"
      repoId="R_kgDOJJIl_A"
      category="General"
      categoryId="DIC_kwDOJJIl_M4CU5Ve"
      inputPosition="top"
      mapping="url"
      reactionsEnabled="1"
      emitMetadata="0"
      theme={theme=="black"?"dark_dimmed":"light"}
    />
  );
}