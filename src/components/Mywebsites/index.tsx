import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { t } from "i18next";
import { api } from "../../services/api";

const MyWebsites = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  const { data } = useQuery<
    {
      guid: string;
      isPaid: boolean;
    }[]
  >({
    queryKey: ["websites"],
    queryFn: async () => (await api.get("/websites"))?.data?.data,
    refetchOnWindowFocus: false,
    enabled: true,
  });

  const handleGoogleLoginSuccess = async () => {
    try {
      window.location.href = "https://localhost:7272/v1/auth/google";
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {data ? (
          <>
            <Button
              onPress={() => handleOpen()}
              key="lg"
              size="lg"
              variant="solid"
              className="dark:text-white"
            >
              My Websites
            </Button>
            <Modal isOpen={isOpen} size="md" onClose={onClose}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      <h1 className="text-center text-3xl">
                        {t("myWebsites.title")} 🔥
                      </h1>
                    </ModalHeader>
                    <ModalBody>
                      <div>
                        {data && (
                          <ul className="flex flex-col gap-8">
                            {data.map((site) => (
                              <li
                                className="flex justify-between"
                                key={site.guid}
                              >
                                {site.isPaid ? (
                                  <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold"
                                    href={`/website/${site.guid}`}
                                  >
                                    {`http:/localhost:3000/website/${site.guid}`}
                                  </a>
                                ) : (
                                  <span className="text-gray-500">
                                    {`http:/localhost:3000/website/${site.guid}`}
                                  </span>
                                )}

                                <div className="relative">
                                  {!site.isPaid && (
                                    <>
                                      <div
                                        className="cursor-pointer absolute -right-3 -top-5"
                                        title="Você precisa ativar o site para acessar"
                                      >
                                        <i
                                          className="icon-question-circle"
                                          style={{ fontSize: "25px" }}
                                        ></i>
                                      </div>
                                    </>
                                  )}
                                  {site.isPaid && (
                                    <button className="bg-green-500 text-white px-4 py-2 rounded">
                                      Ativo
                                    </button>
                                  )}
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="solid" onPress={onClose}>
                        {t("myWebsites.close")}
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </>
        ) : (
          <button onClick={handleGoogleLoginSuccess}>Login</button>
        )}
      </div>
    </>
  );
};

export default MyWebsites;
