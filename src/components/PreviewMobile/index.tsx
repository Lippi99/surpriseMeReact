interface Props {
  form: {
    name: string;
    messages: {
      message: string;
      image: string;
    }[];
  };
}

const PreviewMobile = ({ form }: Props) => {
  return (
    <div className="flex-1 flex items-center justify-center flex-col mb-0 lg:sticky top-10 lg:self-start">
      <h2 className="text-center mb-5 text-2xl">Website's preview</h2>
      <div className="z-10 relative flex justify-center h-[520px] w-[250px] border-4 border-[#FF4E6D] rounded-2xl">
        <div className="absolute w-full h-full overflow-y-auto overflow-x-hidden pb-5">
          <div className="text-black w-full max-w-56 ml-2 rounded-2xl px-6 py-1 mt-10 bg-white z-10">
            supriseMe.com/
          </div>

          <h1 className="text-center my-5">{form.name}</h1>

          {/* Iterate through form.messages */}
          {form.messages.map((message, index) => (
            <div
              key={index}
              className="w-full break-all mt-10 px-3 flex flex-col gap-6 items-center"
            >
              {/* Image Display */}
              {message.image && (
                <img
                  className="w-11/12 h-[200px] object-cover flex items-center justify-center"
                  src={message.image}
                  alt="Image preview"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}

              {/* Separator */}
              <div className="w-1/2 h-0.5 dark:bg-gray-500 flex items-center" />

              {/* Text Display */}
              <p className="break-words">{message.message}</p>
            </div>
          ))}
        </div>

        <span className="border border-black bg-white w-28 h-5 rounded-br-xl rounded-bl-xl"></span>
        <span className="absolute -right-2 top-20 border-4 border-white h-10 rounded-md"></span>
        <span className="absolute -right-2 top-44 border-4 border-white h-24 rounded-md"></span>
      </div>
    </div>
  );
};

export default PreviewMobile;
