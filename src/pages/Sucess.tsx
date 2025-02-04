import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@heroui/react";
// Replace useParams with useSearchParams for query parameters
import { QRCodeSVG } from "qrcode.react";
import Confetti from 'react-confetti'
import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";
import { useEffect } from "react"; 
import { useParams, useSearchParams } from "react-router";

const Success = () => {
  const { onOpenChange } = useDisclosure();
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const baseUrl = "http://localhost:3000";
  
  const sessionId = searchParams.get("sessionId");

  useEffect(() => {
    const confirmOrder = async () => {
      if (!sessionId) return;

      try {
        const response = await api.get(
          `/checkout/order-confirmation?sessionId=${sessionId}&websiteId=${id}`
        );
        if (!response.data) {
          window.location.href = "/error";
        }
      } catch {
        window.location.href = "/error";
      }
    };

    confirmOrder();
  }, [sessionId, id]);

  const { data: website } = useQuery<{ data: [] }>({
    queryKey: ["website", id],
    queryFn: async () => (await api.get(`/websites/${id}`)).data,
    enabled: !!id, 
    refetchOnWindowFocus: false,
  });

  const link = website?.data ? `${baseUrl}/website/${id}` : "";

  return (
    <main className="min-h-screen overflow-hidden">
      <title>Página sucesso!</title>
    
        <Confetti
          initialVelocityX={2}
          initialVelocityY={2}
          numberOfPieces={100}
          recycle
          run
          width={1228}
          wind={0}
        />
      
      <Modal
        className="-z-10"
        backdrop="transparent"
        size="4xl"
        isOpen={true}
        onOpenChange={onOpenChange}
        closeButton={<div></div>}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h1 className="text-center text-3xl text-green-400 font-bold">
                  Seu site foi criado com sucesso!
                </h1>
              </ModalHeader>
              <ModalBody>
                <span className="w-full mt-5 text-center inline-block text-xl">
                  Acesse seu site pelo QRCode
                </span>
                <div className="flex flex-col items-center justify-center">
                  <QRCodeSVG value={link} size={300} level="H" />
                  <span className="text-xl mt-5">OU</span>
                  <span className="text-xl text-center w-full inline-block">
                    Acesse
                    <a
                      href={link}
                      className="text-green-300 font-bold cursor-pointer underline ml-2"
                      target="_blank"
                    >
                      seu site aqui!
                    </a>
                  </span>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </main>
  );
};

export default Success;