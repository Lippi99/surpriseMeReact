import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router";
import { api } from "../services/api";

const Cancel = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const sessionId = searchParams.get("sessionId");

  useEffect(() => {
    const cancelOrder = async () => {
      if (!sessionId) return;

      try {
        await api.get(
          `/checkout/order-confirmation?sessionId=${sessionId}&websiteId=${id}`
        );
        window.location.href = "/";
      } catch (e) {
        console.log(e);
      }
    };

    cancelOrder();
  }, [sessionId, id]);

  return <div>asdas</div>;
};

export default Cancel;
