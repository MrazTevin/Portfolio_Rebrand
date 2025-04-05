"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { 
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <div style={{ display: "none" }}>
      <Cal
        namespace="30min"
        calLink="milla-tevin/30min"
        config={{ layout: "month_view" }}
      />
    </div>
  );
}