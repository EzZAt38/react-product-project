interface ErorrMessageProps {
  message: string;
}
const ErorrMessage = ({ message }: ErorrMessageProps) => {
  return message !== "" ? (
    <div className="text-red-600 font-semibold text-sm p-0 m-0">{message}</div>
  ) : null;
};

export default ErorrMessage;
