import { ThreeDots } from "react-loader-spinner";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background" data-testid="loading-spinner">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="hsl(var(--primary))"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
}
