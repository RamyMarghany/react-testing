type greetingProps = {
  name?: string
}
export const Greet = ({ name }: greetingProps) => {
  return <div>Hello {name}</div>
}
