import { useEffect} from "react";
import { getCalApi } from "@calcom/embed-react";
import { CalendarArrowUp } from "lucide-react";
import { Button } from "../../components/ui/button";

export default function BookingButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      // Initialize calendar configuration
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  const handleBookClick = async () => {
    const cal = await getCalApi({ namespace: "30min" });
    // Use the correct method to open modal with calLink
    cal("modal", {
      calLink: "milla-tevin/30min"
    });
  };

  return (
    <Button onClick={handleBookClick}>
      Book a call
      <CalendarArrowUp className="h-4 w-4" />
    </Button>
  );
}