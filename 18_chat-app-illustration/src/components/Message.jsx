function Message({ message, isMyMessage }) {
  return (
    <div
      className={isMyMessage ? "myMessage message" : "othersMessage message"}
    >
      <p>{message}</p>
    </div>
  );
}

export default Message;
