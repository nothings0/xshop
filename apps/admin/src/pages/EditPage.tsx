import Modify from "../components/Modify";
import { Loader } from "ui/mantine";
import { useQuery } from "ui/ReactQuery";
import { GetProduct } from "../apiRequest";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const { data: res, isLoading } = useQuery({
    queryFn: () => GetProduct(id!),
    queryKey: "",
    staleTime: 3 * 60 * 1000,
  });
  const product = res?.data;
  if (isLoading) return <Loader />;
  return <>{product && <Modify props={product} />}</>;
};

export default Edit;
