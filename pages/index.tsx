import Home from '@/screens/home/Home'
import { ProductService } from '@/services/product/product.service'
import { TypePaginationProducts, TypeProducts } from '@/types/product.interface'
import { GetStaticProps, NextPage } from 'next'

const HomePage: NextPage<TypePaginationProducts> = ({ products, length }) => {
  return <Home products={products} length={length} />
}


export const getStaticProps: GetStaticProps<
  TypePaginationProducts
> = async () => {
  const data = await ProductService.getAll({
    page: 1,
    perPage: 4
  })
  return { props: data }
}

export default HomePage
