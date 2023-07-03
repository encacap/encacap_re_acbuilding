import PostLayout from "@components/Common/Layout/PostLayout";
import { LayoutBreadcrumbItemType } from "@components/Common/Layout/components/Breadcrumb/BreadcrumbItem";
import ProductDetail from "@components/Product/ProductDetail";
import { ACBUILDING_CATEGORY_CODE_ENUM, ICategory, IPost } from "@encacap-group/common/dist/re";
import { BasePageProps } from "@interfaces/baseTypes";
import { categoryService, configService, postService } from "@services/index";
import { getProductCategoryLink, getRequestURL } from "@utils/helper";
import { decode } from "html-entities";
import { GetServerSidePropsContext } from "next";
import { useMemo } from "react";
import striptags from "striptags";

interface ProductDetailPageProps extends BasePageProps {
  product: IPost;
  relatedProducts: IPost[];
  categories: ICategory[];
}

const ProductDetailPage = ({
  product,
  relatedProducts,
  websiteConfig: siteConfig,
  categories,
  ...props
}: ProductDetailPageProps) => {
  const { category } = product;
  const parentCategory = category.parent as ICategory;

  const breadcrumbItems: LayoutBreadcrumbItemType[] = useMemo(
    () => [
      parentCategory && {
        name: parentCategory.name,
        href: `/${parentCategory.code}`,
      },
      {
        name: category.name,
        href: getProductCategoryLink(category),
      },
    ],
    [category, parentCategory]
  );

  return (
    <PostLayout data={product} breadcrumbItems={breadcrumbItems} websiteConfig={siteConfig} {...props}>
      <ProductDetail
        data={product}
        relatedProducts={relatedProducts}
        siteConfig={siteConfig}
        categories={categories}
      />
    </PostLayout>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const postId = Number(context.params?.postId);

  const [siteConfig, product, relatedProducts, categories] = await Promise.all([
    configService.getSiteConfig(),
    postService.getPostById(postId),
    postService.getProducts({ limit: 6 }),
    categoryService.getChildCategoryParentByCode(ACBUILDING_CATEGORY_CODE_ENUM.PRODUCT),
  ]);

  const head = {
    title: product.title,
    requestURL: getRequestURL(context.req),
    description: decode(striptags(product.content)).substring(0, 150),
  };

  return {
    props: {
      head,
      siteConfig,
      product,
      relatedProducts,
      categories,
    },
  };
};

export default ProductDetailPage;