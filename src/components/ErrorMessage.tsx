interface ErrorMessageProps {
  error: string
}

export const ErrorMessage = (props: ErrorMessageProps) => {
  return <p className="text-center text-red-600">{props.error}</p>
}