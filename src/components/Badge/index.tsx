import styles from "./styles.module.scss"

const presetColors = {
  red: "#FF00003f",
  green: "#00FF003f",
  blue: "#0000FF3f",
  yellow: "#FFFF003f",
  purple: "#8000803f",
  orange: "#FFA5003f",
  pink: "#FFC0CB3f",
  gray: "#8080803f",
  black: "#0000003f",
}

interface BadgeProps {
  text?: string
  fontSize?: string | number
  backgroundColor?: keyof typeof presetColors | (string & {})
}

export default function Badge({
  text = "",
  fontSize = "10px",
  backgroundColor = "green",
}: BadgeProps) {
  if (backgroundColor && backgroundColor in presetColors)
    backgroundColor = presetColors[backgroundColor as keyof typeof presetColors]
  return (
    <div className={styles.self} style={{ fontSize, backgroundColor }}>
      {text}
    </div>
  )
}

export const createBadge =
  ({
    text: _text,
    fontSize: _fontSize,
    backgroundColor: _backgroundColor,
  }: BadgeProps) =>
  ({ text, fontSize, backgroundColor }: BadgeProps) => (
    <Badge
      text={_text ?? text}
      fontSize={_fontSize ?? fontSize}
      backgroundColor={_backgroundColor ?? backgroundColor}
    />
  )

export const TitleBadge = createBadge({
  fontSize: "14px",
  backgroundColor: "yellow",
})
