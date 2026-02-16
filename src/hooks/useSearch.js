import React from 'react'
import { useState, useMemo } from "react";
import { Link } from 'react-router-dom';

export function useSearch() {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);

  const options = ["Todo", "Imagenes", "Proyectos", "Experiencia", "Educacion"];

  const filtered = useMemo(() => {
    return options.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);


  return {
    query,
    setQuery,
    show,
    setShow,
    filtered,
  };
}