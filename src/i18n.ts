import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      myWebsites: {
        title: "Your Websites",
        statusActive: "Active",
        noWebSite: "You haven't created any website yet",
        statusInactive: "Inactive",
        close: "Close",
      },
      seo: {
        index: {
          title: "SurpriseMe - Make a surprise for someone special",
          ogTitle: "SurpriseMe - Make a surprise for someone special",
          description:
            "SurpriseMe is a platform destinated to create a surprise letter for someone special. You can choose a template, write a message and send it to the person you want to surprise.",
          ogDescription:
            "SurpriseMe is a platform destinated to create a surprise letter for someone special. You can choose a template, write a message and send it to the person you want to surprise.",
        },
        create: {
          title: "Create your page",
          ogTitle: "Create your page",
          description:
            "Create your page for someone special, choose a theme, write a message and send it to the person you want to surprise.",
          ogDescription:
            "Create your page for someone special, choose a theme, write a message and send it to the person you want to surprise.",
        },
      },
      header: {
        myWebsites: "My Websites",
      },
      indexPage: {
        sectionOne: {
          title: "Surprise your friends, love, and family",
          description:
            "Take some time to surprise someone you love. Share special moments and make someone smile.",
          button: "I want to surprise",
        },
        sectionTwo: {
          title: "How it works",
          descriptionOne: "1. Choose a theme",
          descriptionTwo: "2. Write a message and upload photos",
          descriptionThree: "3. Make the payment",
          descriptionFour: "4. You'll be redirected to the link's page",
          descriptionFive:
            "5. Share the link with the person you want to surprise",
        },
        sectionThree: {
          title: "Plan prices",
          basic: {
            title: "Basic",
            price: "$ 4",
            descriptionOne: "6 months access",
            descriptionTwo: "3 photos",
            descriptionThree: "No song",
            button: "Buy plan",
          },
          premium: {
            title: "Premium",
            tag: "Most popular",
            price: "$ 10",
            descriptionOne: "Lifetime access",
            descriptionTwo: "5 photos",
            descriptionThree: "With song",
            button: "Buy plan",
          },
        },
        sectionFour: {
          title: "Frequently Asked Questions",
          questionOne: {
            title: "What is SurpriseMe?",
            description:
              "SurpriseMe is a platform designed to create a surprise letter for someone special. You can choose a template, write a message, and send it to the person you want to surprise.",
          },
          questionTwo: {
            title: "How do I receive my page after payment?",
            description:
              "After payment, you will be redirected to the link's page, or you can access it in your My Websites section.",
          },
          questionThree: {
            title: "Can I edit after its creation?",
            description:
              "Yes, you can edit your page after creation. You can change the message, the photos, and the song if you got the premium plan.",
          },
        },
      },
      createPage: {
        title: "Create your page",
        instructions: "Fill the fields in blank",
        choosePlan: "Choose the plan",
        pickSong: "Pick a song (optional)",
        chooseTheme: "Choose the theme",
        personName: "Person or people's name",
        writeMessage: "Write your message",
        messagePlaceholder: "Message",
        pickOrUpdateImage: "Pick or update a picture for Message",
        clickToUpload: "Click to upload",
        orDragAndDrop: "or drag and drop",
        imagePreview: "Image Preview for Message",
        removeImage: "Remove Image",
        creating: "Creating...",
        createButton: "Create your website",
      },
      footer: {
        socialMedia: "Social Media",
        support: "Support",
        legal: {
          title: "Legal terms",
          termsOfService: "Terms of Service",
          privacyPolicy: "Privacy Policy",
        },
      },
    },
  },
  pt: {
    translation: {
      myWebsites: {
        title: "Seus sites",
        statusActive: "Ativo",
        noWebSite: "Você ainda não criou nenhum site",
        statusInactive: "Inativo",
        close: "Fechar",
      },
      seo: {
        index: {
          title: "SurpriseMe - Faça uma surpresa para alguém especial",
          ogTitle: "SurpriseMe - Faça uma surpresa para alguém especial",
          description:
            "SurpriseMe é uma plataforma destinada a criar uma carta surpresa para alguém especial. Você pode escolher um modelo, escrever uma mensagem e enviá-la para a pessoa que deseja surpreender.",
          ogDescription:
            "SurpriseMe é uma plataforma destinada a criar uma carta surpresa para alguém especial. Você pode escolher um modelo, escrever uma mensagem e enviá-la para a pessoa que deseja surpreender.",
        },
        create: {
          title: "Crie sua página",
          ogTitle: "Crie sua página",
          description:
            "Crie sua página para alguém especial, escolha um tema, escreva uma mensagem e envie para a pessoa que deseja surpreender.",
          ogDescription:
            "Crie sua página para alguém especial, escolha um tema, escreva uma mensagem e envie para a pessoa que deseja surpreender.",
        },
      },
      header: {
        myWebsites: "Meus sites",
      },
      indexPage: {
        sectionOne: {
          title: "Surpreenda seus amigos, amor e família",
          description:
            "Tire um tempo para surpreender alguém que você ama. Compartilhe momentos especiais e faça alguém sorrir.",
          button: "Quero surpreender",
        },
        sectionTwo: {
          title: "Como funciona",
          descriptionOne: "1. Escolha um tema",
          descriptionTwo: "2. Escreva uma mensagem e envie fotos",
          descriptionThree: "3. Faça o pagamento",
          descriptionFour: "4. Você será redirecionado para a página do link",
          descriptionFive:
            "5. Compartilhe o link com a pessoa que você quer surpreender",
        },
        sectionThree: {
          title: "Preços dos planos",
          basic: {
            title: "Básico",
            price: "R$ 4",
            descriptionOne: "Acesso por 6 meses",
            descriptionTwo: "3 fotos",
            descriptionThree: "Sem música",
            button: "Comprar plano",
          },
          premium: {
            title: "Premium",
            tag: "Mais popular",
            price: "R$ 10",
            descriptionOne: "Acesso vitalício",
            descriptionTwo: "5 fotos",
            descriptionThree: "Com música",
            button: "Comprar plano",
          },
        },
        sectionFour: {
          title: "Perguntas frequentes",
          questionOne: {
            title: "O que é o SurpriseMe?",
            description:
              "O SurpriseMe é uma plataforma destinada a criar uma carta surpresa para alguém especial. Você pode escolher um modelo, escrever uma mensagem e enviá-la para a pessoa que você deseja surpreender.",
          },
          questionTwo: {
            title: "Como recebo minha página após o pagamento?",
            description:
              "Após o pagamento, você será redirecionado para a página do link ou pode acessá-la na seção Meus Sites.",
          },
          questionThree: {
            title: "Posso editar após a criação?",
            description:
              "Sim, você pode editar sua página após a criação. Você pode mudar a mensagem, as fotos e a música, caso tenha adquirido o plano premium.",
          },
        },
      },
      createPage: {
        title: "Crie sua página",
        instructions: "Preencha os campos em branco",
        choosePlan: "Escolha o plano",
        pickSong: "Escolha uma música (opcional)",
        chooseTheme: "Escolha o tema",
        personName: "Nome da pessoa ou das pessoas",
        writeMessage: "Escreva sua mensagem",
        messagePlaceholder: "Mensagem",
        pickOrUpdateImage: "Escolha ou atualize uma imagem para a Mensagem",
        clickToUpload: "Clique para enviar",
        orDragAndDrop: "ou arraste e solte",
        imagePreview: "Pré-visualização da imagem para a Mensagem",
        removeImage: "Remover Imagem",
        creating: "Criando...",
        createButton: "Crie seu site",
      },
      footer: {
        socialMedia: "Redes Sociais",
        support: "Suporte",
        legal: {
          title: "Termos legais",
          termsOfService: "Termos de Serviço",
          privacyPolicy: "Política de Privacidade",
        },
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
