import { MessageType } from "@/types/allTypes";

const Message = (props: MessageType) => {
  return (
    <div
      data-testid="messageCon"
      className={`text-white message rounded-sm w-2/3 lg:w-1/2 flex items-center justify-center p-2 gap-2 m-auto border-2 ${
        props.type === "success"
          ? "bg-green-500 border-green-500 success"
          : "bg-red-500 border-red-500 error"
      }`}
    >
      <i
        data-testid="messageIcon"
        className={`bx ${
          props.type === "success" ? "bx-check" : "bxs-error-alt"
        }`}
      ></i>
      <p data-testid="p-message" className={``}>
        {props.messagge}
      </p>
    </div>
  );
};

export default Message;
