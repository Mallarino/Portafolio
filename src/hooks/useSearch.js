import React from 'react'
import { useState, useMemo } from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next';

export function useSearch() {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);

  const {t, i18n} = useTranslation();

  const options = [t("searchInput.todo"), t("searchInput.proyectos"), t("searchInput.experiencia"), t("searchInput.educacion")];

  const filtered = useMemo(() => {
    return options.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, i18n.language]);


  return {
    query,
    setQuery,
    show,
    setShow,
    filtered,
  };
}