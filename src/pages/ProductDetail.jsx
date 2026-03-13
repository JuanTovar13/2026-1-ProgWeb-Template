import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate()
  return (
    <>
    <h1>Product Detail</h1>
    <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  )
}