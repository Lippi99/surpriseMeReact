import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

export const EnableAudio = ({
  setAudioMuted,
}: {
  setAudioMuted: (value: any) => void;
}) => {
  const { isOpen, onOpenChange, onClose } = useDisclosure({
    defaultOpen: true,
  });

  function onCloseSuccess() {
    setAudioMuted((prev: number) => (prev === 1 ? 0 : 1));
    onClose();
  }

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Autorizar áudio
              </ModalHeader>
              <ModalBody>
                <p>
                  Por questão de privacidade, solicitamos a autorização do seu
                  áudio para habilitar a música
                </p>
              </ModalBody>
              <ModalFooter className="flex items-center justify-between mt-10">
                <Button size="lg" color="danger" onPress={onClose}>
                  Cancelar
                </Button>
                <Button size="lg" color="success" onPress={onCloseSuccess}>
                  Autorizar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default EnableAudio;
