import { useParams } from "react-router";
import { api } from "../../services/api";
import { useQuery } from "@tanstack/react-query";
import Footer from "../../components/Footer";
import Polaroid from "../../components/Polaroid";
import EnableAudio from "../../components/EnableAudio";
import { useState } from "react";

const WebsiteDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [audioMuted, setAudioMuted] = useState(1);

  const { data, error } = useQuery<{
    name: string;
    songUrl: string;
    messages: { name: string; message: string; image: string }[];
  }>({
    queryKey: ["website", id],
    queryFn: async () => (await api.get(`/websites/${id}`)).data.data,
    enabled: !!id,
    refetchOnWindowFocus: false,
  });

  if (error) return null;
  return (
    <>
      <title>{data?.name}</title>
      <meta property="og:title" content={data?.name} />
      <meta name="description" content={data?.name} />
      <meta property="og:description" content={data?.name} />

      <main className="relative left-0 top-0 right-0 bottom-0 h-full pt-10">
        {data?.songUrl !== "" && <EnableAudio setAudioMuted={setAudioMuted} />}
        <h1 className="text-6xl text-center mb-10">{data?.name}</h1>

        {data?.songUrl !== "" && (
          <iframe
            className="hidden"
            width="420"
            height="315"
            src={
              data?.songUrl.replace("watch?v=", "embed/").split("&")[0] +
              `?autoplay=1&mute=${audioMuted}`
            }
          ></iframe>
        )}

        <div className="max-w-md m-auto w-full flex flex-col items-center">
          {data?.messages?.map((message, index) => (
            <div
              key={index}
              className="w-full flex flex-col items-center mt-32 pb-10"
            >
              <Polaroid>
                <img
                  className="w-full max-w-[500px] h-[400px] rounded-md object-cover"
                  alt={message?.message}
                  src={message?.image}
                />
              </Polaroid>
              <div className="my-10 w-full h-px bg-gray-500" />
              <div className="w-full break-words">
                <h2>{message?.name}</h2>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default WebsiteDetail;
