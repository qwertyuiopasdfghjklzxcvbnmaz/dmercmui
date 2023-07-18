import React from 'react'
import TodoDetails from '@/components/view/todo/detailsComponent';
import api from '@/utils/interceptor';
import {notFound} from "next/navigation"
type PageProps = {
    params: {
        itemId: string;
    }
}

const getDataById = async (itemId: any) => {
    const res = await api.get(`products/${itemId}`)
     .then(response => response.data)
     .catch(error => console.log(error));
    return res;
  }

async function Page({ params: { itemId } }: PageProps) {
    const data = await getDataById(itemId);
    if (!data?.id) return notFound();
  return (
    <TodoDetails todo={data} />
  )
}

export default Page