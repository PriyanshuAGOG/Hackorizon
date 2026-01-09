import { Star, Cross, Diamond, FlowingLine } from '../DecorativeElements'

export default function DecorativeElementsExample() {
  return (
    <div className="relative p-12 bg-background text-foreground space-y-8">
      <div className="flex gap-6">
        <Star className="w-12 h-12" />
        <Cross className="w-12 h-12" />
        <Diamond className="w-12 h-12" />
      </div>
      <FlowingLine />
    </div>
  )
}
