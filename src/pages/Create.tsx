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
} from "@heroui/react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "react-router";
import { z } from "zod";
import { api } from "../services/api";
import { useQuery } from "@tanstack/react-query";
import { getPlans } from "../services/plan";

const schema = z.object({
  plan: z.string().trim().nonempty({ message: "Plan is required" }),
  name: z.string().trim().min(1, { message: "Name is required" }),
  songUrl: z.string().trim().optional(),
  messages: z.array(
    z.object({
      name: z.string().trim().nonempty({ message: "Digite uma mensagem!" }),
      image: z.string().optional(),
    })
  ),
});

type Schema = z.infer<typeof schema>;

export const Create = () => {
  const [t] = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data: plans } = useQuery({
    queryKey: ["plans"],
    queryFn: getPlans,
    refetchOnWindowFocus: false,
  });

  const { setValue, control, getValues, register, handleSubmit, watch } =
    useForm<Schema>({
      resolver: zodResolver(schema),
      defaultValues: {
        plan: searchParams.get("plan") || "Basic",
        name: "",
        songUrl: "",
        messages: [
          { name: "", image: "" },
          { name: "", image: "" },
          { name: "", image: "" },
        ],
      },
    });

  const { fields } = useFieldArray({
    control,
    name: "messages",
  });

  const plan = watch("plan");
  const name = watch("name");
  const songUrl = watch("songUrl");
  const messages = watch("messages");

  const handleChangePlan = (plan: string) => {
    if (plan === "2") {
      setValue("messages", [
        { name: "", image: "" },
        { name: "", image: "" },
        { name: "", image: "" },
      ]);
      setSearchParams({ plan: "Basic" });
    } else {
      setValue("messages", [
        { name: "", image: "" },
        { name: "", image: "" },
        { name: "", image: "" },
        { name: "", image: "" },
        { name: "", image: "" },
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
    try {
      const messagesWithBase64Images = await Promise.all(
        data.messages.map(async (message) => {
          const base64Image = message.image
            ? await blobToBase64(message.image)
            : null;

          return {
            ...message,
            image: "https://test.jpeg.com",
          };
        })
      );

      // Build the final payload
      const payload = {
        planId: Number(data.plan),
        ...data,
        messages: messagesWithBase64Images,
      };

      const response = await api.post("/checkout", payload);
      if (response.data) {
        // Simulate submission
        window.location.href = response.data.url;
      }
    } catch (error: unknown) {
      console.log("error", error);
    } finally {
      setIsSubmitting(false);
    }
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
      <iframe
        width="420"
        height="315"
        className="hidden"
        src={songUrl?.replace("watch?v=", "embed/") + "?autoplay=1"}
      ></iframe>

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
                onSelectionChange={(e) =>
                  handleChangePlan(e.currentKey as string)
                }
                size="md"
                isRequired
                errorMessage={" "}
                label={t("createPage.choosePlan")}
                items={plans?.data || []}
              >
                {(plan: { name: string; id: number }) => (
                  <SelectItem key={plan.id}>{plan.name}</SelectItem>
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
                    name={`messages.${index}.name`}
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
