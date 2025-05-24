import { HeroSection } from "@/components/home/hero-section"
import { CallToActionButtons } from "@/components/home/call-to-action-buttons"
import { FeatureHighlights } from "@/components/home/feature-highlights"
import { PhilosophyQuote } from "@/components/home/philosophy-quote"

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <HeroSection />
          <CallToActionButtons />
          <FeatureHighlights />
          <PhilosophyQuote />
        </div>
      </div>
    </div>
  )
}
