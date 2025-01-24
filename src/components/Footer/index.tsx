import { FooterContainer, Text, Link } from './styles'

export default function Footer() {
  return (
    <FooterContainer>
      <Text>
        Feito com o 🤍 por{' '}
        <Link
          href="https://www.linkedin.com/in/aleanrocha"
          target="_blank"
        >
          Alean Rocha
        </Link>
      </Text>
    </FooterContainer>
  )
}
