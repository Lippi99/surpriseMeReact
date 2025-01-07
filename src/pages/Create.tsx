import { useTranslation } from "react-i18next";
import PreviewMobile from "../components/PreviewMobile";
import Layout from "../Layout";
import { useState } from "react";
import {
  Button,
  Image,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "react-router";
import { z } from "zod";

const schema = z.object({
  plan: z.string().trim().nonempty({ message: "Plan is required" }),
  name: z.string().trim().min(1, { message: "Name is required" }),

  songUrl: z.string().trim().optional(),
  messages: z.array(
    z.object({
      message: z.string().trim().nonempty({ message: "Digite uma mensagem!" }),
      image: z.string().optional(),
    })
  ),
});

type Schema = z.infer<typeof schema>;

export const Create = () => {
  const [t] = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { setValue, control, getValues, register, handleSubmit, watch } =
    useForm<Schema>({
      resolver: zodResolver(schema),
      defaultValues: {
        plan: searchParams.get("plan") || "Basic",
        name: "",
        songUrl: "",
        messages: [
          { message: "", image: "" },
          { message: "", image: "" },
          { message: "", image: "" },
        ],
      },
    });

  const { fields } = useFieldArray({
    control,
    name: "messages",
  });

  const plans = [
    { name: "Basic", key: "Basic" },
    { name: "Premium", key: "Premium" },
  ];

  const plan = watch("plan");
  const name = watch("name");
  const songUrl = watch("songUrl");
  const messages = watch("messages");

  const handleChangePlan = (plan: string) => {
    if (plan === "Basic") {
      setValue("messages", [
        { message: "", image: "" },
        { message: "", image: "" },
        { message: "", image: "" },
      ]);
      setSearchParams({ plan: "Basic" });
    } else {
      setValue("messages", [
        { message: "", image: "" },
        { message: "", image: "" },
        { message: "", image: "" },
        { message: "", image: "" },
        { message: "", image: "" },
      ]);
      setSearchParams({ plan: "Premium" });
    }
  };

  const handleRemoveImage = (index: number) => {
    setValue(`messages.${index}.image`, "");
  };

  const blobToBase64 = async (blobUrl: string): Promise<string> => {
    const blob = await fetch(blobUrl).then((res) => res.blob());
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const onSubmit = async (data: Schema) => {
    setIsSubmitting(true);

    const messagesWithBase64Images = await Promise.all(
      data.messages.map(async (message) => {
        const base64Image = message.image
          ? await blobToBase64(message.image)
          : null;

        return {
          ...message,
          image: base64Image,
        };
      })
    );

    // Build the final payload
    const payload = {
      ...data,
      messages: messagesWithBase64Images,
    };

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Form submitted!");
    }, 2000);

    // Display the payload for debugging
    alert(JSON.stringify(payload, null, 2));
    console.log(payload);
  };

  const formProps = {
    plan,
    name,
    songUrl,
    messages,
  };

  return (
    <Layout>
      <title>Surprise4Me | Criar página personalizada</title>
      <div className="py-[17px] px-14 lg:pr-0 lg:max-w-7xl m-auto">
        <h1 className="text-5xl font-bold">{t("createPage.title")}</h1>
        <span className="ml-1 mt-5 inline-block">
          {t("createPage.instructions")}
        </span>

        <div className="flex flex-col lg:flex-row max-w-screen-xl w-full mt-10 gap-32">
          {/* Form */}
          <form className="flex-1" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-8">
              <Select
                {...register("plan")}
                onChange={(e) => handleChangePlan(e.target.value)}
                size="md"
                isRequired
                errorMessage={" "}
                label={t("createPage.choosePlan")}
                items={plans}
              >
                {(plan: { name: string; key: string }) => (
                  <SelectItem key={plan.key}>{plan.name}</SelectItem>
                )}
              </Select>
            </div>

            {searchParams.get("plan") === "Premium" ? (
              <div className="mb-8">
                <label className="mb-2 block">{t("createPage.pickSong")}</label>
                <Input
                  isRequired
                  errorMessage={" "}
                  placeholder="https://www.youtube.com/watch?v=4ZWKR2zJESk"
                  {...register("songUrl")}
                />
              </div>
            ) : null}

            <div className="mt-8">
              <Input
                errorMessage={" "}
                isRequired
                size="lg"
                label={t("createPage.personName") + ":"}
                {...register("name")}
              />
            </div>

            {fields.map((field, index) => (
              <div key={field.id} className="mt-4">
                <div className="mt-5">
                  <Controller
                    name={`messages.${index}.message`}
                    control={control}
                    render={({ field }) => (
                      <>
                        <label className="mb-2 block">
                          {t("createPage.writeMessage")} {index + 1}
                          <span className="ml-5">
                            {field.value.length} / 600
                          </span>
                        </label>
                        <Textarea
                          isRequired
                          label={`${t("createPage.messagePlaceholder")} ${
                            index + 1
                          }`}
                          errorMessage={" "}
                          {...field}
                          minRows={10}
                          maxLength={600}
                        />
                      </>
                    )}
                  />
                </div>

                <div className="mt-4">
                  <label className="mb-2 block">
                    {t("createPage.pickOrUpdateImage")} {index + 1}
                  </label>

                  <Controller
                    name={`messages.${index}.image`}
                    control={control}
                    render={({ field }) =>
                      !getValues(`messages.${index}.image`) ? (
                        <label className="border-2 border-dashed  rounded-lg cursor-pointer h-64 flex items-center justify-center">
                          <Input
                            isRequired
                            errorMessage={" "}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                const imageUrl = URL.createObjectURL(file);
                                field.onChange(imageUrl);
                                setValue(`messages.${index}.image`, imageUrl);
                              }
                            }}
                          />
                          <p>{t("createPage.clickToUpload")}</p>
                        </label>
                      ) : (
                        <div className="mt-4">
                          <h3 className="text-lg font-bold">
                            {t("createPage.imagePreview")} {index + 1}:
                          </h3>
                          <Image
                            src={getValues(`messages.${index}.image`) as string}
                            alt="Preview"
                            className="w-full max-w-60 h-60 object-cover"
                          />
                          <Button
                            color="danger"
                            onPress={() => handleRemoveImage(index)}
                            className="mt-2"
                          >
                            {t("createPage.removeImage")}
                          </Button>
                        </div>
                      )
                    }
                  />
                </div>
              </div>
            ))}

            <Button
              color="danger"
              className="mt-10"
              type="submit"
              isLoading={isSubmitting}
            >
              {isSubmitting
                ? t("createPage.creating")
                : t("createPage.createButton")}
            </Button>
          </form>

          <PreviewMobile
            form={
              formProps as unknown as {
                name: string;
                messages: {
                  message: string;
                  image: string;
                }[];
              }
            }
          />
        </div>
      </div>
    </Layout>
  );
};

export default Create;
