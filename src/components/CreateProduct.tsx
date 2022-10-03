import axios from "axios";
import React, { useState } from "react";
import { IProduct } from "../models";
import { ErrorMessage } from "./ErrorMessage";

const productData: IProduct = {
  title: 'test product',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 10
  }
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void
}

export const CreateProduct = (props: CreateProductProps) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    if (value.trim().length === 0) {
      setError('Please enter valid title');
      return false;
    }

    productData.title = value;

    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);
    props.onCreate(response.data);
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <form onSubmit={submitHandler} className="flex items-center align-center mb-2">
      <input
        type="text"
        className="border py-2 px-4 w-full"
        placeholder="Enter product title"
        value={value}
        onChange={changeHandler}
      />

      <button type="submit" className="py-2 px-4 border bg-yellow-200">Create</button>

      {error && <ErrorMessage error={error} />}
    </form>
  )
}