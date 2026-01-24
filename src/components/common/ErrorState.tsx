interface Props {
  message?: string;
}

export default function ErrorState({ message }: Props) {
  return <p style={{ color: "red" }}>{message || "Something went wrong"}</p>;
}
