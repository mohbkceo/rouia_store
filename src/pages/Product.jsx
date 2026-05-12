import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProducts.js";
import ProductGallery from "../components/product/ProductGallery.jsx";
import ProductInfo from "../components/product/ProductInfo.jsx";
import ProductDescription from "../components/product/ProductDescription.jsx";
import Loader from "../components/common/Loader.jsx";
import EmptyState from "../components/common/EmptyState.jsx";

export default function Product() {
  const { handle } = useParams();
  const { product, loading, error } = useProduct(handle);

  if (loading) return <Loader />;
  if (error || !product) return <EmptyState title="Product not found" subtitle="This product may have been removed or doesn't exist." />;

  const images = product.images?.edges?.map((e) => e.node) || [];

  return (
    <div className="px-4 py-8 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <ProductGallery images={images} />
        <div className="flex flex-col gap-8 ">
          <ProductInfo product={product} />
          <hr className="border-brand/10" />
          <ProductDescription html={product.descriptionHtml} />
        </div>
      </div>
    </div>
  );
}
